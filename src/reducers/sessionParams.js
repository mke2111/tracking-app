import { SET_SESSION_TITLE } from '../actions/constants';

const initialState = {
  title: '',
};

const setSessionTitleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SESSION_TITLE:
      return {
        ...state,
        title: action.title,
      };

    default: return state;
  }
};

export default setSessionTitleReducer;
