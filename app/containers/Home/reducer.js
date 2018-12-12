/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_INDUSTRIES,
  LOAD_INDUSTRIES_SUCCESS,
  LOAD_INDUSTRIES_ERROR,
  SELECT_INDUSTRY,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  industries: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_INDUSTRIES:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['industries'], false);
    case LOAD_INDUSTRIES_SUCCESS:
      return state
        .setIn(['industries'], action.industries)
        .set('loading', false);
    case LOAD_INDUSTRIES_ERROR:
      return state.set('error', action.error).set('loading', false);
    case SELECT_INDUSTRY:
      return state.set('browseMode', 2);
    default:
      return state;
  }
}

export default homeReducer;
