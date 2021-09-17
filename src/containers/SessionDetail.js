import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  fetchSessionID,
  setTaskName,
  setTaskTime,
  setSessionRedirect,
} from '../actions/index';
import autoLogin from '../api/autoLogin';
import { setTaskData } from '../api/setData';
import { fetchSessionData } from '../api/fetchData';
import ErrorMessage from '../components/ErrorMessage';
import LoaderSpinner from '../components/LoaderSpinner';
import Card from '../components/Card';

const SessionDetail = (props) => {
  const { match } = props;
  const token = localStorage.getItem('token');
  const { session, task } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useForm();

  const setName = (e) => {
    const input = e.target.value;
    dispatch(setTaskName(input));
  };

  const getSessionID = () => {
    dispatch(fetchSessionID(match.params.id));
  };

  const setTime = (e) => {
    const input = e.target.value;
    dispatch(setTaskTime(input));
  };

  useEffect(() => {
    dispatch(autoLogin());
    dispatch(setSessionRedirect(false));
    getSessionID();
    dispatch(fetchSessionData());
  }, []);

  const setTask = () => {
    dispatch(setTaskData());
    return <Redirect to={`/sessionDetail/${session.id}`} />;
  };

  const shouldComponentRender = () => {
    let isPending = false;
    if (session.pending === false || session.error !== null) {
      isPending = false;
    } else {
      isPending = true;
    }
    return isPending;
  };

  if (shouldComponentRender()) return <LoaderSpinner />;
  const errorText = `Error: ${session.error}`;
  return (
    <>
      {session.error && (
      <ErrorMessage message={errorText} />
      )}
      {!token && <Redirect to="/" />}
      <h2 className="text-center text-2xl mt-2">{session.session.title}</h2>
      <h4 className="text-center">{new Date(session.session.created_at).toLocaleDateString()}</h4>
      <form
        onSubmit={handleSubmit(setTask)}
        className="text-center flex flex-col items-center shadow w-4/6 mx-auto py-3"
      >
        {errors.title && (
        <ErrorMessage message={errors.title.message} />
        )}
        <input
          onChange={setName}
          name="title"
          type="text"
          placeholder="Add task"
          className="m-3 outline-blue rounded-lg border-2 border-blue"
          ref={register({ required: 'Field required' })}
        />
        {errors.time && (
        <ErrorMessage message={errors.time.message} />
        )}
        <input
          onChange={setTime}
          name="time"
          type="number"
          step="0.1"
          min="0"
          placeholder="Hours spent"
          className="m-3 outline-blue rounded-lg border-2 border-blue"
          ref={register({ required: 'Field required' })}
        />
        <button
          type="submit"
          className="py-1 px-3 w-24 rounded-md text-white bg-green-600"
        >
          Add Task
        </button>
      </form>
      <div className="flex flex-col justify-between flex-wrap">
        {session.session.tasks
      && session.session.tasks.map((task) => (
        <Card
          key={task.id}
          title={task.name}
          time={task.time}
        />
      ))}
        {task.task && task.task.map((task) => (
          <Card
            key={task.id}
            title={task.name}
            time={task.time}
          />
        ))}
      </div>
    </>
  );
};
SessionDetail.propTypes = {
  match: PropTypes.shape(
    { params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired },
  ).isRequired,
};
export default SessionDetail;
