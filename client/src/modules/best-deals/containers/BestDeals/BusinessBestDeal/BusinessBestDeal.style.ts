import styled from 'styled-components'
import {
  Button as ButtonBase,
  Discount as DiscountBase,
  Countdown as CountdownBase,
  Card as CardBase,
} from 'components'
import { Typography, Grid } from '@material-ui/core'

export const Title = styled(Typography)`
  em {
    font-style: normal;
    color: ${(p) => p.theme.palette.secondary.main};
  }
  margin-bottom: 30px !important;
`

export const Wrapper = styled(Grid)`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 40px 100px 40px 60px;
  background-color: ${(p) => p.theme.palette.primary.main};
`

export const Button = styled(ButtonBase)`
  margin-top: 30px !important;
  height: 47px;
`

export const Discount = styled(DiscountBase)`
  margin-top: 30px;
`

export const Countdown = styled(CountdownBase)`
  margin-bottom: 30px !important;
  justify-content: center;
`

export const Card = styled(CardBase)`
  width: 400px;
  min-height: 300px;
  background-color: ${(p) => p.theme.palette.text.disabled};
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const CardContent = styled(Grid)`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 33px;
`
export const CardTitle = styled(Typography)`
  font-family: Exo !important;
  font-weight: 800 !important;
  font-size: 27px !important;
  line-height: 32px !important;
  letter-spacing: 0.3375px;
  color: ${(p) => p.theme.palette.text.primary};
  text-align: left;
`

export const CardSubtitle = styled(Typography)`
  font-weight: bold !important;
  font-size: !important;
  line-height: 24px !important;
  margin-bottom: 10px !important;
  letter-spacing: 0.25px;
  color: ${(p) => p.theme.palette.info.main};
`
