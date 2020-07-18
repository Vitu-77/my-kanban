import React, { useContext } from 'react';
import {useDrop} from 'react-dnd';

import Card from '../Card';
import { Container, Header, Title, CardsContainer, NewCard } from './styles';

import { ListsContext } from '../../store/Lists';

const newCard = {
	id: Math.random(),
	title: 'Card Novinho em Folha',
};

const List = ({ data, index }) => {
	const { handleInsetCard } = useContext(ListsContext);

	const [, dropRef] = useDrop({
		accept: 'CARD',
		hover: (index) => {
			console.log(index);
		}
	})

	/** posso criar um drop area, que vai ocupar o restante da altura da lista toda, fora os cards */

	return (
		<Container ref={dropRef}>
			<Header>
				<Title onClick={() => console.log(data)}>{data.title}</Title>
				<span>...</span>
			</Header>
			<CardsContainer>
				{data.cards.map((card, cardIndex) => (
					<Card key={card.id} data={card} index={cardIndex} listIndex={index} />
				))}
			</CardsContainer>
			<NewCard onClick={() => handleInsetCard(index, newCard)}>Add Card</NewCard>
		</Container>
	);
};

export default List;
