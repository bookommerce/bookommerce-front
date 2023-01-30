import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *, .App{
        font-family: 'Clash Display', sans-serif;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
    }
`;

export default GlobalStyles;