// import React, { useEffect } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// const cache = {};

// const setCache = (key, value) => {
//   window[key] = value;
// };

// const getCache = (key) => {
//   return window[key];
// };

// const Layout = () => {
//   return <div style={{display: 'flex', justifyContent: 'space-around'}}>
//     <div>
//       <div>
//         <Link to="/">home</Link>
//       </div>
//       <div>
//         <Link to="/seller">about</Link>
//       </div>
//       <div>
//         <Link to="/bs2/users">users</Link>
//       </div>
//     </div>
//     <div>
//       <div id="ice-container"></div>
//       <Switch>
//         <Route exact path="/" render={(props) => {
//           return <RouteGuard {...props} />
//         }}></Route>
//         <Route exact path="/seller" render={(props) => {
//           return <RouteGuard {...props} />
//         }}></Route>
//         <Route exact path="/bs2/users" render={(props) => {
//           return <RouteGuard {...props} />
//         }}></Route>
//       </Switch>
//     </div>
//   </div>
// };

// const RouteGuard = ({ component: Component, history }) => {

//   const looseJsonParse = (obj) => {
//     // eslint-disable-next-line no-new-func
//     return Function('"use strict";return (' + obj + ')')();
//   }
//   useEffect(() => {
//     return history.listen((location) => {
//       const { pathname } = location;
//       // TODO: 页面注销
//       // 在路由进入时保存，待路由注销时，比较当前路由和数据缓存
//       console.log('pathname --->', pathname);
//       if (pathname.indexOf('/seller') !== -1) {
//         fetch('http://ice.alicdn.com/icestark/child-seller-react/index.js')
//         .then(res => {
//           return res.text();
//         })
//         .then((text) => {
//           // eslint-disable-next-line no-eval
//           (0, eval)(text);
//           setCache('/seller', true);
//           // looseJsonParse(text);
//         })
//       }
//     });
//   }, []);
//   return null;
//   // return <Component />;
// };

// const Home = () => {
//   return <div>home</div>;
// }

// const About = () => {
//   return <div>/seller</div>;
// }

// const Users = () => {
//   return <div>/bs2/users</div>;
// }
// // url: [
// //   '//ice.alicdn.com/icestark/child-seller-react/index.js',
// //   '//ice.alicdn.com/icestark/child-seller-react/index.css',
// // ],
// // url: [
// //   '//ice.alicdn.com/icestark/child-waiter-vue/app.js',
// //   '//ice.alicdn.com/icestark/child-waiter-vue/app.css'
// // ],

// function App() {
//   return (
//     <div>
//       <Router>
//         <Layout />
//       </Router>
//     </div>
//   );
// }

// export default App;
import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import "./app.css";
import { menus } from "./menus";
import childApps from './childApps';
import { Link, BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const App = () => {
  useEffect(() => {
    console.log('--->');
    return history.listen((location) => {
      const { pathname } = location;
      // TODO: 页面注销
      // 在路由进入时保存，待路由注销时，比较当前路由和数据缓存
      console.log('childApps -->', childApps);
      console.log('pathname --->', pathname);
      // if (pathname.indexOf('/seller') !== -1) {
      //   fetch('http://ice.alicdn.com/icestark/child-seller-react/index.js')
      //   .then(res => {
      //     return res.text();
      //   })
      //   .then((text) => {
      //     // eslint-disable-next-line no-eval
      //     (0, eval)(text);
      //     // setCache('/seller', true);
      //     // looseJsonParse(text);
      //   })
      // }
    });
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
          <Router>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              {renderMenus(menus)}
            </Menu>
          </Router>
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
