import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles'
import { dark, light } from './palette'

const theme: ThemeOptions = {
  typography: {
    fontFamily: [
      'Muli',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    button: {
      textTransform: 'none',
      fontSize: 17,
      fontWeight: 500,
    },
    h2: {
      fontFamily: 'Exo',
      fontSize: 68,
      fontWeight: 900,
    },
    h4: {
      fontFamily: 'Exo',
      fontSize: 40,
      fontWeight: 900,
    },
    h5: {
      fontFamily: 'Exo',
      fontSize: 28,
      fontWeight: 900,
    },
    h6: {
      fontFamily: 'Exo',
      fontSize: 18,
      fontWeight: 'bold',
    },
    body1: {
      fontFamily: 'Muli',
      fontWeight: 300,
    },
    body2: {
      fontFamily: 'Muli',
      fontWeight: 300,
      fontSize: 15,
    },
  },
}

export const lightTheme = createMuiTheme({
  ...theme,
  palette: light,
})

export const darkTheme = createMuiTheme({
  ...theme,
  palette: dark,
})
