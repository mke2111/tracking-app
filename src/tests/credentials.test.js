import {
  SET_CREDENTIAL_USERNAME,
  SET_CREDENTIAL_PASSWORD,
  RESET_CREDENTIALS,
} from '../actions/constants';
import credentialsReducer from '../reducers/credentials';

describe('Credentials Reducer', () => {
  it('Return the default state', () => {
    const mockState = {
      username: '',
      password: '',
    };
    const mockAction = { type: null };
    const state = credentialsReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      username: '',
      password: '',
    });
  });

  it('Set username data in the state', () => {
    const mockState = {
      username: '',
      password: '',
    };
    const mockAction = {
      type: SET_CREDENTIAL_USERNAME,
      username: 'new',
    };
    const state = credentialsReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      username: 'new',
      password: '',
    });
  });

  it('Set password data in the state', () => {
    const mockState = {
      username: '',
      password: '',
    };
    const mockAction = {
      type: SET_CREDENTIAL_PASSWORD,
      password: '111111',
    };
    const state = credentialsReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      username: '',
      password: '111111',
    });
  });

  it('Reset credentials in the state', () => {
    const mockState = {
      username: 'new',
      password: '1111111',
    };
    const mockAction = { type: RESET_CREDENTIALS };
    const state = credentialsReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      username: '',
      password: '',
    });
  });
});
