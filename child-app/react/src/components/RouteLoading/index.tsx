import React, { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RouteLoading: FC = (props: any) => {
	console.log('error --->', props.error);
	if (props.error) {
		return (
			<div>
				Error! <button onClick={props.retry}>Retry</button>
			</div>
		);
	} else {
		return <div>Loading...</div>;
	}
};

export default RouteLoading;
