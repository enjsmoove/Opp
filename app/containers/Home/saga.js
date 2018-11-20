import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {
  industriesLoaded,
  industriesLoadingError,
} from 'containers/Home/actions';
import { LOAD_INDUSTRIES } from './constants';

// Individual exports for testing
export function* getIndustries() {
  // See example in containers/HomePage/saga.js
  const requestURL = `http://localhost:3000/industry`;

  try {
    // Call our request helper (see 'utils/request')
    const industries = yield call(request, requestURL);
    yield put(industriesLoaded(industries));
  } catch (err) {
    yield put(industriesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* industryData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_INDUSTRIES, getIndustries);
}
