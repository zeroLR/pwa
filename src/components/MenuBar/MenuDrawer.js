import React, { Component } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  DashboardOutlined,
  BugOutlined,
} from "@ant-design/icons";
const SubMenu = Menu.SubMenu;

class MenuDrawer extends Component {
  render() {
    return (
      <Menu mode="inline">
        <SubMenu title={<span>Menu</span>}>
          <Menu.Item>
            <a href="#/home">
              <HomeOutlined />
              Home
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="#/dashboard">
              <DashboardOutlined />
              Dashboard
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="#/test">
              <BugOutlined />
              TestPage
            </a>
          </Menu.Item>
        </SubMenu>
        <SubMenu title={<span>Sign</span>}>
          <Menu.Item>
            <a href="#/signin">Signin</a>
          </Menu.Item>
          <Menu.Item>
            <a href="#/signup">Signup</a>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
export default MenuDrawer;
