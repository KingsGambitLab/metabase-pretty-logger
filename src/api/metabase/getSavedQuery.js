import metabaseBaseApi from './metabaseBaseApi';

async function getSavedQuery({ queryId }) {
  const response = await metabaseBaseApi.get(`/card/${queryId}`);
  return response.data;
}

export default getSavedQuery;
