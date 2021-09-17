import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../reducers/store';
import Progress from '../containers/Progress';

describe('Rendering component', () => {
  it('creates a Progress component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Progress />
          </Provider>
        </BrowserRouter>,
      );
    });
    screen.getByText('Longest Session');
  });
});
