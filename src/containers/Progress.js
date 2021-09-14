import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { resetProgress, setActiveTab } from '../actions';
import autoLogin from '../api/autoLogin';
import { fetchLongestSession, fetchLatestSession, fetchTop5Tasks } from '../api/fetchData';
import ErrorMessage from '../components/ErrorMessage';
import LoaderSpinner from '../components/LoaderSpinner';
import TitleName from '../components/TitleName';
import ProgressCard from '../components/ProgressCard';

const ProgressTitle = styled.h4`
const text-align: left;
font-weight: 300;
padding: 1rem;`;

const Progress = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const { user, progress } = useSelector(state => state);

  useEffect(() => {
    dispatch(autoLogin());
    dispatch(setActiveTab('Your Progress'));
    dispatch(resetProgress());
  }, []);

  useEffect(() => {
    if (user.user.id) {
      dispatch(fetchLongestSession(user.user.id));
      dispatch(fetchLatestSession(user.user.id));
      dispatch(fetchTop5Tasks(user.user.id));
    }
  }, [user]);

  const shouldComponentRender = () => {
    let isPending = false;
    if (progress.pending === false || progress.error !== null) {
      isPending = false;
    } else {
      isPending = true;
    }
    return isPending;
  };
  if (shouldComponentRender()) return <LoaderSpinner />;
  const errorText = `Error: ${progress.error}`;
  return (
    <>
      <div>
        {progress.error && (
        <ErrorMessage message={errorText} />
        )}
        {!token && <Redirect to="/" />}
        <TitleName>{user.user.username}</TitleName>
        <ProgressTitle>Latest Session</ProgressTitle>
        { progress.latest.title
        && (
        <ProgressCard
          name={progress.latest.title}
          date={new Date(progress.latest.created_at).toLocaleDateString()}
          time={progress.latest.total_time}
        />
        )}
        <ProgressTitle>Longest Session</ProgressTitle>
        {progress.longest.title && (
        <ProgressCard
          name={progress.longest.title}
          date={new Date(progress.longest.created_at).toLocaleDateString()}
          time={progress.longest.total_time}
        />
        )}
        <ProgressTitle>Top 5 Most Studied tasks</ProgressTitle>
        { progress.top && progress.top.map(task => (
          <ProgressCard
            key={task.id}
            name={task.name}
            date={new Date(task.created_at).toLocaleDateString()}
            time={task.time}
          />
        ))}
      </div>
    </>
  );
};

export default Progress;
