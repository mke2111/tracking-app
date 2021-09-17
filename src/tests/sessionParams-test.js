import { SET_SESSION_TITLE } from '../actions/constants';

import sessionParamsReducer from '../reducers/sessionParams';

describe('Session Params Reducer', () => {
  it('Return the default state', () => {
    const mockState = {
      title: '',
    };
    const mockAction = { type: null };
    const state = sessionParamsReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      title: '',
    });
  });

  it('Set title in the state', () => {
    const mockState = {
      title: '',
    };
    const mockAction = { type: SET_SESSION_TITLE, title: 'Test Title' };
    const state = sessionParamsReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      title: 'Test Title',
    });
  });
});
