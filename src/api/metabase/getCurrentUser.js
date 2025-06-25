const { default: metabaseBaseApi } = require('./metabaseBaseApi');

async function getCurrentUser() {
  const response = await metabaseBaseApi.get('/user/current', {
    // headers: {
    //   'X-Metabase-Session': token,
    // },
  });
  console.log('SPA: getCurrentUser');
  console.log('SPA: response', response);
  // Update token for future apis
  // metabaseBaseApi.defaults.headers.common['X-Metabase-Session'] = token;
  return response;
}

export default getCurrentUser;
