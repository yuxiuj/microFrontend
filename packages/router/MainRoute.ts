import React, { FC, useEffect } from "react";
import { createBrowserHistory } from "history";
let history = createBrowserHistory();

interface MainRouteProps {
  onRouteChange: (route: string) => void;
  children: React.ReactChildren
}

const MainRoute = (props: MainRouteProps) => {
  useEffect(() => {
    const unListen = history.listen(onRouteChange);
    return unListen;
  }, []);

  // 监听 history 路由变化
  const onRouteChange = ({ location, action }) => {
    console.log("onRouteChange --->", location, action);
  };

  return props.children;
};

export default MainRoute;
