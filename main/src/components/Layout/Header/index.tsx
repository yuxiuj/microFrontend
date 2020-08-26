import React from 'react';
import { Layout } from 'antd';
import styles from './index.less';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const { Header } = Layout;

type HeaderProps = {} & RouteComponentProps;

const BgHeader = (props: HeaderProps) => {
	const { history } = props;

	const linkToHomePage = () => {
		history.push('/');
	};

	return (
		<Header>
			<div className={`${styles['header-wrapper']} flex-around-center`}>
				<div className={`${styles['logo']} flex-start-center`} onClick={linkToHomePage}>
					<span className={styles['platform-name']}>test</span>
				</div>
			</div>
		</Header>
	);
};

export default withRouter(BgHeader);
