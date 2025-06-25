import metabaseBaseApi from './metabaseBaseApi';

async function runSavedQuery({ queryId, parameters = [] }) {
  const response = await metabaseBaseApi.post(`/card/${queryId}/query`, {
    parameters,
  });
  return response.data;
}

export default runSavedQuery;
