import React from 'react';

import Header from '../Header';
import Board from '../Board';
import List from '../List';
import Card from '../Card';

import { Container } from './styles';

const Kanban = () => {
	return (
		<Container>
			<Header />
			<Board>
				<List title='List 1'>
					<Card />
					<Card />
					<Card />
				</List>

				<List title='Awasome Liste'>
					<Card />
					<Card />
				</List>
				<List title='Awasome Liste'>
					<Card />
					<Card />
				</List>
				<List title='Awasome Liste'>
					<Card />
					<Card />
				</List>
				<List title='Awasome Liste'>
					<Card />
					<Card />
				</List>

				<List title='Syka Blyta'>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</List>
			</Board>
		</Container>
	);
};

export default Kanban;
