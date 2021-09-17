import {
  SET_SESSIONDATA_PENDING, SET_SESSIONDATA_SUCCESS, SET_SESSIONDATA_ERROR, RESET_SESSIONDATA,
  FETCH_SESSION_ID, SET_SESSION_REDIRECT,
} from '../actions/constants';
import sessionDataReducer from '../reducers/sessionData';

describe('Session Data Reducer', () => {
  it('Return the default state', () => {
    const mockState = {
      pending: false,
      session: {},
      id: null,
      error: null,
      redirect: false,
    };
    const mockAction = { type: null };
    const state = sessionDataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      session: {},
      id: null,
      error: null,
      redirect: false,
    });
  });

  it('Set error in the state', () => {
    const mockState = {
      pending: false,
      session: {},
      id: null,
      error: null,
      redirect: false,
    };
    const mockAction = { type: SET_SESSIONDATA_ERROR, error: 'Test error' };
    const state = sessionDataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      session: {},
      id: null,
      redirect: false,
      error: 'Test error',
    });
  });

  it('Set session data in the state', () => {
    const mockState = {
      pending: false,
      session: {},
      id: null,
      error: null,
      redirect: false,
    };
    const mockAction = {
      type: SET_SESSIONDATA_SUCCESS,
      session: {
        title: 'test-title',
      },
    };
    const state = sessionDataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      session: {
        title: 'test-title',
      },
      id: null,
      error: null,
      redirect: false,
    });
  });

  it('Set session id in the state', () => {
    const mockState = {
      pending: false,
      session: {},
      id: null,
      error: null,
      redirect: false,
    };
    const mockAction = {
      type: FETCH_SESSION_ID,
      id: '2',
    };
    const state = sessionDataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      session: {},
      id: '2',
      error: null,
      redirect: false,
    });
  });

  it('Set session redirect to true in the state', () => {
    const mockState = {
      pending: false,
      session: {},
      id: null,
      error: null,
      redirect: false,
    };
    const mockAction = {
      type: SET_SESSION_REDIRECT,
      redirect: true,
    };
    const state = sessionDataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      session: {},
      id: null,
      error: null,
      redirect: true,
    });
  });

  it('Set pending true in the state', () => {
    const mockState = {
      pending: false,
      session: {},
      id: null,
      error: null,
      redirect: false,
    };
    const mockAction = { type: SET_SESSIONDATA_PENDING };
    const state = sessionDataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: true,
      session: {},
      id: null,
      error: null,
      redirect: false,
    });
  });

  it('Reset data in state', () => {
    const mockState = {
      pending: false,
      session: { title: 'test-title' },
      id: null,
      error: null,
      redirect: false,
    };
    const mockAction = { type: RESET_SESSIONDATA };
    const state = sessionDataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      session: {},
      id: null,
      error: null,
      redirect: false,
    });
  });
});
