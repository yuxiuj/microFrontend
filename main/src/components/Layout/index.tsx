import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import PageNotFound from '@/pages/404';
import Header from './Header';
import Content from './Content';
import Sider from './Sider';
import RouteLoading from '@/components/RouteLoading';
import { AppRouter, AppRoute } from '@ice/stark';
import Home from '@/pages/Home';

interface RouteProps {
	link: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	component: () => any;
	showHeader?: boolean;
	showSider?: boolean;
}

declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		webpackJsonp: any[];
	}
}
const BgLayout = () => {
	const handleRouteChange = (pathname) => {
		console.log('pathname =====>', pathname);
		// window.webpackJsonp = [];
	};

	return (
		<Router>
			<Layout>
				<Header />
				<Layout style={{ height: 'calc(100vh - 64px)' }}>
					<Sider />
					<Layout>
						<Content>
							<AppRouter
								NotFoundComponent={PageNotFound}
								LoadingComponent={RouteLoading}
								onRouteChange={handleRouteChange}
							>
								<AppRoute exact path="/" title="首页" component={<Home />} />
								<AppRoute
									path="/react"
									title="React 子应用"
									entry="http://127.0.0.1:3333/index.html"
									sandbox={true}
								/>
							</AppRouter>
						</Content>
					</Layout>
				</Layout>
			</Layout>
		</Router>
	);
};

export default BgLayout;
