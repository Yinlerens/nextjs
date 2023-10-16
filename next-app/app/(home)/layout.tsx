'use client';
import { Layout } from 'antd';
import React, { useState } from 'react';
import LayoutMenu from './components/Menu'
const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  return (
    <Layout hasSider className="h-full">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        theme="light"
        width={256}
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <LayoutMenu></LayoutMenu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, backgroundColor: 'white' }}></Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360 }}>content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
