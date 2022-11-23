import logo from '@/assets/images/logo.png';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store/index.js';

const Logo = () => {
  const {
    menuStore: { isCollapse }
  } = useStore();
  return (
    <div className="logo-box">
      <img src={logo} alt="logo" className="logo-img" />
      {!isCollapse ? <h2 className="logo-text">Πανδώρα</h2> : null}
    </div>
  );
};

export default observer(Logo);
