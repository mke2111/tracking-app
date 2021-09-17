import {
  FETCH_PROGRESS_PENDING, FETCH_LATEST_PROGRESS_SUCCESS, FETCH_LONGEST_PROGRESS_SUCCESS,
  FETCH_TOP5_PROGRESS_SUCCESS, FETCH_PROGRESS_ERROR, RESET_PROGRESS,
} from '../actions/constants';
import progressReducer from '../reducers/progress';

describe('Progress Reducer', () => {
  it('Return the default state', () => {
    const mockState = {
      pending: false,
      latest: {},
      longest: {},
      top: [],
      error: null,
    };
    const mockAction = { type: null };
    const state = progressReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      latest: {},
      longest: {},
      top: [],
      error: null,
    });
  });

  it('Set error in the state', () => {
    const mockState = {
      pending: false,
      latest: {},
      longest: {},
      top: [],
      error: null,
    };
    const mockAction = { type: FETCH_PROGRESS_ERROR, error: 'Test error' };
    const state = progressReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      latest: {},
      longest: {},
      top: [],
      error: 'Test error',
    });
  });

  it('Set latest session data in the state', () => {
    const mockState = {
      pending: false,
      latest: {},
      longest: {},
      top: [],
      error: null,
    };
    const mockAction = {
      type: FETCH_LATEST_PROGRESS_SUCCESS,
      latest: {
        session: 'latest_test',
      },
    };
    const state = progressReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      latest: {
        session: 'latest_test',
      },
      longest: {},
      top: [],
      error: null,
    });
  });

  it('Set longest session data in the state', () => {
    const mockState = {
      pending: false,
      latest: {},
      longest: {},
      top: [],
      error: null,
    };
    const mockAction = {
      type: FETCH_LONGEST_PROGRESS_SUCCESS,
      longest: {
        session: 'longest_test',
      },
    };
    const state = progressReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      latest: {},
      longest: {
        session: 'longest_test',
      },
      top: [],
      error: null,
    });
  });

  it('Set top 5 studied subjects data in the state', () => {
    const mockState = {
      pending: false,
      latest: {},
      longest: {},
      top: [],
      error: null,
    };
    const mockAction = {
      type: FETCH_TOP5_PROGRESS_SUCCESS,
      top: [{ subject1: 'test_1' }, { subject2: 'test_2' }],
    };
    const state = progressReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      latest: {},
      longest: {},
      top: [{ subject1: 'test_1' }, { subject2: 'test_2' }],
      error: null,
    });
  });

  it('Set pending true in the state', () => {
    const mockState = {
      pending: false,
      latest: {},
      longest: {},
      top: [],
      error: null,
    };
    const mockAction = { type: FETCH_PROGRESS_PENDING };
    const state = progressReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: true,
      latest: {},
      longest: {},
      top: [],
      error: null,
    });
  });

  it('Reset data in state', () => {
    const mockState = {
      pending: false,
      latest: { session: 'latest_test' },
      longest: { session: 'longest_test' },
      top: [{ subject1: 'test_1' }, { subject2: 'test_2' }],
      error: null,
    };
    const mockAction = { type: RESET_PROGRESS };
    const state = progressReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      latest: {},
      longest: {},
      top: [],
      error: null,
    });
  });
});
