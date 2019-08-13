import * as actionType from "../actions/actionTypes";
import { takeEvery, put, select } from "redux-saga/effects";
import axios from "axios";
//import { login_fail, login_okay } from "../actions/authActions";
import API from "../../config/api";

export default function* resourceSagaWatcher() {
  yield takeEvery(actionType.ADD_MOOD_START, resourceSagaWorker);
}
function* resourceSagaWorker(action) {
  //yield console.log("from saga", action);
  let data = action.mood;
  const stamp = Date.now().toString();
  const token = localStorage.getItem("moody-token");
  const uid = yield select(state => state.auth.userInfo.uid);
  data.uid = uid;
  try {
    let result = yield axios({
      headers: { Authorization: "bearer " + token },
      method: "post",
      url: `${API.resource}${stamp}`,
      data
    });
    console.log(result.data);
  } catch (err) {
    console.log(err);
  }
}
