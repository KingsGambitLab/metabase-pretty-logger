import { useParams } from 'react-router-dom';

import ColumnedSection from '../ColumnedSection';
import ErrorLayout from 'components/ErrorLayout';
import formatMetabaseQueryResult from 'utils/formatMetabaseQueryResult';
import Loader from 'components/Loader';
import SAVED_LOG_QUERIES_CONFIG from 'data/savedLogQueriesConfig';
import useRunSavedQuery from 'hooks/useRunSavedQuery';

// const LOG_UUID = '32fd12fb-f669-4980-afb0-cad7af6ce621';
// const LOG_UUID = 'c1f450c4-eb6e-4d24-add9-db4500510891';

function QueryResult({ queryData }) {
  const { serviceName, logId } = useParams();
  const serviceConfig = SAVED_LOG_QUERIES_CONFIG[serviceName];

  console.log('[QueryResult] serviceName:', serviceName);
  console.log('[QueryResult] logId:', logId);
  console.log('[QueryResult] serviceConfig:', serviceConfig);
  console.log('[QueryResult] queryData:', queryData);

  const { loading, error, data, fetch } = useRunSavedQuery({
    queryData,
    variables: { uuid: logId },
  });

  console.log('[QueryResult] loading:', loading);
  console.log('[QueryResult] error:', error);
  console.log('[QueryResult] data:', data);
  console.log('[QueryResult] fetch:', fetch);

  if (loading) {
    return <Loader />;
  } else if (error) {
    return (
      <ErrorLayout
        title="Failed to load logs!"
        message="Unable to execute metabase query to get logs"
        actionFn={fetch}
      />
    );
  } else if (data) {
    const results = formatMetabaseQueryResult(data);
    if (results.length > 0) {
      console.log({ result: results[0] });

      return (
        <div className="p-t-xxs p-b-s">
          {serviceConfig.resultLayout.sections.map((section, index) => (
            <ColumnedSection
              {...section}
              key={index}
              result={results[0]}
            />
          ))}
        </div>
      );
    } else {
      return (
        <ErrorLayout
          title="No logs found!"
          message="Unable to find any matching logs for given uuid"
          actionFn={fetch}
        />
      );
    }
  } else {
    return null;
  }
}

export default QueryResult;
