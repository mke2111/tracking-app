import {
  setDataPending, setDataSuccess, setDataError,
  setSessionDataPending, setSessionDataSuccess, setSessionDataError,
  setTaskDataPending, setTaskDataSuccess, setTaskDataError, resetCredentials,
  setSessionRedirect,
} from '../actions';
import store from '../reducers/store';

export const setUserData = (signAction) => (dispatch) => {
  const { username, password } = store.getState().credentials;
  let apiUrl = '';
  switch (signAction) {
    case 'sign up':
      apiUrl = 'https://mke2111-1.herokuapp.com/users';
      break;
    case 'log in':
      apiUrl = 'https://mke2111-1.herokuapp.com/login';
      break;
    default:
      break;
  }
  const config = {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  };
  dispatch(setDataPending());
  fetch(apiUrl, config)
    .then((response) => response.json())
    .then((data) => {
      if (data.errors || data.failure) {
        const errorMessage = data.errors ? data.errors : data.failure;
        throw (errorMessage);
      }

      localStorage.setItem('token', data.jwt);
      dispatch(setDataSuccess(data.user));
    })
    .catch((error) => {
      dispatch(setDataError(error));
    });

  dispatch(resetCredentials());
};

export const setSessionData = () => (dispatch) => {
  const { title } = store.getState().sessionTitle;
  const token = localStorage.getItem('token');

  const apiUrl = 'https://mke2111-1.herokuapp.com/sessions';
  const config = {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
    }),
  };
  dispatch(setSessionDataPending());
  fetch(apiUrl, config)
    .then((response) => response.json())
    .then((data) => {
      if (data.error || data.failure) {
        const errorMessage = data.error ? data.error : data.failure;
        throw (errorMessage);
      }
      dispatch(setSessionDataSuccess(data));
      dispatch(setSessionRedirect(true));
    })
    .catch((error) => {
      dispatch(setSessionDataError(error));
    });
};

export const setTaskData = () => (dispatch) => {
  const token = localStorage.getItem('token');

  const { id } = store.getState().session.session;
  const { name, time } = store.getState().taskParams;
  const apiUrl = 'https://mke2111-1.herokuapp.com/tasks';
  const config = {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      id,
      name,
      time,
    }),
  };
  dispatch(setTaskDataPending());
  fetch(apiUrl, config)
    .then((response) => response.json())
    .then((data) => {
      if (data.error || data.failure) {
        const errorMessage = data.error ? data.error : data.failure;
        throw (errorMessage);
      }
      dispatch(setTaskDataSuccess(data));
    })
    .catch((error) => {
      dispatch(setTaskDataError(error));
    });
};
