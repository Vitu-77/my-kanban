import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        outline: none;
    }

    #root, html, body {
        height: 100%;
        max-height: 100%;
        overflow-y: hidden;
    }

    button {
        border: none;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`;

export default GlobalStyles;