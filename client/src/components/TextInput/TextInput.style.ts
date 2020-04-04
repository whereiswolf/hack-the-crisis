import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { CSSProperties } from 'react';
import { createStyles } from '@material-ui/core';

const FONT_SIZE = 20;
const INPUT_HEIGHT = 47;

const input: CSSProperties = {
  transition: 'all .2s',
  boxSizing: 'border-box',
  border: '3px solid',
}

export default ({ palette, spacing, breakpoints }: Theme) => createStyles({
  root: {
    borderRadius: 7,
    padding: 0,
    boxSizing: 'border-box',
    width: '100%',
    height: INPUT_HEIGHT,
  },
  input: {
    '&::-webkit-input-placeholder': {
      color: palette.text.secondary,
    },
    padding: '7px 33px',
    fontSize: FONT_SIZE,
    fontWeight: 'bold',
    letterSpacing: 0.727273,
    fontFamily: 'Exo',
    // color: palette.text.secondary,
  },
  inputRoot: {
    ...input,
    '& > fieldset': {
      border: '0px',
    },
    backgroundColor: palette.primary.light,
    borderColor: palette.primary.light,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  focused: {
    ...input,
    backgroundColor: palette.info.main,
    borderColor: palette.info.main,
  },
  focusedWithValue: {
    ...input,
    borderColor: palette.info.main,
    backgroundColor: palette.info.main,
    '& > input': {
      color: palette.text.primary,
    },
  },
  error: {
    ...input,
    '& > input': {
      color: palette.warning.main,
    },
    borderColor: palette.warning.main,
    boxShadow: `inset 0 0 0 -2px ${palette.warning.main}`,
  },
});
