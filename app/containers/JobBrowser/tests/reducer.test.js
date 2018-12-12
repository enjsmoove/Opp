import { fromJS } from 'immutable';
import jobBrowserReducer from '../reducer';

describe('jobBrowserReducer', () => {
  it('returns the initial state', () => {
    expect(jobBrowserReducer(undefined, {})).toEqual(fromJS({}));
  });
});
