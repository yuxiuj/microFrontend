import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Layout = () => {
  return <div style={{display: 'flex', justifyContent: 'space-around'}}>
    <div>
      <div>
        <Link to="/">home</Link>
      </div>
      <div>
        <Link to="/bs1/about">about</Link>
      </div>
      <div>
        <Link to="/bs2/users">users</Link>
      </div>
    </div>
    <div>
      <Switch>
        <Route exact path="/" render={(props) => {
          return <RouteGuard {...props} component={Home} />
        }}></Route>
        <Route exact path="/bs1/about" render={(props) => {
          return <RouteGuard {...props} component={About} />
        }}></Route>
        <Route exact path="/bs2/users" render={(props) => {
          return <RouteGuard {...props} component={Users} />
        }}></Route>
      </Switch>
    </div>
  </div>
};

const RouteGuard = ({ component: Component, history }) => {
  useEffect(() => {
    return history.listen((location) => {
      const { pathname } = location;
      console.log('pathname --->', pathname);
    });
  }, []);
  return <Component />;
};

const Home = () => {
  return <div>home</div>;
}

const About = () => {
  return <div>/bs1/about</div>;
}

const Users = () => {
  return <div>/bs2/users</div>;
}
// url: [
//   '//ice.alicdn.com/icestark/child-seller-react/index.js',
//   '//ice.alicdn.com/icestark/child-seller-react/index.css',
// ],
// url: [
//   '//ice.alicdn.com/icestark/child-waiter-vue/app.js',
//   '//ice.alicdn.com/icestark/child-waiter-vue/app.css'
// ],

function App() {
  return (
    <div>
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
