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
  // 处理后台返回菜单 key 值为 antd 菜单需要的 key 值
  const deepLoopFloat = (menuList, newArr = []) => {
    menuList.forEach(item => {
      // 下面判断代码解释 *** !item?.children?.length   ==>   (!item.children || item.children.length === 0)
      if (!item?.children?.length) {
        return newArr.push(getItem(item?.title, item?.path, addIcon(item?.icon)));
      }
      newArr.push(
        getItem(item?.title, item?.path, addIcon(item?.icon), deepLoopFloat(item?.children))
      );
    });
    return newArr;
  };

  // 获取菜单列表并处理成 antd menu 需要的格式
  const [List, setMenuList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { data } = useSWR('/api/router', url => axios.get(url).then(r => r.data));
  const getMenuData = async () => {
    setLoading(true);
    try {
      if (!data) return;
      console.log('[ data ] >', data);
      setMenuList(deepLoopFloat(data));
      // 存储处理过后的所有面包屑导航栏到 redux 中
      setBreadcrumbList(findAllBreadcrumb(data));
      // 把路由菜单处理成一维数组，存储到 redux 中，做菜单权限判断
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

  // 点击当前菜单跳转页面
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
