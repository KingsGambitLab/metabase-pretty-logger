import React from 'react';
import { useParams } from 'react-router-dom';

import ErrorLayout from 'components/ErrorLayout';
import Loader from 'components/Loader';
import QueryResult from './QueryResult';
import SAVED_LOG_QUERIES_CONFIG from 'data/savedLogQueriesConfig';
import useSavedQuery from 'hooks/useSavedQuery';
import withMetabaseLogin from 'hoc/withMetabaseLogin';

function PrettyLogsPage() {
  const { serviceName } = useParams();
  const serviceConfig = SAVED_LOG_QUERIES_CONFIG[serviceName];

  console.log('[PrettyLogsPage] serviceName:', serviceName);
  console.log('[PrettyLogsPage] serviceConfig:', serviceConfig);

  const { loading, error, data, fetch } = useSavedQuery({
    queryId: serviceConfig?.queryId,
  });

  console.log('[PrettyLogsPage] loading:', loading);
  console.log('[PrettyLogsPage] error:', error);
  console.log('[PrettyLogsPage] data:', data);
  console.log('[PrettyLogsPage] fetch:', fetch);

  if (loading) {
    return <Loader />;
  } else if (error) {
    return (
      <ErrorLayout
        title="Failed to load logs!"
        message="Unable to fetch metabase query details"
        actionFn={fetch}
      />
    );
  } else if (data) {
    return <QueryResult queryData={data} />;
  } else {
    return null;
  }
}

export default withMetabaseLogin(PrettyLogsPage);
