import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the opportunityBrowser state domain
 */

const selectOpportunityBrowserDomain = state =>
  state.get('opportunityBrowser', initialState);

/**
 * Other specific selectors
 */

/* Default selector used by IndustryBrowser
 */

const makeSelectOpportunityBrowser = () =>
  createSelector(selectOpportunityBrowserDomain, substate => substate.toJS());

const makeSelectBrowseMode = () =>
  createSelector(selectOpportunityBrowserDomain, substate =>
    substate.get('browseMode'),
  );

const makeSelectJobPosts = () =>
  createSelector(selectOpportunityBrowserDomain, substate =>
    substate.get('jobPosts'),
  );

export default makeSelectOpportunityBrowser;
export {
  selectOpportunityBrowserDomain,
  makeSelectBrowseMode,
  makeSelectJobPosts,
};
