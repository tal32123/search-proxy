"use client";
import React from 'react';
import { Layout, Menu } from 'antd';
import Sidebar from '../components/Sidebar';
import './globals.css';
import { useAppSelector } from '@/redux/store';
import StoreProvider from '@/redux/StoreProvider';

const { Header, Content, Sider } = Layout;

const AppLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const history = useAppSelector((state) => state.history.items);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        width={250}
        className="site-layout-background"
        breakpoint="lg"
        collapsedWidth="0"
      >
        <Sidebar history={history} />
      </Sider>
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">DuckDuckGo Search</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ margin: '24px 16px 0', padding: 24, overflow: 'hidden' }}>
          <div className="site-layout-background" style={{ padding: 24 }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <AppLayout>{children}</AppLayout>
        </StoreProvider>
      </body>
    </html>
  );
}
