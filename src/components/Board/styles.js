import styled from 'styled-components';

export const Container = styled.section`
	width: 100%;
	border: 2px solid red;
	height: calc(100vh - 50px);
	padding: 8px;
	background: ${({ theme }) => theme.mainColor};
	display: flex;
	overflow-y: hidden;
	overflow-x: auto;
`;
