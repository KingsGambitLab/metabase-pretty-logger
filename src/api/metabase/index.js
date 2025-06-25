import createSessionToken from './createSessionToken';
import getCurrentUser from './getCurrentUser';
import getSavedQuery from './getSavedQuery';
import runSavedQuery from './runSavedQuery';

const metabaseApi = {
  createSessionToken,
  getCurrentUser,
  getSavedQuery,
  runSavedQuery,
};

export default metabaseApi;
