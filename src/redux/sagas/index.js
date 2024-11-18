import { all } from 'redux-saga/effects';
import { networkTestSaga } from './network-test';

export default function* rootSaga() {
  yield all([...networkTestSaga]);
}
