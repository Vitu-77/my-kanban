import React, { useState, useEffect } from 'react';

import Header from '../Header';
import Board from '../Board';

import { Container } from './styles';

import data from '../../data';

const Kanban = () => {
	const [loadingData, setLoadingData] = useState(true);
	const [boardData, setBoardData] = useState([]);

	useEffect(() => {
		const get = () => {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve(data);
				}, [800]);
			});
		};

		const fetchData = async () => {
			const data = await get();

			setBoardData(data.board);
			setLoadingData(false);
		};

		fetchData();
	}, []);

	return (
		<Container>
			<Header />
			<Board loading={loadingData} data={boardData} />
		</Container>
	);
};

export default Kanban;
