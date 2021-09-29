import {
  SET_SESSIONDATA_PENDING, SET_SESSIONDATA_SUCCESS, SET_SESSIONDATA_ERROR, RESET_SESSIONDATA,
  FETCH_SESSION_ID, SET_SESSION_REDIRECT,
} from '../actions/constants';

const initialState = {
  pending: false,
  session: {},
  id: null,
  error: null,
  redirect: false,
};

const sessionDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SESSIONDATA_PENDING:
      return {
        ...state,
        pending: true,
      };
    case SET_SESSIONDATA_SUCCESS:
      return {
        ...state,
        pending: false,
        session: action.session,
      };
    case SET_SESSIONDATA_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case RESET_SESSIONDATA:
      return {
        ...state,
        pending: false,
        session: {},
      };
    case FETCH_SESSION_ID:
      return {
        ...state,
        pending: false,
        id: action.id,
      };
    case SET_SESSION_REDIRECT:
      return {
        ...state,
        pending: false,
        redirect: action.redirect,
      };
    default:
      return state;
  }
};

export default sessionDataReducer;
