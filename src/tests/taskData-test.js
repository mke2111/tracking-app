import {
  SET_TASKDATA_PENDING, SET_TASKDATA_SUCCESS, SET_TASKDATA_ERROR, RESET_TASKDATA,
} from '../actions/constants';

import taskDataReducer from '../reducers/taskData';

describe('task Data Reducer', () => {
  it('Return the default state', () => {
    const mockState = {
      pending: false,
      task: [],
      error: null,
    };
    const mockAction = { type: null };
    const state = taskDataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      task: [],
      error: null,
    });
  });

  it('Set error in the state', () => {
    const mockState = {
      pending: false,
      task: [],
      error: null,
    };
    const mockAction = { type: SET_TASKDATA_ERROR, error: 'Test error' };
    const state = taskDataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      task: [],
      error: 'Test error',
    });
  });

  it('Set task data in the state', () => {
    const mockState = {
      pending: false,
      task: [],
      error: null,
    };
    const mockAction = {
      type: SET_TASKDATA_SUCCESS,
      task:
        { name: 'test-title' },
    };
    const state = taskDataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      task: [
        { name: 'test-title' },
      ],
      error: null,
    });
  });

  it('Set pending true in the state', () => {
    const mockState = {
      pending: false,
      task: [],
      error: null,
    };
    const mockAction = { type: SET_TASKDATA_PENDING };
    const state = taskDataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: true,
      task: [],
      error: null,
    });
  });

  it('Reset data in state', () => {
    const mockState = {
      pending: false,
      task: [
        { name: 'test-title' },
      ],
      error: null,
    };
    const mockAction = { type: RESET_TASKDATA };
    const state = taskDataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      task: [],
      error: null,
    });
  });
});
