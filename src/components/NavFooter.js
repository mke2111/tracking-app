import styled from 'styled-components';
import LogOut from '../containers/LogOut';
import NavItem from './NavItem';

const FooterContainer = styled.footer`
position: fixed;
bottom: 0;
height: 10vh;
width: 100%;
display: flex;
justify-content: space-between;
background-color: #313944`;

const NavFooter = () => (
  <FooterContainer>
    <NavItem icon="fas fa-plus" legend="Add Session" path="/session" />
    <NavItem icon="fas fa-book-open" legend="Check Sessions" path="/checkSessions" />
    <NavItem icon="fas fa-chart-line" legend="Your Progress" path="/progress" />
    <LogOut />
  </FooterContainer>
);

export default NavFooter;
