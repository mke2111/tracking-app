import LogOut from '../containers/LogOut';
import NavItem from './NavItem';

const NavFooter = () => (
  <div className="fixed bottom-0 flex bg-gray-800 w-full h-12 justify-between text-white divide-x divide-gray-500">
    <NavItem legend="Add Session" path="/session" />
    <NavItem legend="Add Tasks" path="/checkSessions" />
    <NavItem legend="Profile" path="/progress" />
    <LogOut />
  </div>
);

export default NavFooter;
