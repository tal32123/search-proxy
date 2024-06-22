"use client";
import { Layout, Menu } from "antd";
import Sidebar from "@/components/Sidebar";
import { useAppSelector } from "@/redux/store";
import useTranslation from "@/i18n/useTranslation";

const { Header, Content, Sider } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const history = useAppSelector((state) => state.history.items);
  const { t } = useTranslation();

  return (
    <Layout>
      <Sider
        width={250}
        className="site-layout-background"
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className={`h-screen sticky top-0`}>
          <Sidebar history={history} />
        </div>
      </Sider>
      <Layout>
      {/* antd only takes inline style many times */}
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">{t('DUCK_DUCK_GO_SEARCH')}</Menu.Item>
          </Menu>
        </Header>
        {/* antd only takes inline style many times */}
        <Content style={{ margin: "8px", padding: 8 }}>
          <div className="site-layout-background" style={{ padding: 24 }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
