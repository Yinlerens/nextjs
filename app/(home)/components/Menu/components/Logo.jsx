import logo from '@/public/images/logo.png';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store/index.js';

const Logo = () => {
  const {
    menuStore: { isCollapse }
  } = useStore();
  return (
    <div className="flex items-center justify-center h-[55px]">
      <img src={logo} alt="logo" className=" w-8 m-0" />
      {!isCollapse ? <h2 className="ml-3 text-2xl font-bold whitespace-nowrap">Πανδώρα</h2> : null}
    </div>
  );
};

export default observer(Logo);
