import metabaseBaseApi from './metabaseBaseApi';

async function createSessionToken({ email, password }) {
  const {
    data: { id: token },
  } = await metabaseBaseApi.post('/session', {
    username: email,
    password,
  });
  metabaseBaseApi.defaults.headers.common['X-Metabase-Session'] = token;
  return token;
}

export default createSessionToken;
