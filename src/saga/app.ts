import { call, put, fork, takeEvery } from 'redux-saga/effects';

function* handleRequestSuggests() {
  yield true;
  /*while (true) {
    const { payload } = yield take(REQUEST_SUGGEST);
    const { data, error } = yield call(API.suggest, payload);
    if (data && !error) {
      yield put(successSuggest({ data }));
    } else {
      yield put(failureSuggest({ error }));
    }
  }*/
}

export default function* appSaga() {
  yield fork(handleRequestSuggests);
}
