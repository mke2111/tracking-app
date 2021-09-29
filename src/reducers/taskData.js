import {
  SET_TASKDATA_PENDING, SET_TASKDATA_SUCCESS, SET_TASKDATA_ERROR, RESET_TASKDATA,
} from '../actions/constants';

const initialState = {
  pending: false,
  task: [],
  error: null,
};

const taskDataReducer = (state = initialState, action) => {
  const tasks = state.task;
  switch (action.type) {
    case SET_TASKDATA_PENDING:
      return {
        ...state,
        pending: true,
      };
    case SET_TASKDATA_SUCCESS:
      tasks.push(action.task);
      return {
        ...state,
        pending: false,
        task: tasks,
      };
    case SET_TASKDATA_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case RESET_TASKDATA:
      return {
        ...state,
        pending: false,
        task: [],
      };
    default:
      return state;
  }
};

export default taskDataReducer;
