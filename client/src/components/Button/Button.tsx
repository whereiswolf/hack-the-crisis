import React, { ReactNode } from 'react'
import ButtonBase, {
  ButtonProps as ButtonBaseProps,
} from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import styles from './Button.style'

interface ButtonProps extends ButtonBaseProps {
  variant?: 'outlined' | 'contained'
  color?: 'primary' | 'secondary'
  children?: ReactNode | string
  fullWidth?: boolean
}

const useStyles = makeStyles(styles)

const Button: React.FC<ButtonProps> = ({
  variant = 'outlined',
  color = 'secondary',
  children,
  ...props
}) => {
  const classes = useStyles()
  const label = variant === 'outlined' ? classes.labelOutlined : classes.label
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

export default Button
