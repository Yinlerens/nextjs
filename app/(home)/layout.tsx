'use client';
import LayoutMenu from './components/Menu';
import LayoutHeader from './components/Header';
// import LayoutTabs from './components/Tabs';
import LayoutFooter from './components/Footer';
import { Layout } from 'antd';
import { useEffect } from 'react';
import { useStore } from '@/store';
import axios from 'axios';
import useSWR, { preload } from 'swr';
import { observer } from 'mobx-react-lite';
const { Sider, Content } = Layout;
const fetcher = (url: string) => axios.get(url).then(r => r.data);
preload('/api/router', fetcher);
function App({ children }: { children: React.ReactNode }) {
  const {
    menuStore: { isCollapse, updateCollapse },
    authStore: { setAuthButtons }
  } = useStore();
  const { data } = useSWR('/api/router', fetcher);

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
        <LayoutHeader />
        {/* <LayoutTabs /> */}
        <Content className="site-layout-background">{children}</Content>
        <LayoutFooter />
      </Layout>
    </Layout>
  );
}
export default observer(App);
