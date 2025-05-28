import { call, put, takeLatest } from "redux-saga/effects";
// import {
//     FETCH_APP_REQUEST,
//     FETCH_APP_SUCCESS,
//     FETCH_APP_FAILURE,
// } from "./appTypes";
import { fetchAppDataApi, fetchMeInfoApi } from "./appService"; // Import hàm từ services
import { APP_TYPE } from "./appType";
import { getMeInfo, getMeInfoSuccess } from "./appSlice";

function* fetchAppWorker() {
    try {
        const data = yield call(fetchAppDataApi); // Gọi hàm fetch từ service
        yield put({ type: APP_TYPE.FETCH_APP_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: APP_TYPE.FETCH_APP_FAILURE, payload: error.message });
    }
}
function* doGetMeInfo() {
    try {
        // Giả sử bạn có một API để lấy thông tin người dùng
        const userInfo = yield call(fetchMeInfoApi); // Thay thế bằng hàm thực tế để lấy thông tin người dùng
        yield put(getMeInfoSuccess(userInfo)); // Gọi action thành công với thông tin người dùng
    } catch (error) {
        yield put(getMeInfo.failure(error.message)); // Gọi action thất bại với lỗi
    }
}
export default function* appSaga() {
    yield takeLatest(APP_TYPE.FETCH_APP_REQUEST, fetchAppWorker);
    yield takeLatest(getMeInfo.type, doGetMeInfo); // Assuming you want to handle this as well
}
