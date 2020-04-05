import React from 'react'
import { Avatar, makeStyles, createStyles, Theme } from '@material-ui/core'
const AVATAR_SIZE = 122

const styles = ({ palette, spacing, breakpoints }: Theme) =>
  createStyles({
    avatar: {
      width: AVATAR_SIZE,
      height: AVATAR_SIZE,
      boxSizing: 'border-box',
      border: `5px solid ${palette.info.dark}`,
    },
  })

const useStyles = makeStyles(styles)

interface AvatarProps {
  url?: string
}

const Component: React.FC<AvatarProps> = ({ url }) => {
  const classes = useStyles()
  return <Avatar src={url} className={classes.avatar} />
}

export default Component
