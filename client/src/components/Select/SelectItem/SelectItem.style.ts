import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { createStyles } from '@material-ui/core'

const wrapper = {
  fontFamily: 'Exo',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: 20,
  lineHeight: '25px',
  paddingLeft: 33,
  paddingRight: 33,
  letterSpacing: 0.55,
  textOverflow: 'ellipsis',
}

export default ({ palette, spacing, breakpoints }: Theme) =>
  createStyles({
    wrapper: {
      ...wrapper,
      color: palette.text.secondary,
    },
    wrapperActive: {
      ...wrapper,
      fontWeight: 'bold',
      color: palette.secondary.main,
    },
  })
