import React from 'react'
import {
  LinearProgress,
  withStyles,
  LinearProgressProps,
} from '@material-ui/core'

export default withStyles({
  root: {
    height: 15,
    background: '#262626',
    borderRadius: 9,
  },
  bar: {
    borderRadius: 9,
    backgroundColor: '#FE3F59',
  },
})((props: LinearProgressProps) => (
  <LinearProgress variant="determinate" {...props} />
))
