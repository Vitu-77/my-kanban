import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 12px;
	border-radius: 4px;
	background: #dedede;
	padding: 4px;
	max-height: 100%;
	height: max-content;
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
	padding: 6px 4px;
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
`;

export const NewCard = styled.button`
	margin-top: 4px;
	border-radius: 4px;
	font-size: 15px;
	height: 38px;
	width: 100%;
	cursor: pointer;

	&:hover {
		background: rgba(200, 200, 200);
	}
`;