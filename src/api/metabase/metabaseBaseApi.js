import axios from 'axios';
import { DateUtils } from '@vectord/utils';

const metabaseBaseApi = axios.create({
  baseURL: process.env.REACT_APP_METABASE_API_BASE,
  timeout: 100 * DateUtils.ONE_SECOND,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default metabaseBaseApi;
