import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Header = styled.header`
background-color: #62b5e5;
padding: 1rem 2rem;
color: white;
display: flex;
justify-content: center;
align-items: center;`;

const TopBar = () => {
  const { tab } = useSelector(state => state);
  const headerText = tab.tabName;
  return (
    <Header>
      <h3>{headerText}</h3>
    </Header>
  );
};

export default TopBar;
