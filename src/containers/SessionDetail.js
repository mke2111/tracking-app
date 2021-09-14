import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
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
import TitleName from '../components/TitleName';
import DateSubtitle from '../components/DateSubtitle';
import FormButton from '../components/FormButton';

const InputField = styled.input`
border: none;
border-bottom: 3px solid #8ed3f1;
border-radius: 0;
width: 100%;
outline: none;
background-color: white;
margin-bottom: 1.2rem;
padding: 0.5rem;`;

const TaskForm = styled.form`
display: flex;
margin-top: 2rem;
background-color: white;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1rem;`;

const TasksContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
flex-wrap: wrap;
background-color: #f3f4f6`;

const SessionDetail = props => {
  const { match } = props;
  const token = localStorage.getItem('token');
  const { session, task } = useSelector(state => state);
  const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useForm();

  const setName = e => {
    const input = e.target.value;
    dispatch(setTaskName(input));
  };

  const getSessionID = () => {
    dispatch(fetchSessionID(match.params.id));
  };

  const setTime = e => {
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
      <TitleName>{session.session.title}</TitleName>
      <DateSubtitle>{new Date(session.session.created_at).toLocaleDateString()}</DateSubtitle>
      <TaskForm onSubmit={handleSubmit(setTask)}>
        {errors.title && (
        <ErrorMessage message={errors.title.message} />
        )}
        <InputField
          onChange={setName}
          name="title"
          type="text"
          placeholder="What task did you do today?..."
          ref={register({ required: 'Field required' })}
        />
        {errors.time && (
        <ErrorMessage message={errors.time.message} />
        )}
        <InputField
          onChange={setTime}
          name="time"
          type="number"
          step="0.1"
          min="0"
          placeholder="How long(in hours) did you spend on it?..."
          ref={register({ required: 'Field required' })}
        />
        <FormButton type="submit">Add</FormButton>
      </TaskForm>
      <TasksContainer>
        {session.session.tasks
      && session.session.tasks.map(task => (
        <Card
          key={task.id}
          title={task.name}
          time={task.time}
        />
      ))}
        {task.task && task.task.map(task => (
          <Card
            key={task.id}
            title={task.name}
            time={task.time}
          />
        ))}
      </TasksContainer>
    </>
  );
};
SessionDetail.propTypes = {
  match: PropTypes.shape(
    { params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired },
  ).isRequired,
};
export default SessionDetail;
