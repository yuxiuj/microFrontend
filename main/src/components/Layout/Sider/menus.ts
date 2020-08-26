/**
 * 侧边栏菜单配置项
 */
export default [
	{
		catalogKey: 'home',
		catalogName: 'Home',
		catalogRoute: '/',
		catalogList: [],
	},
	{
		catalogKey: 'react',
		catalogName: 'React',
		catalogRoute: null,
		catalogList: [
			{
				catalogKey: 'react-1',
				catalogName: 'react1',
				catalogRoute: '/react/home',
			},
			{
				catalogKey: 'react-2',
				catalogName: 'react2',
				catalogRoute: '/react/test',
			},
		],
	},
];
