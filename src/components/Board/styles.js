import styled from 'styled-components';

export const Container = styled.section`
	min-width: 100%;
	width: max-content;
	height: calc(100vh - 45px);
	padding: 8px;
	background: ${({ theme }) => theme.mainColor};
	display: flex;
	overflow-y: hidden;
	overflow-x: auto;
	margin-top: 45px;
`;

export const Loading = styled.span`
	color: #fff;
	font-size: 20px;
`;

export const NewList = styled.button`
	width: 280px;
	height: 36px;
	border-radius: 4px;
	border: 1px solid rgba(255,255,255, .1);
	font-size: 16px;
	cursor: pointer;
`;