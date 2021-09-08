import { UPDATE_MEASURES } from '../actions/index';

const INITIAL_STATE = [];

const measuresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_MEASURES:
      return action.data;
    default:
      return [...state];
  }
};

export default measuresReducer;
