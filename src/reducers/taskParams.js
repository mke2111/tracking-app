import { SET_TASK_NAME, SET_TASK_TIME } from '../actions/constants';

const initialState = {
  name: '',
  time: '',
};

const setTaskParamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASK_NAME:
      return {
        ...state,
        name: action.name,
      };
    case SET_TASK_TIME:
      return {
        ...state,
        time: action.time,
      };

    default: return state;
  }
};

export default setTaskParamsReducer;
