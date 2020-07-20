import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 12px;
	border-radius: 4px;
	background: none;
	height: 100%;
	max-height: 100%;
	width: 280px;

	&:last-child {
		margin-right: 0;
	}
`;

export const Header = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 6px;
	background: #dedede;
	border-radius: 4px 4px 0 0;
`;

export const Title = styled.h2`
	font-size: 16px;
	color: #000;
`;

export const CardsContainer = styled.ul`
	width: 100%;
	height: max-content;
	overflow-y: auto;
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #dedede;
	padding: 0 6px;
	border-radius: 0 0 4px 4px;
`;

export const NewCard = styled.button`
	margin-top: 4px;
	border-radius: 4px;
	font-size: 15px;
	height: 38px;
	min-height: 38px;
	width: 100%;
	cursor: pointer;

	&:hover {
		background: rgba(200, 200, 200);
	}
`;

export const DropZone = styled.div`
	width: 100%;
	height: 100%;
	flex: 1;
	background: none;
	visibility: none;
`;