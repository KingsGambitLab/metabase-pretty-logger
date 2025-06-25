import { useCallback, useEffect, useMemo, useState } from 'react';

import metabaseApi from 'api/metabase';

function useRunSavedQuery({ queryData, variables = {} }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const parameters = useMemo(() => {
    return queryData.parameters
      .map((parameter) => {
        const { id, slug, target, type } = parameter;
        return {
          id,
          target,
          type,
          value: variables[slug],
        };
      })
      .filter((o) => o.value && o.value.length > 0);
  }, [queryData.parameters, variables]);

  const fetch = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    setError(null);
    try {
      const data = await metabaseApi.runSavedQuery({
        queryId: queryData.id,
        parameters,
      });
      setData(data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, [loading, parameters, queryData.id]);

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, error, data, fetch };
}

export default useRunSavedQuery;
