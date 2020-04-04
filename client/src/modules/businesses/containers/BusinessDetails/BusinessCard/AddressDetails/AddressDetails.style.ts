import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const ICON_CONTAINER_SIZE = 40

export const Icon = styled.img``

export const IconContainer = styled.div`
  min-width: ${ICON_CONTAINER_SIZE}px;
  min-height: ${ICON_CONTAINER_SIZE}px;
  max-width: ${ICON_CONTAINER_SIZE}px;
  max-height: ${ICON_CONTAINER_SIZE}px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  background-color: ${(p) => p.theme.palette.primary.light};
  border-radius: 100px;
`

export const Title = styled(Typography)`
  font-size: 23px !important;
  font-weight: bold !important;
  letter-spacing: -0.00265749px !important;
  font-family: Exo !important;

  color: ${(p) => p.theme.palette.text.primary};
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
