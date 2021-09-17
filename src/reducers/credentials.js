import { SET_CREDENTIAL_USERNAME, SET_CREDENTIAL_PASSWORD, RESET_CREDENTIALS } from '../actions/constants';

const initialState = {
  username: '',
  password: '',
};

const setCredentialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CREDENTIAL_USERNAME:
      return {
        ...state,
        username: action.username,
      };

    case SET_CREDENTIAL_PASSWORD:
      return {
        ...state,
        password: action.password,
      };

    case RESET_CREDENTIALS:
      return {
        ...state,
        username: '',
        password: '',
      };

    default: return state;
  }
};

export default setCredentialsReducer;
