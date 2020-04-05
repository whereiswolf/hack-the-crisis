import styled from 'styled-components'
import { Grid, Typography, createStyles, Theme } from '@material-ui/core'
import HeartBase from './Heart'
import { rgba } from 'utils'

const WRAPPER_WIDTH = 950
const WRAPPER_HEIGHT = 700

const AVATAR_SIZE = 200

export const Heart = styled(HeartBase)`
  margin-left: 12px !important;
`

export const Wrapper = styled(Grid)`
  width: ${WRAPPER_WIDTH}px !important;
  height: ${WRAPPER_HEIGHT}px !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 18px;
  box-sizing: border-box;
  padding: 54px 60px 80px 60px;
  outline: none;
  background-color: ${(p) => p.theme.palette.primary.main};
`

export const Description = styled(Typography)`
  font-weight: 300 !important;
  font-size: 15px !important;
  line-height: 20px !important;
  color: ${(p) => p.theme.palette.text.secondary};
  text-align: center;
`

export const Title = styled(Typography)`
  font-family: Exo !important;
  font-weight: 800 !important;
  font-size: 55px !important;
  color: ${(p) => p.theme.palette.secondary.main};
  text-align: center;
`

export const Subtitle = styled(Typography)`
  font-family: Exo !important;
  font-weight: 500 !important;
  font-size: 38px !important;
  color: ${(p) => p.theme.palette.info.dark};
  text-align: center;
`

export const TitleWrapper = styled.div``

export const AvatarWrapper = styled(Grid)`
  width: ${AVATAR_SIZE}px !important;
  height: ${AVATAR_SIZE}px !important;
`

export const Avatar = styled.div`
  width: 80%;
  height: 80%;
  background-image: url('${(p: { src: string }) => p.src}');
  background-size: cover;
  background-position: center center;
  border-radius: 100%;
  box-sizing: border-box;
  border: 5px solid ${(p) => p.theme.palette.secondary.main};
  box-shadow: 0 0 0 11px ${(p) => p.theme.palette.primary.main},
    0 0 0 14px ${(p) => rgba(p.theme.palette.secondary.main, 0.35)},
    0 0 0 20px ${(p) => p.theme.palette.primary.main},
    0 0 0 22px ${(p) => rgba(p.theme.palette.secondary.main, 0.15)};
`

export default ({ palette, spacing, breakpoints }: Theme) =>
  createStyles({
    avatar: {
      width: '80%',
      boxSizing: 'border-box',
      height: '80%',
      border: `5px solid ${palette.secondary.main}`,
      boxShadow: `0 0 0 11px ${palette.primary.main},
    0 0 0 14px ${rgba(palette.secondary.main, 0.35)},
    0 0 0 20px ${palette.primary.main},
    0 0 0 22px ${rgba(palette.secondary.main, 0.15)};`,
    },
  })
