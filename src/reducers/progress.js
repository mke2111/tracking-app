import {
  FETCH_PROGRESS_PENDING, FETCH_LATEST_PROGRESS_SUCCESS, FETCH_LONGEST_PROGRESS_SUCCESS,
  FETCH_TOP5_PROGRESS_SUCCESS, FETCH_PROGRESS_ERROR, RESET_PROGRESS,
} from '../actions/constants';

const initialState = {
  pending: false,
  latest: {},
  longest: {},
  top: [],
  error: null,
};

const progressReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROGRESS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_LATEST_PROGRESS_SUCCESS:
      return {
        ...state,
        pending: false,
        latest: action.latest,
      };
    case FETCH_LONGEST_PROGRESS_SUCCESS:
      return {
        ...state,
        pending: false,
        longest: action.longest,
      };
    case FETCH_TOP5_PROGRESS_SUCCESS:
      return {
        ...state,
        pending: false,
        top: action.top,
      };
    case FETCH_PROGRESS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case RESET_PROGRESS:
      return {
        ...state,
        latest: {},
        longest: {},
        top: [],
      };
    default:
      return state;
  }
};

export default progressReducer;
