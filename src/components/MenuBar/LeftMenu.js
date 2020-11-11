import React, { Component } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  DashboardOutlined,
  BugOutlined,
} from "@ant-design/icons";

class LeftMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <a href="home">
            <HomeOutlined />
            Home
          </a>
        </Menu.Item>
        <Menu.Item key="dashboard">
          <a href="dashboard">
            <DashboardOutlined />
            Dashboard
          </a>
        </Menu.Item>
        <Menu.Item key="test">
          <a href="test">
            <BugOutlined />
            TestPage
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default LeftMenu;
