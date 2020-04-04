import React from 'react'
import { ListItem } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/styles';
import styles from './SelectItem.style';

interface SelectItemProps extends WithStyles<typeof styles> {
  key: string;
  onClick: () => void;
  active?: boolean;
}

const SelectItem: React.FC<SelectItemProps> = ({
  children,
  classes,
  onClick,
  active = false,
  ...props
}) => {
  const listItemClass = active
    ? classes.wrapperActive
    : classes.wrapper;
  return (
    <ListItem
      onClick={onClick}
      className={listItemClass}
    >
      {children}
    </ListItem>
  );
}

export default withStyles(styles)(SelectItem);
