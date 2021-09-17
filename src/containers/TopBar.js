import { useSelector } from 'react-redux';
import github from '../assets/github.png';

const TopBar = () => {
  const { tab } = useSelector(state => state);
  const headerText = tab.tabName;
  return (
    <header className="bg-blue-500 text-white text-center h-12 py-1 flex justify-between">
      <a href="https://github.com/mke2111/tracking-app" rel="noreferrer" target="_blank">
        <img
          src={github}
          alt="Github"
          className="w-8 h-8 ml-3 cursor-pointer"
        >

        </img>
      </a>
      <h3 className="pt-2">{headerText}</h3>
      <h3 className="pt-2 invisible">Nothing</h3>
    </header>
  );
};

export default TopBar;
