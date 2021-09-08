import PropTypes from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

const currentLocation = window.location.pathname.split('/')[1];

const FooterMenu = ({ cookies }) => (
  <footer className="text-3xl fixed bottom-0 flex flex-row w-full justify-around">
    <div className="bg-blue-400 pb-1 flex flex-row w-full justify-around">
      <a href="/" className={currentLocation === '' ? 'blue' : 'gray'} aria-label="games">Home</a>
      <a href="/Profile" className={currentLocation === 'Profile' ? 'blue' : 'gray'} aria-label="profile">Profile</a>
    </div>
    <div className="bg-red-500 w-36 px-1">
      <button
        id="logout-btn"
        type="submit"
        onClick={() => {
          cookies.remove('uid', { path: '/' });
          window.location.reload();
        }}
      >
        Log out
      </button>
    </div>
  </footer>
);

FooterMenu.propTypes = {
  cookies: PropTypes.instanceOf(Cookies).isRequired,
};

export default withCookies(FooterMenu);
