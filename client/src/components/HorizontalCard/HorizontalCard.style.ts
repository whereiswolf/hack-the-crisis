import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { createStyles } from '@material-ui/core'

const IMAGE_HEIGHT = 132
const WRAPPER_WIDTH = 300

export const getImageStyles = (url: string) =>
  url
    ? {
        backgroundImage: `url('${url}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }
    : {
        backgroundColor: 'rgba(255,255,255,0.1)',
      }

export default ({ palette, spacing, breakpoints }: Theme) =>
  createStyles({
    wrapper: {
      height: 'auto',
      width: WRAPPER_WIDTH,
      borderRadius: 18,
      display: 'flex',
      flexDirection: 'row',
      overflow: 'hidden',
      backgroundColor: palette.primary.main,
    },
    image: {
      width: '150px',
      height: IMAGE_HEIGHT,
      backgroundColor: 'red',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '154px',
      flex: 1,
      padding: 10,
      boxSizing: 'border-box',
    },
    title: {
      color: palette.text.hint,
      fontSize: 15,
      lineHeight: '19px',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 28,
      color: palette.secondary.main,
      fontWeight: 800,
    },
    buttonBase: {
      borderRadius: 18,
    },
  })
