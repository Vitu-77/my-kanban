import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { v1 as uuid } from 'uuid';

import Card from '../Card';
import { Container, Header, Title, CardsContainer, NewCard, DropZone } from './styles';

import { ListsContext } from '../../store/Lists';

const newCard = () => {
	const card = {
		id: uuid(),
		title: 'Card Novinho em Folha',
		tasks: []
	};

	return card;
};

const List = ({ data, index }) => {
	const { handleInsetCard, handleMoveCard } = useContext(ListsContext);

	const [, dropRef] = useDrop({
		accept: 'CARD',
		hover: (item) => {
			const draggedIndex = item.index;
			const targetIndex = data.cards.length;

			const draggedListIndex = item.listIndex;
			const targetListIndex = index;

			if (draggedListIndex === targetListIndex && draggedIndex === targetIndex - 1) {
				return;
			}

			if (draggedListIndex === targetListIndex && draggedIndex === targetIndex) {
				return;
			}

			handleMoveCard(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

			item.listIndex = index;
			item.index = data.cards.length;
		},
	});

	return (
		<Container>
			<Header>
				<Title onClick={() => console.log(data)}>{data.title}</Title>
				<span>...</span>
			</Header>
			<CardsContainer>
				{data.cards.map(
					(card, cardIndex) =>
						card && (
							<Card key={card.id} data={card} index={cardIndex} listIndex={index} />
						)
				)}
			</CardsContainer>
			<NewCard onClick={() => handleInsetCard(index, newCard())}>Add Card</NewCard>
			<DropZone ref={dropRef} />
		</Container>
	);
};

export default List;
