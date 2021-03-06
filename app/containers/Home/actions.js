/*
 *
 * Home actions
 *
 */

import {
  LOAD_INDUSTRIES,
  LOAD_INDUSTRIES_SUCCESS,
  LOAD_INDUSTRIES_ERROR,
  LOAD_JOB_POSTS,
  LOAD_JOB_POSTS_SUCCESS,
  LOAD_JOB_POSTS_ERROR,
} from './constants';

export function loadIndustries() {
  return {
    type: LOAD_INDUSTRIES,
  };
}

export function industriesLoaded(industries) {
  return {
    type: LOAD_INDUSTRIES_SUCCESS,
    industries,
  };
}

export function industriesLoadingError(error) {
  return {
    type: LOAD_INDUSTRIES_ERROR,
    error,
  };
}

export function loadJobPosts(industry) {
  console.log(industry);
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
