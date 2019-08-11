import * as actionType from "../actions/actionTypes";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { login_fail, login_okay } from "../actions/authActions";
import API from "../../config/api";

export default function* authSagaWatcher() {
  yield takeEvery(actionType.LOGIN_START, authSagaWorker);
}
function* authSagaWorker(action) {
  //yield console.log(action.userInfo);
  const email = action.userInfo.email;
  const password = action.userInfo.password;
  try {
    let loginResult = yield axios.post(API.auth, { email, password });
    yield localStorage.setItem("moody-token", loginResult.data.token);
    //console.log(loginResult.data);
    yield put(login_okay());
  } catch (err) {
    console.log(err);
    yield put(login_fail());
  }
}
