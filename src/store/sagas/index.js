import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import resourceSaga from "./resourceSaga";

export default function* rootSaga() {
  yield all([authSaga(), resourceSaga()]);
}
