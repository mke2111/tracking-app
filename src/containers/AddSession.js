import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
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
      <form className="flex shadow rounded w-3/4 mx-auto my-8" onSubmit={handleSubmit(setSession)}>
        <input
          onChange={setTitle}
          name="title"
          type="text"
          className="m-3 outline-blue rounded-lg border-2 border-blue"
          placeholder="Add title"
          ref={register({ required: 'Field required' })}
        />
        <button className="w-36 rounded-md text-white bg-green-600" type="submit">Add</button>
      </form>
      <div className="w-4/6 mx-auto mt-36 text-center">
        <p>
          Add an activity that you want to track the time you spend doing. It could be Reading, Running, Coding, writing, Netflix N Chill, Baking, Surfing. <br/>YOU NAME IT!
        </p>

        <small className="text-green">
          Copyright 2023
        </small>
      </div>
    </>
  );
};

export default AddSession;
