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
		hover: (item, monitor) => {
			const draggedIndex = item.index;
			const targetIndex = index;

			const draggedListIndex = item.listIndex;
			const targetListIndex = listIndex;

			if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
				return;
			}

			const targetSize = cardRef.current.getBoundingClientRect();
			const targetCenter = (targetSize.bottom - targetSize.top) / 2;

			const draggedOffset = monitor.getClientOffset();
			const draggedTop = draggedOffset.y - targetSize.top;

			if (draggedIndex < targetIndex && draggedTop < targetCenter) {
				return;
			}

			if (draggedIndex > targetIndex && draggedTop > targetCenter) {
				return;
			}

			handleMoveCard(item.listIndex, listIndex, item.index, index);

			item.index = index;
			item.listIndex = listIndex;

			console.log(item);
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
