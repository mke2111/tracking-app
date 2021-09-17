/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  setCredentialUsername, setCredentialPassword, setActiveTab,
} from '../actions/index';
import { setUserData } from '../api/setData';
import ErrorMessage from '../components/ErrorMessage';
import LoaderSpinner from '../components/LoaderSpinner';
import autoLogin from '../api/autoLogin';

const SignUser = (props) => {
  const token = localStorage.getItem('token');
  const { buttonText } = props;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const { handleSubmit, register, errors } = useForm();

  const setCredentialName = (e) => {
    const input = e.target.value;
    dispatch(setCredentialUsername(input));
  };

  const setCredentialPass = (e) => {
    const input = e.target.value;
    dispatch(setCredentialPassword(input));
  };

  const setUser = () => {
    const signAction = buttonText.toLowerCase();
    dispatch(setUserData(signAction));
  };

  useEffect(() => {
    dispatch(autoLogin());
    dispatch(setActiveTab(buttonText));
  }, []);

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
      <form className="flex flex-col shadow-xl justify-center w-5/6 mx-auto mt-36 my-6 items-center" onSubmit={handleSubmit(setUser)}>
        {errors.username && (
        <ErrorMessage message={errors.username.message} />
        )}
        <input
          name="username"
          type="text"
          className="m-3 outline-blue rounded-lg border-2 border-blue"
          onChange={setCredentialName}
          placeholder="Username"
          ref={register({ required: 'Field required' })}
        />
        {errors.password && (
        <ErrorMessage message={errors.password.message} />
        )}
        <input
          name="password"
          type="password"
          onChange={setCredentialPass}
          placeholder="Password"
          className="m-3 outline-blue rounded-lg border-2 border-blue"
          ref={register({
            required: 'Field required',
            minLength: {
              value: 3,
              message: 'Password should be at least 3 characters long',
            },
          })}
        />
        <button
          type="submit"
          className="py-1 px-3 w-24 rounded-md text-white bg-green-600 mb-5"
        >
          {buttonText}
        </button>
        {buttonText === 'Log In' && (
        <p>
          Click here to
          <Link
            to="/signup"
            className="text-blue-400"
          >
            Sign Up
          </Link>
        </p>
        ) }
      </form>

      { token && <Redirect to="/session" />}
    </>
  );
};

SignUser.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default SignUser;
