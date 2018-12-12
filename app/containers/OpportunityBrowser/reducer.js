/*
 *
 * IndustryBrowser reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_JOB_POSTS,
  SELECT_INDUSTRY,
  LOAD_JOB_POSTS_SUCCESS,
  LOAD_JOB_POSTS_ERROR,
} from './constants';

export const initialState = fromJS({
  currentIndustry: '',
  jobPosts: [],
  browseMode: 0,
});

function opportunityBrowserReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_JOB_POSTS:
      return state.set('browseMode', 2);
    case LOAD_JOB_POSTS_SUCCESS:
      return state.setIn(['jobPosts'], action.jobPosts);
    case LOAD_JOB_POSTS_ERROR:
      return state;
    case SELECT_INDUSTRY:
      console.log('select');
      return state.set('currentIndustry', action.industry);
    default:
      return state;
  }
}

export default opportunityBrowserReducer;
