import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the jobBrowser state domain
 */

const selectJobBrowserDomain = state => state.get('jobBrowser', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by JobBrowser
 */

const makeSelectJobBrowser = () =>
  createSelector(selectJobBrowserDomain, substate => substate.toJS());

export default makeSelectJobBrowser;
export { selectJobBrowserDomain };
