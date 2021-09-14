import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

const Legend = styled.small`
text-align: center;`;

const NavItem = props => {
  const { icon, legend, path } = props;
  return (
    <ContainerLink to={path}>
      <Icon className={icon} />
      <Legend>{legend}</Legend>
    </ContainerLink>
  );
};

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavItem;
