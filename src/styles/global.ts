import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
  --background:#f2f2f2;
}

*{
  box-sizing: border-box;
}
    body {
    margin: 0;
    font-family: 'Inter' , 'Roboto',sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--background);
    font: 1rem;
}

a{
  text-decoration: none;
}

button{
  cursor: pointer;
}

@media (max-width:1080px) {
        html {
            font-size: 93.75%;
        }
    }

@media (max-width:720px) {
        html {
            font-size: 87.5%;
        }
    }

`