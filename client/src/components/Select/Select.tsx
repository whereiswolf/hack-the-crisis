import React, { useState } from 'react'
import {
  InputAdornment,
  OutlinedInput,
  Collapse,
  List,
  ClickAwayListener,
  makeStyles,
  SelectProps as BaseSelectProps,
} from '@material-ui/core'
import SelectItem from './SelectItem'
import DropdownIcon from './icons/dropdown.svg'
import styles from './Select.style'

const useStyles = makeStyles(styles)

interface SelectProps extends Omit<BaseSelectProps, 'onChange'> {
  onChange?: (value: string | number) => any
  options?: {
    title: string
    value: string | number
  }[]
  placeholder?: string
  name?: string
  controlledValue?: string
}

const defaultOptions = [
  {
    value: 10,
    title: 'Value - 10',
  },
  {
    value: 20,
    title: 'Value - 20',
  },
  {
    value: 30,
    title: 'Value - 30',
  },
]

const Select: React.FC<SelectProps> = ({
  children,
  onChange,
  options = defaultOptions,
  placeholder = '',
  name,
  controlledValue,
  ...props
}) => {
  const classes = useStyles()
  const [value, setValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = () => setIsOpen(!isOpen)
  const closeDropdown = () => setIsOpen(false)
  const onSelect = (eventValue: any) => {
    controlledValue || setValue(eventValue)
    if (onChange) onChange(eventValue)
    closeDropdown()
  }
  const title =
    value || controlledValue
      ? options.find((item) => item.value === (value || controlledValue))?.title
      : placeholder
  const iconClass = isOpen ? classes.iconOpen : classes.icon
  return (
    <ClickAwayListener onClickAway={closeDropdown}>
      <div className={classes.wrapper}>
        <OutlinedInput
          value={title}
          labelWidth={0}
          disabled
          inputProps={{
            root: classes.inputRoot,
          }}
          classes={{ input: classes.inputRoot }}
          onClick={toggleDropdown}
          endAdornment={
            <InputAdornment position="end">
              <img src={DropdownIcon} alt="V" className={iconClass} />
            </InputAdornment>
          }
          className={classes.input}
        />
        <Collapse
          in={isOpen}
          timeout="auto"
          unmountOnExit
          className={classes.collapse}
        >
          <List
            component="div"
            disablePadding
            classes={{ root: classes.listRoot }}
          >
            {options.map((item) => (
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

export default Select
