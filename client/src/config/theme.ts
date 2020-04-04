import { createMuiTheme } from '@material-ui/core/styles';
import { dark, light } from './palette';

const theme = {
  typography: {
    useNextVariants: true,
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
