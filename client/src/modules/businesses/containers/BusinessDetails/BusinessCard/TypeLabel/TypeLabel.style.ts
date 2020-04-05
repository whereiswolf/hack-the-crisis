import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const Icon = styled.img`
  margin-right: 12px;
`

export const Title = styled(Typography)`
  font-family: Exo !important;
  font-style: normal !important;
  font-weight: bold !important;
  font-size: !important;
  line-height: 20px !important;
  letter-spacing: 0.126838px !important;

  color: ${(p) => p.theme.palette.text.primary};
`
export const Wrapper = styled.div`
  padding: 8px 24px;
  background-color: ${(p) => p.theme.palette.primary.light};
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  display: inline-flex;
`
