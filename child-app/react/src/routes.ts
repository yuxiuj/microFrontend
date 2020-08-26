const routes = [
	{
		link: '/home',
		component: () => import('./pages/Home'),
	},
	{
		link: '/test',
		component: () => import('./pages/Test'),
	},
];

export default routes;
