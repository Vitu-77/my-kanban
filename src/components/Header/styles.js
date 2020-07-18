import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    height: 50px;
    padding: 0 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.mainColor}99;

    & > h1 {
        color: #FFF;
        font-size: 18px;
    }
`;