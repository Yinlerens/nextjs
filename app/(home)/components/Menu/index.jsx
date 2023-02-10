'use client';
import React, { useEffect, useState } from 'react';
import { Menu, Spin } from 'antd';
import { findAllBreadcrumb, getOpenKeys, handleRouter, searchRoute } from '@/utils/util';
import * as Icons from '@ant-design/icons';
import Logo from './components/Logo';
import { useStore } from '@/store/index.js';
import { observer } from 'mobx-react-lite';
import { usePathname, useRouter } from 'next/navigation';
import useSWR from 'swr';
const LayoutMenu = () => {
  const pathname = usePathname();
  const {
    authStore: { setAuthRouter },
    menuStore: { isCollapse, setMenuList: setMenuListAction, menuList },
    breadcrumbStore: { setBreadcrumbList }
  } = useStore();
  const [selectedKeys, setSelectedKeys] = useState([pathname]);
  const [openKeys, setOpenKeys] = useState([]);

  // 刷新页面菜单保持高亮
  useEffect(() => {
    setSelectedKeys([pathname]);
    if (!isCollapse) {
      setOpenKeys(getOpenKeys(pathname));
    }
  }, [pathname, isCollapse]);

  // 设置当前展开的 subMenu
  const onOpenChange = openKeys => {
    if (openKeys.length === 0 || openKeys.length === 1) return setOpenKeys(openKeys);
    const latestOpenKey = openKeys[openKeys.length - 1];
    if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys);
    setOpenKeys([latestOpenKey]);
  };

  // 动态渲染 Icon 图标
  const customIcons = Icons;
  const addIcon = name => {
    return React.createElement(customIcons[name]);
  };
  const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type
    };
  };
  const deepLoopFloat = (menuList, newArr = []) => {
    if (!menuList) return;
    menuList?.forEach(item => {
      if (!item?.children?.length) {
        return newArr.push(getItem(item?.title, item?.path, addIcon(item?.icon)));
      }
      newArr.push(
        getItem(item?.title, item?.path, addIcon(item?.icon), deepLoopFloat(item?.children))
      );
    });
    return newArr;
  };

  const [List, setMenuList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { data } = useSWR('/api/router', url => axios.get(url).then(r => r.data));
  const getMenuData = async () => {
    setLoading(true);
    try {
      if (!data) return;
      setMenuList(deepLoopFloat(data));
      setBreadcrumbList(findAllBreadcrumb(data));
      const dynamicRouter = handleRouter(data);
      setAuthRouter(dynamicRouter);
      setMenuListAction(data);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMenuData();
  }, [data]);

  const router = useRouter();
  const clickMenu = ({ key }) => {
    const route = searchRoute(key, menuList);
    if (route.isLink) window.open(route.isLink, '_blank');
    router.push(key);
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <Spin spinning={loading} tip="Loading...">
        <Logo></Logo>
        <Menu
          theme="light"
          mode="inline"
          triggerSubMenuAction="click"
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          items={List}
          onClick={clickMenu}
          onOpenChange={onOpenChange}
        ></Menu>
      </Spin>
    </div>
  );
};

export default observer(LayoutMenu);
