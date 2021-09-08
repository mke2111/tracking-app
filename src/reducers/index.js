import { combineReducers } from 'redux';
import measuresReducer from './measures';
import userReducer from './user';

const rootReducer = combineReducers({
  measures: measuresReducer,
  user: userReducer,
});

export default rootReducer;
