import { FETCH_USERDATA_PENDING, FETCH_USERDATA_SUCCESS, FETCH_USERDATA_ERROR } from '../actions/constants';

import userDataReducer from '../reducers/userData';

describe('User Data Reducer', () => {
  it('Return the default state', () => {
    const mockState = {
      pending: false,
      userData: {},
      error: null,
    };
    const mockAction = { type: null };
    const state = userDataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      userData: {},
      error: null,
    });
  });

  it('Set error in the state', () => {
    const mockState = {
      pending: false,
      userData: {},
      error: null,
    };
    const mockAction = { type: FETCH_USERDATA_ERROR, error: 'Test error' };
    const state = userDataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      userData: {},
      error: 'Test error',
    });
  });

  it('Set user data in the state', () => {
    const mockState = {
      pending: false,
      userData: {},
      error: null,
    };
    const mockAction = {
      type: FETCH_USERDATA_SUCCESS,
      user: { username: 'test-title' },
    };
    const state = userDataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      userData:
        { username: 'test-title' },
      error: null,
    });
  });

  it('Set pending true in the state', () => {
    const mockState = {
      pending: false,
      userData: {},
      error: null,
    };
    const mockAction = { type: FETCH_USERDATA_PENDING };
    const state = userDataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: true,
      userData: {},
      error: null,
    });
  });
});
