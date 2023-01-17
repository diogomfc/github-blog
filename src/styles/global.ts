import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 57.6%;
  }

  @media (min-width: 768px) {
    html {
      font-size: 62.5%;
    }
  
  }

  body {
    background: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1.6rem 'Nunito', sans-serif;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`
