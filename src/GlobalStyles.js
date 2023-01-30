import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *, .App{
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        font-family: 'Clash Display', sans-serif;
    }
`;

export default GlobalStyles;