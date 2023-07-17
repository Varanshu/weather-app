
import { createGlobalStyle } from 'styled-components/macro'


const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Ysabeau Infant', sans-serif;
    }
    main {
        min-height:70vh;
        margin-top: calc(10vh + 20px);
    }
    header {
        min-height: 10vh;
    }
    footer {
        min-height: 10vh;
    }

    .container {
        width: 100%;
        margin-inline: auto;
    }

    .container-lg {
        max-width: 1120px; 
    }

    .container-md {
        max-width: 768px
    }
`

export default GlobalStyles;
