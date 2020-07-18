import React from 'react';

import Header from '../Header';
import Board from '../Board';

import { Container } from './styles';

import { ListsProvider } from '../../store/Lists';

const Kanban = () => {
	return (
		<Container>
			<Header />
			<ListsProvider>
				<Board />
			</ListsProvider>
		</Container>
	);
};

export default Kanban;
