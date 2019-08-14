import * as actionType from "../actions/actionTypes";
import { takeEvery, put, select } from "redux-saga/effects";
import axios from "axios";
import { add_mood_okay } from "../actions/moodActions";
import API from "../../config/api";

export default function* resourceSagaWatcher() {
  yield takeEvery(actionType.ADD_MOOD_START, resourceSagaWorker);
  yield takeEvery(actionType.GET_MOODS_START, moodSagaWorker);
}
function* moodSagaWorker(action) {
  yield console.log(action);
  const token = localStorage.getItem("moody-token");
  try {
    let result = yield axios({
      headers: { Authorization: "bearer " + token },
      method: "get",
      url: `${API.moods}${action.timeString}`
    });
    console.log(result.data.data.result);
  } catch (e) {
    console.log(e);
  }
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

    yield put(add_mood_okay());
  } catch (err) {
    console.log(err);
  }
}
