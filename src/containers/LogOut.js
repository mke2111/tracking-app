import { useDispatch } from 'react-redux';
import { resetData } from '../actions';

const LogOut = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(resetData());
    localStorage.removeItem('token');
  };
  return (
    <div
      className="bg-red-500 p-3 cursor-pointer"
      onClick={handleLogOut}
      to="/"
    >
      <small>Log Out</small>
    </div>
  );
};

export default LogOut;
