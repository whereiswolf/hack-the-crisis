import React, { ReactNode } from 'react'
import ButtonBase from '@material-ui/core/Button';
import { withStyles, WithStyles } from '@material-ui/styles';
import styles from './Button.style';

interface ButtonProps extends WithStyles<typeof styles> {
  variant?: 'outlined' | 'contained';
  color?: 'primary' | 'secondary';
  children?: ReactNode | string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'outlined',
  color = 'secondary',
  children,
  classes,
  ...props
}) => {
  const label = variant === 'outlined'
    ? classes.labelOutlined
    : classes.label;
  return (
    <ButtonBase
      color={color}
      variant={variant}
      classes={{
        label,
        outlinedSecondary: classes.outlinedSecondary,
        root: classes.root,
      }}
      {...props}
    >
      {children || 'Button'}
    </ButtonBase>
  )
}

export default withStyles(styles)(Button);
