import * as actionType from "../actions/actionTypes";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { login_fail, login_okay } from "../actions/authActions";
import API from "../../config/api";

export default function* authSagaWatcher() {
  yield takeEvery(actionType.LOGIN_START, authSagaWorker);
}
function* authSagaWorker(action) {
  yield console.log(action.userInfo);
}
