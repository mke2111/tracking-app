import {
  SET_DATA_PENDING, SET_DATA_SUCCESS, SET_DATA_ERROR, RESET_DATA,
} from '../actions/constants';
import dataReducer from '../reducers/data';

describe('Data Reducer', () => {
  it('Return the default state', () => {
    const mockState = {
      pending: false,
      user: {},
      error: null,
    };
    const mockAction = { type: null };
    const state = dataReducer(mockState, mockAction);
    expect(state).toStrictEqual({ pending: false, user: {}, error: null });
  });

  it('Set error in the state', () => {
    const mockState = {
      pending: false,
      user: {},
      error: null,
    };
    const mockAction = { type: SET_DATA_ERROR, error: 'Test error' };
    const state = dataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      user: {},
      error: 'Test error',
    });
  });

  it('Set user data in the state', () => {
    const mockState = {
      pending: false,
      user: {},
      error: null,
    };
    const mockAction = {
      type: SET_DATA_SUCCESS,
      user: {
        id: 1,
        username: 'Spider-man',
        password: 'Webcrawler',
      },
    };
    const state = dataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      user: {
        id: 1,
        username: 'Spider-man',
        password: 'Webcrawler',
      },
      error: null,
    });
  });

  it('Set pending true in the state', () => {
    const mockState = {
      pending: true,
      user: {},
      error: null,
    };
    const mockAction = { type: SET_DATA_PENDING };
    const state = dataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: true,
      user: {},
      error: null,
    });
  });
  it('Reset data in state', () => {
    const mockState = {
      pending: false,
      user: {
        id: 1,
        username: 'Spider-man',
        password: 'Webcrawler',
      },
      error: null,
    };
    const mockAction = { type: RESET_DATA };
    const state = dataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      user: {},
      error: null,
    });
  });
});
