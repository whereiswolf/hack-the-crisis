import styled from 'styled-components'
import { Grid } from '@material-ui/core'

export const Wrapper = styled(Grid)`
  box-sizing: border-box;
  background: #161616;
  padding: 40px 50px 40px 92px;
  display: flex;
  flex-direction: row;
`

export const AmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  padding-left: 24px;
`
export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: 3px solid ${(p) => p.theme.palette.primary.light};
  padding: 8px;
  padding-right: 24px;
`

export const ButtonWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
