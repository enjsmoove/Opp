import { createSelector } from 'reselect';

const selectRoute = state => state.get('route');

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

const makeSelectIndustries = () =>
  createSelector(selectRoute, routeState => routeState.getIn('industries'));

export { makeSelectLocation, makeSelectIndustries };
