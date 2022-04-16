import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
  --background:#EEE;
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
}

a{
  text-decoration: none;
}

button{
  cursor: pointer;
}

`