import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';

import ErrorLayout from 'components/ErrorLayout';
import Loader from 'components/Loader';
import metabaseSessionState from 'atoms/metabaseSessionState';
import metabaseApi from 'api/metabase';

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
          message="Please login to metabase to continue"
        />
      );
    } else {
      return <Loader />;
    }
  };
}

export default withMetabaseLogin;
