import React, { useState } from 'react'
import { TextField, makeStyles, TextFieldProps } from '@material-ui/core'
import styles from './TextInput.style'

interface TextInputProps extends Omit<TextFieldProps, 'onChange'> {
  onChange?: (value: string | number) => void
  placeholder?: string
  name?: string
  value?: string
  onClick?: () => void
}

const useStyles = makeStyles(styles)

const TextInput: React.FC<TextInputProps> = ({
  children,
  onChange,
  placeholder = '',
  name = '',
  value,
  ...props
}) => {
  const classes = useStyles()
  const [inputValue, setValue] = useState('')
  const onTextInput = (e: any) => {
    setValue(e.currentTarget.value)
    if (onChange) onChange(e.currentTarget.value)
  }
  const focused = inputValue ? classes.focusedWithValue : classes.focused
  return (
    <TextField
      value={value || inputValue}
      onChange={onTextInput}
      variant="outlined"
      classes={{
        root: classes.root,
      }}
      placeholder={placeholder}
      InputProps={{
        classes: {
          focused,
          input: classes.input,
          root: classes.inputRoot,
          error: classes.error,
        },
      }}
      {...props}
    />
  )
}

export default TextInput
