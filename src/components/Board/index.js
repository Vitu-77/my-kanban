import React, { useState, useEffect, useContext } from 'react';

import List from '../List';
import { Container, Loading, NewList } from './styles';

import { ListsContext } from '../../store/Lists';

import data from '../../data';

const Board = () => {
	const [loadingData, setLoadingData] = useState(true);
	const { lists, setLists } = useContext(ListsContext);

	useEffect(() => {
		const get = () => {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve(data);
				}, [300]);
			});
		};

		const fetchData = async () => {
			const data = await get();

			setLists(data.board);
			setLoadingData(false);
		};

		fetchData();
	}, []);

	if (loadingData) {
		return (
			<Container>
				<Loading>Loading...</Loading>
			</Container>
		);
	}

	return (
		<Container>
			{lists.map((list, index) => (
				<List key={list.id} data={list} index={index} />
			))}
			<NewList>New List</NewList>
		</Container>
	);
};

export default Board;
