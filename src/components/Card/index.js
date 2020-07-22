import React, { useState, useRef, useLayoutEffect, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { Container, Progress, CardOptions } from './styles';

import { ListsContext } from '../../store/Lists';

const Card = ({ data, index, listIndex }) => {
	const cardRef = useRef();
	const { handleMoveCard } = useContext(ListsContext);

	const [progress, setProgress] = useState(undefined);

	const [{ isDragging, opacity, scale }, dragRef] = useDrag({
		item: { type: 'CARD', index, listIndex },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			opacity: monitor.isDragging() ? .2 : 1,
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
		},
	});

	useLayoutEffect(() => {
		const cardTasks = data.tasks;
		const totalCardTasks = cardTasks.length;

		if (totalCardTasks === 0) {
			return setProgress(null);
		}

		const doneTasks = cardTasks.filter((task) => task.done).length;
		const progress = Math.round((doneTasks * 100) / totalCardTasks);

		setProgress(progress);
	}, [data]);

	dragRef(dropRef(cardRef));

	return (
		<Container
			ref={cardRef}
			label={data.label}
			isDragging={isDragging}
			style={{ opacity }}
			>
			<CardOptions></CardOptions>
			<p>{data.title}</p>
			{progress !== null && (
				<Progress progress={progress}>
					<div></div>
				</Progress>
			)}
		</Container>
	);
};

export default Card;
