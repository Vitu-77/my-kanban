import React from 'react';

import { Container, Header, Title, CardsContainer } from './styles';

const List = ({ children, title }) => {
	return (
		<Container>
			<Header>
				<Title>{title}</Title>
				<span>...</span>
			</Header>
			<CardsContainer>{children}</CardsContainer>
		</Container>
	);
};

export default List;
