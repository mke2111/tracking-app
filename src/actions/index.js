import {
  SET_CREDENTIAL_USERNAME, SET_CREDENTIAL_PASSWORD, RESET_CREDENTIALS,
  SET_DATA_PENDING, SET_DATA_SUCCESS, SET_DATA_ERROR, RESET_DATA,
  FETCH_USERDATA_PENDING, FETCH_USERDATA_SUCCESS, FETCH_USERDATA_ERROR,
  SET_SESSIONDATA_PENDING, SET_SESSIONDATA_SUCCESS, SET_SESSIONDATA_ERROR, RESET_SESSIONDATA,
  SET_SESSION_TITLE, SET_TASKDATA_PENDING, SET_TASKDATA_SUCCESS, SET_TASKDATA_ERROR,
  RESET_TASKDATA, SET_TASK_NAME, SET_TASK_TIME, SET_ACTIVE_TAB, FETCH_SESSION_ID,
  SET_SESSION_REDIRECT, FETCH_PROGRESS_PENDING, FETCH_LATEST_PROGRESS_SUCCESS,
  FETCH_LONGEST_PROGRESS_SUCCESS, FETCH_TOP5_PROGRESS_SUCCESS,
  FETCH_PROGRESS_ERROR, RESET_PROGRESS,
} from './constants';

export const setCredentialUsername = (username) => ({
  type: SET_CREDENTIAL_USERNAME,
  username,
});

export const setCredentialPassword = (password) => ({
  type: SET_CREDENTIAL_PASSWORD,
  password,
});

export const resetCredentials = () => ({
  type: RESET_CREDENTIALS,
});

export const setDataPending = () => ({
  type: SET_DATA_PENDING,
});

export const setDataSuccess = (user) => ({
  type: SET_DATA_SUCCESS,
  user,
});

export const setDataError = (error) => ({
  type: SET_DATA_ERROR,
  error,
});

export const resetData = () => ({
  type: RESET_DATA,
});

export const fetchUserDataPending = () => ({
  type: FETCH_USERDATA_PENDING,
});

export const fetchUserDataSuccess = (data) => ({
  type: FETCH_USERDATA_SUCCESS,
  data,
});

export const fetchUserDataError = (error) => ({
  type: FETCH_USERDATA_ERROR,
  error,
});

export const setSessionTitle = (title) => ({
  type: SET_SESSION_TITLE,
  title,
});

export const setSessionDataPending = () => ({
  type: SET_SESSIONDATA_PENDING,
});

export const setSessionDataSuccess = (session) => ({
  type: SET_SESSIONDATA_SUCCESS,
  session,
});

export const setSessionDataError = (error) => ({
  type: SET_SESSIONDATA_ERROR,
  error,
});

export const resetSessionData = () => ({
  type: RESET_SESSIONDATA,
});

export const setSessionRedirect = (redirect) => ({
  type: SET_SESSION_REDIRECT,
  redirect,
});

export const setTaskName = (name) => ({
  type: SET_TASK_NAME,
  name,
});

export const setTaskTime = (time) => ({
  type: SET_TASK_TIME,
  time,
});

export const setTaskDataPending = () => ({
  type: SET_TASKDATA_PENDING,
});

export const setTaskDataSuccess = (task) => ({
  type: SET_TASKDATA_SUCCESS,
  task,
});

export const setTaskDataError = (error) => ({
  type: SET_TASKDATA_ERROR,
  error,
});

export const resetTaskData = () => ({
  type: RESET_TASKDATA,
});

export const setActiveTab = (tab) => ({
  type: SET_ACTIVE_TAB,
  tab,
});

export const fetchSessionID = (id) => ({
  type: FETCH_SESSION_ID,
  id,
});

export const fetchProgressPending = () => ({
  type: FETCH_PROGRESS_PENDING,
});

export const fetchLatestProgressSuccess = (latest) => ({
  type: FETCH_LATEST_PROGRESS_SUCCESS,
  latest,
});

export const fetchLongestProgressSuccess = (longest) => ({
  type: FETCH_LONGEST_PROGRESS_SUCCESS,
  longest,
});

export const fetchTop5ProgressSuccess = (top) => ({
  type: FETCH_TOP5_PROGRESS_SUCCESS,
  top,
});

export const fetchProgressError = (error) => ({
  type: FETCH_PROGRESS_ERROR,
  error,
});

export const resetProgress = () => ({
  type: RESET_PROGRESS,
});
