import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavItem = props => {
  const { legend, path } = props;
  return (
    <Link className="m-auto pl-3" to={path}>
      <h4>{legend}</h4>
    </Link>
  );
};

NavItem.propTypes = {
  legend: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavItem;
