import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import "./app.css";
import { menus } from "./menus";
import childApps from "./childApps";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { setCache, getCache } from "./cache";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const RouteGuard = ({ location }) => {
  useEffect(() => {
    const { pathname } = location;
    const prefix = pathname.split("/")[1];
    if (getCache("basePath") !== prefix) {
      console.log("lllll -->");
      setCache("basePath", prefix);
      const findApp = childApps.find((app) => app.path === prefix);
      const { js } = findApp.assets;
      fetch("http://0.0.0.0:3333/index.js").then((res) => {
        res.text().then((text) => {
          (0, eval)(text);
        });
      });
    }
  }, []);
  return null;
};

const App = () => {
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

  const renderRoute = () => {
    const routes = [];
    const getRoutes = (r) => {
      // eslint-disable-next-line array-callback-return
      r.map((route) => {
        if (route.link) {
          routes.push(
            <Route
              exact
              key={route.link}
              path={route.link}
              render={(props) => {
                return <RouteGuard {...props} />;
              }}
            ></Route>
          );
        }
        if (route.children) {
          getRoutes(route.children);
        }
      });
    };
    getRoutes(menus);
    return routes;
  };

  return (
    <Router>
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
              <div id="micro-content">
                <Switch>{renderRoute(menus)}</Switch>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
