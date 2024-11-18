import { NETWORK_TEST } from '../../constants/network-test';
import { takeEvery, call, put } from 'redux-saga/effects';
import AxiosService from '../../../networks/AxiosService';
import { ApiUrls } from '../../../networks/ApiUrls';

function* callNetworkTestApi(action) {
  try {
    const response = yield call(
      AxiosService.getServiceData,
      ApiUrls.MOVIE_LIST,
      {}
    );
    const result = response.data;
    yield put({ type: NETWORK_TEST.SUCCESS, result });
  } catch (error) {
    yield put({ type: NETWORK_TEST.FAILURE });
  }
}

export const networkTestSaga = [
  takeEvery(NETWORK_TEST.START, callNetworkTestApi),
];
