import { FETCH_USERDATA_PENDING, FETCH_USERDATA_SUCCESS, FETCH_USERDATA_ERROR } from '../actions/constants';

const initialState = {
  pending: false,
  userData: {},
  error: null,
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERDATA_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_USERDATA_SUCCESS:
      return {
        ...state,
        pending: false,
        userData: action.user,
      };
    case FETCH_USERDATA_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default userDataReducer;
