import {
  SET_ACTIVE_TAB,
} from '../actions/constants';

const initialState = {
  tabName: '',
};

const activeTabReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {
        ...state,
        tabName: action.tab,
      };
    default:
      return state;
  }
};

export default activeTabReducer;
