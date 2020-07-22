import styled, { css } from 'styled-components';

export const Container = styled.li`
    position: relative;
    border-radius: 6px;
    background: #FFF;
    padding: 32px 16px;
    margin: 4px 0;
    width: 100%;
    border-left: 6px solid ${({ label }) => label};
    cursor: grab;
    transition: 300ms;

    & > p {
        font-size: 15px;
    }

    ${({ isDragging }) => isDragging && css`
        background: #ccc;
        cursor: grabbing;
        
        & > * {
            visibility: hidden;
        }
    `}
`;

export const Progress = styled.div`
    width: 100%;
    height: 6px;
    border-radius: 6px;
    padding: 1px;
    background: #dedede;
    margin-top: 32px;

    & > div {
        height: 100%;
        border-radius: 6px;
        background: lightblue;
        width: ${({ progress }) => progress}%;
    }
`;

export const CardOptions = styled.button`
    background: #dedede;
    position: absolute;
    right: 4px;
    top: 4px;
    border-radius: 100%;
    width: 25px;
    height: 25px;
    cursor: pointer;
`;