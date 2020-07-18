import React from 'react';

import Card from '../Card';
import { Container, Header, Title, CardsContainer } from './styles';

const List = ({ data }) => {
	return (
		<Container>
			<Header>
				<Title>{data.title}</Title>
				<span>...</span>
			</Header>
			<CardsContainer>
				{data.cards.map(({ id, ...data }) => (
					<Card key={id} data={data} />
				))}
			</CardsContainer>
		</Container>
	);
};

export default List;
