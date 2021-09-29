import { combineReducers } from 'redux';
import activeTabReducer from './activeTab';
import setCredentialsReducer from './credentials';
import dataReducer from './data';
import progressReducer from './progress';
import sessionDataReducer from './sessionData';
import setSessionTitleReducer from './sessionParams';
import taskDataReducer from './taskData';
import setTaskParamsReducer from './taskParams';
import userDataReducer from './userData';

const rootReducer = combineReducers({
  credentials: setCredentialsReducer,
  user: dataReducer,
  userData: userDataReducer,
  sessionTitle: setSessionTitleReducer,
  session: sessionDataReducer,
  taskParams: setTaskParamsReducer,
  task: taskDataReducer,
  tab: activeTabReducer,
  progress: progressReducer,
});

export default rootReducer;
