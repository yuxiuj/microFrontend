import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from '@/pages/404';
import routes from '../../routes';
import lazyLoadComponent from '@/utils/lazyLoad';

interface RouteProps {
	link: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	component: () => any;
	showHeader?: boolean;
	showSider?: boolean;
}

const BgLayout = () => {
	return (
		<Router basename="/react">
			<Switch>
				{routes.map((item: RouteProps) => {
					const { link, component } = item;
					return (
						<Route
							key={link}
							path={link}
							// component={component}
							render={() => {
								const Component = lazyLoadComponent(component);
								return <Component />;
							}}
							exact
						/>
					);
				})}
				<Route component={PageNotFound} />
			</Switch>
		</Router>
	);
};

export default BgLayout;
