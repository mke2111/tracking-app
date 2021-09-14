/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import styled from 'styled-components';
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
import FormButton from '../components/FormButton';

const InputField = styled.input`
border: 3px solid white;
border-radius: 0;
outline: none;
background-color: white;
margin-bottom: 1.2rem;
padding: 0.5rem;`;

const SignForm = styled.form`
display: flex;
height: 50vh;
flex-direction: column;
justify-content: center;
align-items: center;`;

const SignUpMessage = styled.p`
margin-top: 2rem;`;

const SignUpLink = styled(Link)`
text-decoration: none;
color: #62b5e5;`;

const SignUser = props => {
  const token = localStorage.getItem('token');
  const { buttonText } = props;
  const dispatch = useDispatch();
  const { user } = useSelector(state => state);
  const { handleSubmit, register, errors } = useForm();

  const setCredentialName = e => {
    const input = e.target.value;
    dispatch(setCredentialUsername(input));
  };

  const setCredentialPass = e => {
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
      <SignForm onSubmit={handleSubmit(setUser)}>
        {errors.username && (
        <ErrorMessage message={errors.username.message} />
        )}
        <InputField
          name="username"
          type="text"
          onChange={setCredentialName}
          placeholder="Username"
          ref={register({ required: 'Field required' })}
        />
        {errors.password && (
        <ErrorMessage message={errors.password.message} />
        )}
        <InputField
          name="password"
          type="password"
          onChange={setCredentialPass}
          placeholder="Password"
          ref={register({
            required: 'Field required',
            minLength: {
              value: 3,
              message: 'Password should be at least 3 characters long',
            },
          })}
        />
        <FormButton type="submit">{buttonText}</FormButton>
        {buttonText === 'Log In' && (
        <SignUpMessage>
          If you need an account. Click here
          <SignUpLink to="/signup"> Sign Up </SignUpLink>
        </SignUpMessage>
        ) }
      </SignForm>

      { token && <Redirect to="/session" />}
    </>
  );
};

SignUser.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default SignUser;
