import React, { useState } from 'react'
import { InputAdornment, OutlinedInput, Collapse, List, ClickAwayListener  } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/styles';
import { TextInput } from 'components';
import SelectItem from './SelectItem'
import DropdownIcon from './icons/dropdown.svg'
import styles from './Select.style';

interface SelectProps extends WithStyles<typeof styles> {
  variant?: 'outlined' | 'contained';
  onChange?: (value: string | number) => void;
  options?: {
    title: string;
    value: string | number;
  }[];
  placeholder?: string;
  name: string;
}

const defaultOptions = [{
  value: 10, title: 'Value - 10'
}, {
  value: 20, title: 'Value - 20'
}, {
  value: 30, title: 'Value - 30'
}]

const Select: React.FC<SelectProps> = ({
  children,
  classes,
  onChange,
  options = defaultOptions,
  placeholder = '',
  name,
  ...props
}) => {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);
  const onSelect = (value: any) => {
    setValue(value);
    if (onChange) onChange(value);
    closeDropdown();
  }
  const iconClass = isOpen
    ? classes.iconOpen
    : classes.icon;
  return (
    <ClickAwayListener onClickAway={closeDropdown}>
      <div className={classes.wrapper} {...props}>
        <OutlinedInput
          value={value ? options.find(item => item.value === value)?.title : placeholder}
          labelWidth={0}
          disabled
          inputProps={{
            root: classes.inputRoot,
          }}
          classes={{ input: classes.inputRoot }}
          onClick={openDropdown}
          endAdornment={
            <InputAdornment position="end">
              <img src={DropdownIcon} alt="V" className={iconClass} />
            </InputAdornment>
          }
          className={classes.input}
        />
        <Collapse in={isOpen} timeout="auto" unmountOnExit className={classes.collapse}>
          <List
            component="div"
            disablePadding
            classes={{ root: classes.listRoot }}
          >
            {options.map(item => (
              <SelectItem
                key={`select-${name}-${item.title}-${item.value}`}
                onClick={() => onSelect(item.value)}
                active={value === item.value}
              >
                {item.title}
              </SelectItem>
            ))}
          </List>
        </Collapse>
      </div>
    </ClickAwayListener>
  )
}

export default withStyles(styles)(Select);
