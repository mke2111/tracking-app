import {
  render, screen, act,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../reducers/store';
import SignUser from '../containers/SignUser';

describe('Rendering component', () => {
  it('creates a SignUser component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SignUser buttonText="Log In" />
          </Provider>
        </BrowserRouter>,
      );
    });
    expect(screen.getByText('Log In'));
  });
});

describe('SignUser', () => {
  it('renders correctly', () => {
    const snap = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <SignUser buttonText="Log In" />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
