'use client';
import LayoutMenu from './components/Menu';
import LayoutHeader from './components/Header';
import LayoutTabs from './components/Tabs';
import LayoutFooter from './components/Footer';
import { Layout } from 'antd';
import { useEffect } from 'react';
import { useStore } from '@/store';
const { Sider, Content } = Layout;

export default function App({ children }: { children: React.ReactNode }) {
  const {
    menuStore: { isCollapse, updateCollapse },
    authStore: { setAuthButtons }
  } = useStore();

  // 获取按钮权限列表
  //  const getAuthButtonsList = async () => {
  //    const { data } = await getAuthorButtons();
  //    setAuthButtons(data);
  //  };

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
    // getAuthButtonsList();
  }, []);

  return (
    <html lang="zh">
      <head></head>
      <body>
        <Layout className="h-full">
          <Sider trigger={null} collapsed={isCollapse} width={220} theme="light">
            {/* <LayoutMenu /> */}
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
      </body>
    </html>
  );
}
