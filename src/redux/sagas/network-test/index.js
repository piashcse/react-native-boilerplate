import {NETWROK_TEST, NETWROK_TEST_FAILURE, NETWROK_TEST_SUCCESS} from "../../constants/network-test";
import { takeEvery, call, put } from 'redux-saga/effects';
import ApiService from '../../../networks/ApiService';
import AxiosService from '../../../networks/AxiosService';


function* callNetworkTestApi(action) {
    try {
        const response = yield call(AxiosService.getServiceData, ApiService.TEST_API, {});
        const result = response.data;
        yield put({ type: NETWROK_TEST_SUCCESS, result });
    } catch (error) {
        yield put({ type: NETWROK_TEST_FAILURE });
    }
}

export const netwrokTestSaga = [
    takeEvery(NETWROK_TEST, callNetworkTestApi)
];