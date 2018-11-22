import { createSelector } from 'reselect';

const selectRoute = state => state.get('route');
const selectHome = state => state.get('home');

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

const makeSelectIndustries = () =>
  createSelector(selectHome, routeState => routeState.get('industries'));

const makeSelectLoading = () =>
  createSelector(selectHome, routeState => routeState.get('loading'));

const makeSelectError = () =>
  createSelector(selectHome, routeState => routeState.get('error'));

export {
  makeSelectLocation,
  makeSelectIndustries,
  makeSelectLoading,
  makeSelectError,
};
