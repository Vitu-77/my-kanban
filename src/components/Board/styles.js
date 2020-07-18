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
