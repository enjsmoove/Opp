/*
 *
 * IndustryBrowser actions
 *
 */

import {
  LOAD_JOB_POSTS,
  SELECT_INDUSTRY,
  LOAD_JOB_POSTS_SUCCESS,
  LOAD_JOB_POSTS_ERROR,
} from './constants';

export function loadJobPosts(industry) {
  return {
    type: LOAD_JOB_POSTS,
    industry,
  };
}

export function jobPostsLoaded(jobPosts) {
  return {
    type: LOAD_JOB_POSTS_SUCCESS,
    jobPosts,
  };
}

export function jobPostsLoadingError(error) {
  return {
    type: LOAD_JOB_POSTS_ERROR,
    error,
  };
}

export function selectIndustry(industry) {
  // console.log('yooo', industry)
  return {
    type: SELECT_INDUSTRY,
    industry,
  };
}
