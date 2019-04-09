import { all } from 'redux-saga/effects';
import { netwrokTestSaga } from './network-test';

export default function* rootSaga() {
    yield all([
        ...netwrokTestSaga,
    ])
}