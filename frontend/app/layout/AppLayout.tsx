"use client";
import { Layout, Menu } from 'antd';
 import Sidebar from '@/components/Sidebar';
import { useAppSelector } from '@/redux/store';
 
const { Header, Content, Sider } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const history = useAppSelector((state) => state.history.items);

  return (
    <Layout>
      <Sider
        width={250}
        className="site-layout-background"
        breakpoint="lg"
        collapsedWidth="0"
        style={{ height: '100vh', position: 'sticky', top: 0 }}
      >
        <Sidebar history={history} />
      </Sider>
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">DuckDuckGo Search</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ margin: '24px 16px 0', padding: 24 }}>
          <div className="site-layout-background" style={{ padding: 24 }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout> );
};

export default AppLayout;
