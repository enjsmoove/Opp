import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_JOB_POSTS } from './constants';
import { jobPostsLoaded, jobPostsLoadingError } from './actions';
// Individual exports for testing
export function* getJobPosts(i) {
  const industryCode = i.industry[1];
  console.log('yessir', industryCode);

  // See example in containers/HomePage/saga.js
  const requestURL = `http://localhost:3000/job/${industryCode}`;

  try {
    const jobPosts = yield call(request, requestURL);
    yield put(jobPostsLoaded(jobPosts));
  } catch (err) {
    yield put(jobPostsLoadingError(err));
  }
}

export default function* jobPostData() {
  yield takeLatest(LOAD_JOB_POSTS, getJobPosts);
}
