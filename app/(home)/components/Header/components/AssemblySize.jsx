import { Dropdown } from 'antd';
import { useStore } from '@/store/index.js';
import { observer } from 'mobx-react-lite';

const AssemblySize = () => {
  const {
    globalStore: { assemblySize, setAssemblySize }
  } = useStore();
  // 切换组件大小
  const onClick = e => {
    setAssemblySize(e.key);
  };

  const items = [
    {
      key: 'middle',
      disabled: assemblySize === 'middle',
      label: <span>默认</span>,
      onClick
    },
    {
      disabled: assemblySize === 'large',
      key: 'large',
      label: <span>大型</span>,
      onClick
    },
    {
      disabled: assemblySize === 'small',
      key: 'small',
      label: <span>小型</span>,
      onClick
    }
  ];

  return (
    <Dropdown menu={{ items }} placement="bottom" trigger={['click']} arrow={true}>
      <i className="mr-5 text-lg cursor-pointer iconfont icon-contentright"></i>
    </Dropdown>
  );
};

export default observer(AssemblySize);
