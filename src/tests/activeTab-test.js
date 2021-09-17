import {
  SET_ACTIVE_TAB,
} from '../actions/constants';
import activeTabReducer from '../reducers/activeTab';

describe('Active Tab Reducer', () => {
  it('Return the default state', () => {
    const mockState = {
      tabName: '',
    };
    const mockAction = { type: null };
    const state = activeTabReducer(mockState, mockAction);
    expect(state).toStrictEqual({ tabName: '' });
  });

  it('Set Tab Name in the state', () => {
    const mockState = {
      tabName: '',
    };
    const mockAction = {
      type: SET_ACTIVE_TAB,
      tab: 'Test',
    };
    const state = activeTabReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      tabName: 'Test',
    });
  });
});
