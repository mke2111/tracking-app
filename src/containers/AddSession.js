import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  resetTaskData,
  setActiveTab,
  setDataError,
  setSessionTitle,
} from '../actions/index';
import autoLogin from '../api/autoLogin';
import { setSessionData } from '../api/setData';
import ErrorMessage from '../components/ErrorMessage';
import LoaderSpinner from '../components/LoaderSpinner';
import FormButton from '../components/FormButton';

const TitleInput = styled.input`
width: 100%;
border-radius: 0;
border: none;
outline: none;
padding: 1rem 2rem;`;

const TitleForm = styled.form`
display: flex`;

const AddSession = () => {
  const token = localStorage.getItem('token');
  const { user, session } = useSelector(state => state);
  const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useForm();

  const setTitle = e => {
    const input = e.target.value;
    dispatch(setSessionTitle(input));
  };

  useEffect(() => {
    if (token) { dispatch(setDataError(null)); }
    dispatch(autoLogin());
    dispatch(setActiveTab('Add Session'));
  }, []);

  const setSession = () => {
    dispatch(setSessionData());
    dispatch(resetTaskData());
  };
  const shouldComponentRender = () => {
    let isPending = false;
    if (user.pending === false || user.error !== null) {
      isPending = false;
    } else {
      isPending = true;
    }
    return isPending;
  };

  if (shouldComponentRender()) return <LoaderSpinner />;
  const errorText = `Error: ${user.error}`;

  return (
    <>
      {user.error && (
      <ErrorMessage message={errorText} />
      )}
      {!token && <Redirect to="/" />}
      {session.redirect && <Redirect to={`/sessionDetail/${session.session.id}`} />}
      {errors.title && (
        <ErrorMessage message={errors.title.message} />
      )}
      <TitleForm onSubmit={handleSubmit(setSession)}>
        <TitleInput
          onChange={setTitle}
          name="title"
          type="text"
          placeholder="Session title here..."
          ref={register({ required: 'Field required' })}
        />
        <FormButton type="submit">Add</FormButton>
      </TitleForm>
    </>
  );
};

export default AddSession;
