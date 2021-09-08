import { UPDATE_USER } from '../actions/index';

const INITIAL_STATE = -1;

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return action.data;
    default:
      return state;
  }
};

export default userReducer;
