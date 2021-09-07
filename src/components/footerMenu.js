import PropTypes from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

const currentLocation = window.location.pathname.split('/')[1];

const FooterMenu = ({ cookies }) => (
  <footer className="text-3xl">
    <a href="/" className={currentLocation === '' ? 'blue' : 'gray'} aria-label="games">Home</a>
    <a href="/Profile" className={currentLocation === 'Profile' ? 'blue' : 'gray'} aria-label="profile">Profile</a>
    <button
      className="bg-red-700"
      id="logout-btn"
      type="submit"
      onClick={() => {
        cookies.remove('uid', { path: '/' });
        window.location.reload();
      }}
    >
      Log out
    </button>
  </footer>
);

FooterMenu.propTypes = {
  cookies: PropTypes.instanceOf(Cookies).isRequired,
};

export default withCookies(FooterMenu);
