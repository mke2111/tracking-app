import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { resetTaskData, setActiveTab } from '../actions';
import autoLogin from '../api/autoLogin';
import { fetchUserData } from '../api/fetchData';
import ErrorMessage from '../components/ErrorMessage';
import LoaderSpinner from '../components/LoaderSpinner';
import TitleName from '../components/TitleName';
import SessionCard from '../components/SessionCard';

const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;`;

const UserDetail = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const { user } = useSelector(state => state);

  useEffect(() => {
    dispatch(setActiveTab('Check Sessions'));
    dispatch(autoLogin());
    dispatch(fetchUserData());
  }, []);

  const resetTaskStore = () => {
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
      <div>
        {user.error && (
        <ErrorMessage message={errorText} />
        )}
        {!token && <Redirect to="/" />}
        <TitleName>{user.user.username}</TitleName>
        { user.user.sessions
        && user.user.sessions.map(session => (
          <StyledLink key={session.id} onClick={resetTaskStore} to={`sessionDetail/${session.id}`}>
            <SessionCard
              date={new Date(session.created_at).toLocaleDateString()}
              title={session.title}
            />
          </StyledLink>
        ))}
      </div>
    </>
  );
};

export default UserDetail;
