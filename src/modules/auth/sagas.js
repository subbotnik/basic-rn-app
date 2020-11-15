import { all, takeLatest } from 'redux-saga/effects';
import { types } from './actions';

function* authRequest() {
  try {
    // your request
  } catch (e) {
    return e;
  }
}

export default function* rootSaga() {
  yield all([takeLatest(types.SIGN_IN.REQUEST, authRequest)]);
}