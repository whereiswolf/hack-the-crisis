import { createGlobalStyle } from 'styled-components'
import { Theme } from '@material-ui/core'

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    background: ${(p: { theme: Theme }) => p.theme.palette.primary.dark};
    overflow-x: hidden;
  }
`
