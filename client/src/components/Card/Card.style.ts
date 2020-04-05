import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { createStyles } from '@material-ui/core'
import { colors } from 'config'

const IMAGE_HEIGHT = 180
const WRAPPER_WIDTH = 250

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
      flexDirection: 'column',
      overflow: 'hidden',
      backgroundColor: palette.primary.main,
    },
    image: {
      width: '100%',
      height: IMAGE_HEIGHT,
      backgroundColor: palette.primary.light,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
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
