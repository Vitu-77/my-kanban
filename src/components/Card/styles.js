import styled, { css } from 'styled-components';

export const Container = styled.li`
    border-radius: 4px;
    background: #FFF;
    padding: 16px;
    margin: 4px 0;
    width: 100%;
    cursor: grab;

    & > p {
        font-size: 15px;
    }

    ${({ isDragging }) => isDragging && css`
        background: #ccc;
        cursor: grabbing;
        
        & > p {
            visibility: hidden;
        }
    `}
`;