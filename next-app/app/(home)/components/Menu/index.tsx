import {
  AppstoreOutlined,
  DashboardOutlined,
  MailOutlined,
  SettingOutlined,
  TableOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/images/undraw_love.svg';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1', <DashboardOutlined />, [
    getItem('主控台', '1-1'),
    getItem('监控页', '1-2')
  ]),
  getItem('系统管理', '2', <AppstoreOutlined />, [
    getItem('用户管理', '2-1'),
    getItem('菜单管理', '2-2'),
    getItem('角色管理', '2-3', null, [getItem('Option 7', '2-3-1'), getItem('Option 8', '2-3-2')])
  ]),
  getItem('表格页面', '3', <TableOutlined />, [
    getItem('基础表格', '3-1'),
    getItem('数据透视表', '3-2')
  ])
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const App: React.FC = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center h-[55px]">
        <Image src={logo} width={30} height={30} alt="logo" />
        <h2 className="ml-3 text-2xl font-bold whitespace-nowrap text-[#665df5]">Handcrafts</h2>
      </div>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ width: 256 }}
        items={items}
      />
    </div>
  );
};

export default App;
