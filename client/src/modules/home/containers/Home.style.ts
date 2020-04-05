import { Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import styled from 'styled-components'
import background from './background.png'

export const Title = styled(Typography)`
  em {
    font-style: normal;
    color: ${(p) => p.theme.palette.secondary.main};
  }
`

export const SubTitle = styled(Typography)`
  margin-top: 60px;
`

export const CardListWrapper = styled.div`
  padding: 20px 15px 0px 0px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`

export const Image = styled.img`
  width: 1200px;
  height: 760px;
`

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    left: {
      padding: 100,
      position: 'relative',
      '&::before': {
        backgroundImage: `url(${background})`,
        content: `''`,
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -4,
        opacity: 0.2,
      },
    },
    right: {
      overflowX: 'hidden',
      paddingLeft: 100,
      paddingTop: 10,
    },
    bestVouchersText: {
      marginTop: 60,
    },
  })
)
