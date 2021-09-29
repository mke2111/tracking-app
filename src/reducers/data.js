import {
  SET_DATA_PENDING, SET_DATA_SUCCESS, SET_DATA_ERROR, RESET_DATA,
} from '../actions/constants';

const initialState = {
  pending: false,
  user: {},
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_PENDING:
      return {
        ...state,
        pending: true,
      };
    case SET_DATA_SUCCESS:
      return {
        ...state,
        pending: false,
        user: action.user,
      };
    case SET_DATA_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case RESET_DATA:
      return {
        ...state,
        pending: false,
        user: {},
      };
    default:
      return state;
  }
};

export default dataReducer;
