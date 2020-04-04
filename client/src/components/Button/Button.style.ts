import { CSSProperties } from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { createStyles } from '@material-ui/core';

const FONT_SIZE = 20;
const FONT_SIZE_OUTLINED = 17;

const label: CSSProperties = {
  fontWeight: 800,
  lineHeight: '25px',
  textTransform: 'none',
  letterSpacing: 0.727273,
  fontFamily: 'Exo',
}

const root: CSSProperties = {
  borderRadius: 100,
  boxSizing: 'border-box',
  padding: '11px 32px',
  minWidth: 0,
  boxShadow: 'none !important',
}

export default ({ palette, spacing, breakpoints }: Theme) => createStyles({
  root: {
    ...root,
  },
  label: {
    ...label,
    fontSize: FONT_SIZE,
  },
  labelOutlined: {
    ...label,
    fontSize: FONT_SIZE_OUTLINED,
    color: palette.common.white,
  },
  outlinedSecondary: {
    ...root,
    padding: '5px 32px', 
    border: `3px solid ${palette.secondary.main} !important`,
  }
});
