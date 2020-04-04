import React, { useState } from 'react'
import { TextField } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/styles';
import styles from './TextInput.style';

interface TextInputProps extends WithStyles<typeof styles> {
  onChange?: (value: string | number) => void;
  placeholder?: string;
  name?: string;
  value?: string;
  onClick?: () => void;
}


const TextInput: React.FC<TextInputProps> = ({
  children,
  classes,
  onChange,
  placeholder = '',
  name = '',
  value,
  ...props
}) => {
  const [inputValue, setValue] = useState('');
  const onTextInput = (e: any) => {
    setValue(e.currentTarget.value);
    if (onChange) onChange(e.currentTarget.value);
  }
  const focused = inputValue
    ? classes.focusedWithValue
    : classes.focused;
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
        }
      }}
      {...props}
    />
  )
}

export default withStyles(styles)(TextInput);
