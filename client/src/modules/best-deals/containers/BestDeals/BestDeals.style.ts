import styled from 'styled-components'
import { Grid, Typography } from '@material-ui/core'

export const Wrapper = styled(Grid)`
  height: 100%;
`
export const Title = styled(Typography)`
  em {
    font-style: normal;
    color: ${(p) => p.theme.palette.secondary.main};
  }
  padding-top: 70px;
  padding-bottom: 70px;
`
