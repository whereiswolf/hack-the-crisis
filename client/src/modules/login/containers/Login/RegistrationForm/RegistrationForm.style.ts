import { Typography, Grid } from '@material-ui/core'
import styled from 'styled-components'

export const Title = styled(Typography)`
  em {
    color: ${(p) => p.theme.palette.secondary.main};
    font-style: normal;
  }
`

export const Wrapper = styled(Grid)`
  height: 100%;
  padding: 60px;
`

export const InputsWrapper = styled(Grid)`
  > div:not(:last-of-type) {
    margin-bottom: 16px;
  }
`
