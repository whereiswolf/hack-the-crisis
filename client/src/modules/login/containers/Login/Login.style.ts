import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import loginBg from './login-bg.png'

export const Background = styled(Grid)`
  background: url(${loginBg});
  background-size: cover;
  background-position: center center;
  height: 100%;
  position: relative;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(35, 35, 35, 0.65);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 90px;

  em {
    color: ${(p) => p.theme.palette.secondary.main};
    font-style: normal;
  }
`

export const RegistrationFormWrapper = styled(Grid)`
  background: ${(p) => p.theme.palette.primary.main};
`
