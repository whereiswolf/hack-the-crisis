import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { createStyles } from '@material-ui/core'

const FONT_SIZE = 20
const INPUT_HEIGHT = 47

export default ({ palette, spacing, breakpoints }: Theme) =>
  createStyles({
    inputRoot: {
      padding: '7px 33px',
      paddingRight: 8,
      height: INPUT_HEIGHT,
      boxSizing: 'border-box',
      fontSize: FONT_SIZE,
      fontWeight: 'bold',
      letterSpacing: 0.727273,
      fontFamily: 'Exo',
      color: palette.text.secondary,
      textOverflow: 'ellipsis',
      width: '100%',
    },
    wrapper: {
      width: '100%',
      position: 'relative',
      backgroundColor: palette.primary.light,
      borderRadius: 7,
    },
    listRoot: {
      backgroundColor: palette.primary.light,
      borderRadius: 7,
    },
    collapse: {
      position: 'absolute',
      top: INPUT_HEIGHT + 5,
      zIndex: 999,
      width: '100%',
    },
    icon: {
      transform: 'rotateZ(0deg)',
      transition: 'transform .3s',
    },
    iconOpen: {
      transform: 'rotateZ(180deg)',
      transition: 'transform .3s',
    },
    input: {
      width: '100%',
    },
  })
