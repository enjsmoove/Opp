import { fromJS } from 'immutable';
import jobViewerReducer from '../reducer';

describe('jobViewerReducer', () => {
  it('returns the initial state', () => {
    expect(jobViewerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
