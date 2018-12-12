import { fromJS } from 'immutable';
import opportunityBrowserReducer from '../reducer';

describe('opportunityBrowserReducer', () => {
  it('returns the initial state', () => {
    expect(opportunityBrowserReducer(undefined, {})).toEqual(fromJS({}));
  });
});
