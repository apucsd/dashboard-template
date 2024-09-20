import React from "react";

import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import HeaderDashboard from "./HeaderDashboard";
import Sidebar from "./Sidebar";

const { Content } = Layout;

const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Sidebar />
      <Layout>
        {/* header */}

        <HeaderDashboard />
        <Content style={{ margin: 20 }}>
          <div
            style={{
              padding: 20,
              minHeight: "50vh",
              width: "100%",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
