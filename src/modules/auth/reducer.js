import { types } from './actions.js';
import storage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  isSignedIn: true,
  spinnerState: {
    loginLoading: false,
  },
};

const persistConfig = {
  key: 'auth',
  storage,
  timeout: 120000,
  blacklist: ['spinnerState'],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SIGN_IN.SUCCESS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return initialState;
  }
}

export default persistReducer(persistConfig, reducer);
