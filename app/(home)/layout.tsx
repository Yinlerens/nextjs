'use client';
import LayoutMenu from './components/Menu';
import LayoutHeader from './components/Header';
import LayoutTabs from './components/Tabs';
import LayoutFooter from './components/Footer';
import { Layout } from 'antd';
import { useEffect } from 'react';
import { useStore } from '@/store';
import axios from 'axios';
import useSWR from 'swr';
const { Sider, Content } = Layout;

export default function App({ children }: { children: React.ReactNode }) {
  const {
    menuStore: { isCollapse, updateCollapse },
    authStore: { setAuthButtons }
  } = useStore();
  const { data } = useSWR('/api/router', url => axios.get(url).then(r => r.data));

  // 监听窗口大小变化
  const listeningWindow = () => {
    window.onresize = () => {
      return (() => {
        let screenWidth = document.body.clientWidth;
        if (!isCollapse && screenWidth < 1200) updateCollapse(true);
        if (!isCollapse && screenWidth > 1200) updateCollapse(false);
      })();
    };
  };

  useEffect(() => {
    listeningWindow();
  }, []);
  useEffect(() => {
    if (!data) return;
    setAuthButtons(data);
  }, [data]);
  return (
    <Layout className="h-full">
      <Sider trigger={null} collapsed={isCollapse} width={220} theme="light">
        <LayoutMenu />
      </Sider>
      <Layout className="site-layout">
        {/* <LayoutHeader /> */}
        {/* <LayoutTabs /> */}
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          {children}
        </Content>
        {/* <LayoutFooter /> */}
      </Layout>
    </Layout>
  );
}
