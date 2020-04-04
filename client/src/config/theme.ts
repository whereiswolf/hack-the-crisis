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