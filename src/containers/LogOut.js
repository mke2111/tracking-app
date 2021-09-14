import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { resetData } from '../actions';

const ContainerLink = styled(Link)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: white;
padding: 0.5rem 1rem;
text-decoration: none;`;

const Icon = styled.i`
padding: 0.5rem;`;

const LogOut = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(resetData());
    localStorage.removeItem('token');
  };
  return (
    <ContainerLink onClick={handleLogOut} to="/">
      <Icon className="fas fa-sign-out-alt" />
      <small>Log Out</small>
    </ContainerLink>
  );
};

export default LogOut;
