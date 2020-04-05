import styled from 'styled-components'
import TickBase from './Tick'
import { Typography, ButtonBase } from '@material-ui/core'

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const Title = styled(Typography)`
  font-family: Exo !important;
  font-weight: bold !important;
  font-size: 20px !important;
  line-height: 25px !important;
  letter-spacing: 0.727273px;
  color: ${(p) => p.theme.palette.text.secondary};
`

export const Box = styled(ButtonBase)`
  width: 33px;
  height: 33px;
  border: none;
  border-radius: 5px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 23px !important;
  background-color: ${(p) => p.theme.palette.text.disabled} !important;
  outline: none;
  padding: 0px;
`
export const Tick = styled(TickBase)`
  width: 28px !important;
  height: 28px !important;
`
