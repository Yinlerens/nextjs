'use client';
import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { useStore } from '@/store/index.js';
import { observer } from 'mobx-react-lite';
import { usePathname, useRouter } from 'next/navigation';
import MoreButton from './components/MoreButton';
interface items {
  label: string;
  key: string;
  closable?: boolean;
}
const App: React.FC = () => {
  const {
    tabsStore,
    menuStore,
    globalStore: { themeConfig }
  } = useStore();
  const defaultPanes: items[] = tabsStore.tabsList.map(e => {
    return { label: e.title, key: e.path, closable: false };
  });

  const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
  const [items, setItems] = useState(defaultPanes);
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    add();
  }, [pathname, menuStore.menuList]);
  useEffect(() => {
    router.push(activeKey);
  }, [activeKey]);
  const onChange = (key: string) => {
    setActiveKey(key);
  };

  const add = () => {
    if (!pathname) return;
    if (!menuStore.menuList.length) return;
    if (items.find(e => e.key === pathname)) return;
    const newobj = menuStore.menuList.find(e => e.path === pathname);
    setItems([...items, { label: newobj.title, key: pathname }]);
    setActiveKey(pathname);
  };

  const remove = (targetKey: string) => {
    const targetIndex = items.findIndex(pane => pane.key === targetKey);
    const newPanes = items.filter(pane => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeKey) {
      const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
      setActiveKey(key);
    }
    setItems(newPanes);
  };
  const onEdit = (e: any) => {
    remove(e);
  };

  return (
    <div>
      {themeConfig.tabs && (
        <div>
          <Tabs
            className="px-2 pt-2 "
            hideAdd
            animated
            onChange={onChange}
            activeKey={activeKey}
            type="editable-card"
            onEdit={onEdit}
            items={items}
            tabBarExtraContent={
              <MoreButton
                tabsList={tabsStore.tabsList}
                delTabs={remove}
                setTabsList={tabsStore.setTabsList}
              />
            }
          />
        </div>
      )}
    </div>
  );
};

export default observer(App);
