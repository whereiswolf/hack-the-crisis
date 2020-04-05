import styled from 'styled-components'
import { Typography, Grid } from '@material-ui/core'
import BaseTypeLabel from './TypeLabel'

export const TypeLabel = styled(BaseTypeLabel)`
  margin-right: 13px;
`

export const Title = styled(Typography)`
  font-size: 40px !important;
  line-height: 53px !important;
  font-weight: 900 !important;
  font-family: Exo !important;
  letter-spacing: -0.00462171px;
  color: ${(p) => p.theme.palette.text.primary};
  padding-bottom: 8px;
`

export const UpperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const LowerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Wrapper = styled.div`
  padding: 40px 60px 44px 100px;
`

export const Link = styled.a`
  height: 26px;
  font-size: 17px !important;
  line-height: 23px !important;
  font-weight: 600 !important;
  font-family: Exo !important;
  color: ${(p) => p.theme.palette.secondary.main};
  text-decoration: underline;
`
export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Content = styled.div`
  display: flex;
  margin-left: 38px;
  flex-direction: column;
  flex: 1;
`

export const BusinessImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: url('${(p: { src?: string }) => p.src || ''}');
  background-size: cover;
  background-position: center center;
  border-radius: 18px;
  margin-top: 44px;
`

export const RatingWrapper = styled(Grid)`
  width: auto;
  flex: 1;
`
