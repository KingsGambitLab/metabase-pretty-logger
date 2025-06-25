import { useEffect, useCallback, useState } from 'react';

import metabaseApi from 'api/metabase';

function useSavedQuery({ queryId }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetch = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    setError(null);
    try {
      const data = await metabaseApi.getSavedQuery({ queryId });
      setData(data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, [loading, queryId]);

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, error, data, fetch };
}

export default useSavedQuery;
