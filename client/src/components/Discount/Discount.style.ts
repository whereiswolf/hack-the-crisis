import { Typography } from '@material-ui/core'
import styled from 'styled-components'

export const OldPrice = styled(Typography)`
  font-weight: 800 !important;
  font-size: 26px !important;
  margin-left: 15px !important;
  position: relative;

  ::before {
    content: '';
    width: 120%;
    height: 5px;
    background: ${(p) => p.theme.palette.error.main};
    display: block;
    position: absolute;
    top: 50%;
    opacity: 0.5;
    transform: translate(-50%, -50%);
    left: 50%;
  }
`

export const NewPrice = styled(Typography)`
  font-weight: 800 !important;
  font-size: 42px !important;
`
