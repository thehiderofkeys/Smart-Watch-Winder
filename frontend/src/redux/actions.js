import Api from '../api';
import {createApiThunks} from './thunk-utils';

export const {
  loginThunk,
  logoutThunk,
} = createApiThunks(Api);
