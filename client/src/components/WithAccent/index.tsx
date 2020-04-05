import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export default styled(Typography)`
  em {
    font-style: normal;
    color: ${(p) => p.theme.palette.secondary.main};
  }
`
