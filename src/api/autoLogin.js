import { setDataSuccess } from '../actions';

const autoLogin = () => dispatch => {
  const token = localStorage.getItem('token');
  const url = 'https://mke2111-1.herokuapp.com/auto_login';
  if (token) {
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch(setDataSuccess(data));
      });
  }
};

export default autoLogin;