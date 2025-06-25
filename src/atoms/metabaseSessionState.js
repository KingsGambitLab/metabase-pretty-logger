import { atom } from 'recoil';

const metabaseSessionState = atom({
  key: 'metabaseSessionState',
  default: {
    token: null,
    isLoggedIn: false,
  },
});

export default metabaseSessionState;
