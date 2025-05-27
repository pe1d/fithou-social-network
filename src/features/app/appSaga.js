import { call, put, takeLatest } from "redux-saga/effects";
// import {
//     FETCH_APP_REQUEST,
//     FETCH_APP_SUCCESS,
//     FETCH_APP_FAILURE,
// } from "./appTypes";
import { fetchAppDataApi } from "./appService"; // Import hàm từ services
import { APP_TYPE } from "./appType";

function* fetchAppWorker() {
    try {
        const data = yield call(fetchAppDataApi); // Gọi hàm fetch từ service
        yield put({ type: APP_TYPE.FETCH_APP_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: APP_TYPE.FETCH_APP_FAILURE, payload: error.message });
    }
}

export default function* appSaga() {
    yield takeLatest(APP_TYPE.FETCH_APP_REQUEST, fetchAppWorker);
}
