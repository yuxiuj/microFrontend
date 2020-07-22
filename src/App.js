import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import "./app.css";
import { menus } from "./menus";
import childApps from "./childApps";
import Link from "./RouteLink";
import { setCache, getCache } from "./cache";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const originPushState = window.history.pushState;
const originReplaceState = window.history.replaceState;

const handelPopState = () => {
  const { pathname } = window.location;
  const prefix = pathname.split("/")[1];
  if (getCache("basePath") !== prefix) {
    console.log('=====>');
    setCache("basePath", prefix);
    const findApp = childApps.find((app) => app.path === prefix);
    const { js } = findApp.assets;
    fetch("http://0.0.0.0:3333/index.js").then((res) => {
      res.text().then((text) => {
        // console.log("text --->", text);
        // eslint-disable-next-line no-eval
        (0, eval)(text);
      });
    });
  }
};

const App = () => {
  useEffect(() => {
    // 监听路由变化
    window.addEventListener("popstate", (e) => {
      handelPopState();
    });
    window.history.replaceState = (stateObj, title, url) => {
      originReplaceState.apply(window.history, [stateObj, title, url]);
      handelPopState();
    };
    window.history.pushState = (stateObj, title, url) => {
      originPushState.apply(window.history, [stateObj, title, url]);
      handelPopState();
    };
  }, []);
  const renderMenus = (menus = []) => {
    return menus.map((menu) => {
      if (menu.link) {
        return (
          <Menu.Item key={menu.key}>
            <Link to={menu.link}>{menu.title}</Link>
          </Menu.Item>
        );
      } else {
        return (
          <SubMenu key={menu.key} title={menu.title}>
            {renderMenus(menu.children)}
          </SubMenu>
        );
      }
    });
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            {renderMenus(menus)}
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <div id="micro-content"></div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
