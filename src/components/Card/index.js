import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { Container } from './styles';

import { ListsContext } from '../../store/Lists';

const Card = ({ data, index, listIndex }) => {
	const cardRef = useRef();
	const { handleMoveCard } = useContext(ListsContext);

	const [{ isDragging }, dragRef] = useDrag({
		item: { type: 'CARD', index, listIndex },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const [, dropRef] = useDrop({
		accept: 'CARD',
		hover: (item) => {
			if (item.index === index && item.listIndex === listIndex) {
				return;
			}

			handleMoveCard(item.listIndex, listIndex, item.index, index);

			item.index = index;
			item.listIndex = listIndex;
		},
	});

	dragRef(dropRef(cardRef));

	return (
		<Container ref={cardRef} isDragging={isDragging}>
			<p>{data.title}</p>
		</Container>
	);
};

export default Card;
