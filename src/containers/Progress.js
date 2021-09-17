import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { resetProgress, setActiveTab } from '../actions';
import autoLogin from '../api/autoLogin';
import { fetchLongestSession, fetchLatestSession, fetchTop5Tasks } from '../api/fetchData';
import ErrorMessage from '../components/ErrorMessage';
import LoaderSpinner from '../components/LoaderSpinner';
import ProgressCard from '../components/ProgressCard';

const Progress = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const { user, progress } = useSelector((state) => state);

  useEffect(() => {
    dispatch(autoLogin());
    dispatch(setActiveTab('Profile'));
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
        <h2 className="text-center pt-6 text-xl">
          {user.user.username}
          's progress
        </h2>
        <section className="shadow mx-auto w-5/6 my-4">
          <div className="text-center text-red-300">Latest Session</div>
          { progress.latest.title
          && (
          <ProgressCard
            className=""
            name={progress.latest.title}
            date={new Date(progress.latest.created_at).toLocaleDateString()}
          />
          )}
        </section>
        <section className="shadow mx-auto w-5/6 my-4">
          <div className="text-center text-red-300">Longest Session</div>
          {progress.longest.title && (
          <ProgressCard
            name={progress.longest.title}
            date={new Date(progress.longest.created_at).toLocaleDateString()}
          />
          )}
        </section>
        <section className="shadow mx-auto w-5/6 my-4">
          <div className="text-center text-red-300">Top Tasks</div>
          { progress.top && progress.top.map((task) => (
            <ProgressCard
              key={task.id}
              name={task.name}
              date={new Date(task.created_at).toLocaleDateString()}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default Progress;
