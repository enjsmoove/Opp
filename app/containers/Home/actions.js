/*
 *
 * Home actions
 *
 */

import {
  LOAD_INDUSTRIES,
  LOAD_INDUSTRIES_SUCCESS,
  LOAD_INDUSTRIES_ERROR,
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
