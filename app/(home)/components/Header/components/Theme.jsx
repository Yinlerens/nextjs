'use client';
import { Drawer, Divider, Switch } from 'antd';
import { useState } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { useStore } from '@/store/index.js';
import { observer } from 'mobx-react-lite';

const Theme = () => {
  const [visible, setVisible] = useState(false);
  const {
    globalStore: { setThemeConfig, themeConfig },
    menuStore: { updateCollapse, isCollapse }
  } = useStore();
  const { breadcrumb, tabs, footer } = themeConfig;

  const onChange = (checked, keyName) => {
    return setThemeConfig({ ...themeConfig, [keyName]: !checked });
  };

  return (
    <>
      <SettingOutlined
        className="text-xl leading-5 mr-5"
        onClick={() => {
          setVisible(true);
        }}
      />
      <Drawer
        title="布局设置"
        closable={false}
        onClose={() => {
          setVisible(false);
        }}
        open={visible}
        width={320}
      >
        {/* 界面设置 */}
        <Divider className="divider">界面设置</Divider>
        <div className="flex justify-between items-center my-6">
          <span>折叠菜单</span>
          <Switch
            checked={isCollapse}
            onChange={e => {
              updateCollapse(e);
            }}
          />
        </div>
        <div className="flex justify-between items-center my-6">
          <span>面包屑导航</span>
          <Switch
            checked={!breadcrumb}
            onChange={e => {
              onChange(e, 'breadcrumb');
            }}
          />
        </div>
        <div className="flex justify-between items-center my-6">
          <span>标签栏</span>
          <Switch
            checked={tabs}
            onChange={e => {
              onChange(e, 'tabs');
            }}
          />
        </div>
        <div className="flex justify-between items-center my-6">
          <span>页脚</span>
          <Switch
            checked={!footer}
            onChange={e => {
              onChange(e, 'footer');
            }}
          />
        </div>
      </Drawer>
    </>
  );
};

export default observer(Theme);
