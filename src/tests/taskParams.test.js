import { SET_TASK_NAME, SET_TASK_TIME } from '../actions/constants';

import taskParamsReducer from '../reducers/taskParams';

describe('Subject Params Reducer', () => {
  it('Return the default state', () => {
    const mockState = {
      name: '',
      time: '',
    };
    const mockAction = { type: null };
    const state = taskParamsReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      name: '',
      time: '',
    });
  });

  it('Set name in the state', () => {
    const mockState = {
      name: '',
      time: '',
    };
    const mockAction = { type: SET_TASK_NAME, name: 'Test Title' };
    const state = taskParamsReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      name: 'Test Title',
      time: '',
    });
  });

  it('Set time in the state', () => {
    const mockState = {
      name: '',
      time: '',
    };
    const mockAction = { type: SET_TASK_TIME, time: 10 };
    const state = taskParamsReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      name: '',
      time: 10,
    });
  });
});
