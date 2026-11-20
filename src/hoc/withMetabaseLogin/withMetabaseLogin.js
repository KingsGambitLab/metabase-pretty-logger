import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';

import ErrorLayout from 'components/ErrorLayout';
import Loader from 'components/Loader';
import metabaseSessionState from 'atoms/metabaseSessionState';
import metabaseApi from 'api/metabase';

// Where the user signs in: the host of the Metabase API this build talks to.
// An absolute base (local dev) names its own host; the relative production
// base ("/api") resolves to the page's host, which serves Metabase.
function getMetabaseSignInHost() {
  const apiBase = process.env.REACT_APP_METABASE_API_BASE || '/api';
  return new URL(apiBase, window.location.origin).host;
}

function withMetabaseLogin(BaseComponent) {
  return function WithMetabaseLogin(props) {
    const [{ isLoggedIn }, setMetabaseSessionState] =
      useRecoilState(metabaseSessionState);
    const [requestToLogin, setRequestToLogin] = useState(false);

    useEffect(() => {
      async function run() {
        try {
          await metabaseApi.getCurrentUser();
          setMetabaseSessionState({
            isLoggedIn: true,
          });
        } catch (error) {
          setRequestToLogin(true);
        }
      }

      if (!isLoggedIn) {
        run();
      }
    }, [isLoggedIn, setMetabaseSessionState]);

    if (isLoggedIn) {
      return <BaseComponent {...props} />;
    } else if (requestToLogin) {
      return (
        <ErrorLayout
          title="Not Authenticated!"
          message={`Please sign in to Metabase at ${getMetabaseSignInHost()} in another tab, then reload this page`}
        />
      );
    } else {
      return <Loader />;
    }
  };
}

export default withMetabaseLogin;
