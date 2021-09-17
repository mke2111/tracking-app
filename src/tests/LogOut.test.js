import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../reducers/store';
import LogOut from '../containers/LogOut';

describe('Rendering component', () => {
  it('creates a LogOut component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LogOut />
          </Provider>
        </BrowserRouter>,
      );
    });
    screen.getByText('Log Out');
  });
});

describe('LogOut', () => {
  it('renders correctly', () => {
    const snap = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <LogOut />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
