import React from 'react';

import List from '../List';
import { Container, Loading } from './styles';

const Board = ({ data, loading }) => {
	if (loading) {
		return (
			<Container>
				<Loading>Loading...</Loading>
			</Container>
		);
	}

	return (
		<Container>
			{data.map(({ id, ...data }) => <List key={id} data={data} />)}
		</Container>
	);
};

export default Board;
