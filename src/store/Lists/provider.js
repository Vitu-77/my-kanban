import React, { useState } from 'react';

import ListsContext from './context';

const ListsProvider = ({ children }) => {
	const [lists, setLists] = useState([]);

	const handleInsetCard = (listIndex, card) => {
		const targetList = lists[listIndex];

		targetList.cards.push(card);

		setLists(
			lists.filter((list, index) => {
				if (index === listIndex) {
					return targetList;
				}

				return list;
			})
		);
	};

	const handleMoveCard = (fromListIndex, toListIndex, fromIndex, toIndex) => {
		const fromList = lists[fromListIndex];
		const toList = lists[toListIndex];
		const fromListCards = fromList.cards;
		const toListCards = toList.cards;
		const dragged = fromListCards[fromIndex];

		fromListCards.splice(fromIndex, 1);
		toListCards.splice(toIndex, 0, dragged);

		setLists(
			lists.filter((list, index) => {
				if (index === fromListIndex) {
					return { ...fromList, cards: fromListCards };
				}

				if (index === toListIndex) {
					return { ...toList, cards: toListCards };
				}

				return list;
			})
		);
	};

	return (
		<ListsContext.Provider value={{ lists, setLists, handleMoveCard, handleInsetCard }}>
			{children}
		</ListsContext.Provider>
	);
};

export default ListsProvider;
