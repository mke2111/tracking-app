import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { resetTaskData, setActiveTab } from '../actions';
import autoLogin from '../api/autoLogin';
import { fetchUserData } from '../api/fetchData';
import ErrorMessage from '../components/ErrorMessage';
import LoaderSpinner from '../components/LoaderSpinner';
import SessionCard from '../components/SessionCard';

const UserDetail = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const { user } = useSelector(state => state);

  useEffect(() => {
    dispatch(setActiveTab('Add Tasks to Sessions'));
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
      <div className="">
        {user.error && (
        <ErrorMessage message={errorText} />
        )}
        {!token && <Redirect to="/" />}
        { user.user.sessions
        && user.user.sessions.map(session => (
          <Link
            className="  p-3 my-3 cursor-pointer "
            key={session.id}
            onClick={resetTaskStore}
            to={`sessionDetail/${session.id}`}
          >
            <SessionCard
              title={session.title}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default UserDetail;
