import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the jobViewer state domain
 */

const selectJobViewerDomain = state => state.get('jobViewer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by JobViewer
 */

const makeSelectJobViewer = () =>
  createSelector(selectJobViewerDomain, substate => substate.toJS());

export default makeSelectJobViewer;
export { selectJobViewerDomain };
