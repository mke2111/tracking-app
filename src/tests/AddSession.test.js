import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../reducers/store';
import AddSession from '../containers/AddSession';

describe('Rendering component', () => {
  it('creates an AddSession component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AddSession />
          </Provider>
        </BrowserRouter>,
      );
    });
    screen.getByText('Add');
  });
});

describe('Add Session', () => {
  it('renders correctly', () => {
    const snap = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <AddSession />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
