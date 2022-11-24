import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useStore } from '@/store/index.js';
import { observer } from 'mobx-react-lite';
const CollapseIcon = () => {
  const {
    menuStore: { isCollapse, updateCollapse }
  } = useStore();
  return (
    <div
      className="mr-5 text-xl leading-5 cursor-pointer transition-colors"
      onClick={() => {
        updateCollapse(!isCollapse);
      }}
    >
      {isCollapse ? <MenuUnfoldOutlined id="isCollapse" /> : <MenuFoldOutlined id="isCollapse" />}
    </div>
  );
};

export default observer(CollapseIcon);
