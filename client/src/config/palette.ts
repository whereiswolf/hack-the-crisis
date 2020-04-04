import colors from './colors';  

export const dark = {
  primary: {
    light: colors.primary[70],
    main: colors.primary[80],
    dark: colors.primary[100],
    contrastText: colors.white,
  },
  secondary: {
    light: colors.secondary[50],
    main: colors.secondary[50],
    dark: colors.secondary[50],
    contrastText: colors.white,
  },
  warning: {
    main: colors.accent[100],
  },
  text: {
    primary: colors.text[100],
    secondary: colors.text[50],
  },
}

export const light = {
  primary: {
    light: colors.light[90],
    main: colors.light[100],
    contrastText: colors.primary[50],
  },
  secondary: {
    light: colors.secondary[50],
    main: colors.secondary[100],
    contrastText: colors.white,
  },
  warning: {
    main: colors.accent[100],
  },
  text: {
    primary: colors.primary[50],
    secondary: colors.primary[20],
  },
}

export default {
  dark,
  light,
};