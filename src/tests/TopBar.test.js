import {
  render, screen, act, waitFor,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
// import store from '../reducers/store';
import { createStore } from 'redux';
import TopBar from '../containers/TopBar';

const store = createStore(() => ({ tab: { tabName: 'Test' } }));

describe('Rendering component', () => {
  it('creates a TopBar component', async () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <TopBar />
          </Provider>
        </BrowserRouter>,
      );
    });
    await waitFor(() => {
      expect(screen.getByText('Test'));
    });
  });
});

describe('TopBar', () => {
  it('renders correctly', () => {
    const snap = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <TopBar />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
