import { Typography, Button as BaseButton } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Button } from 'components'
import { colors } from 'config'
import styled from 'styled-components'
import TextInput from 'components/TextInput'

export const GreyText = styled(Typography)`
  color: ${colors.primary[50]};
`
export const SquareButton = styled(BaseButton)`
  background-color: ${colors.primary[55]} !important;
  width: 42px;
  height: 42px;
  min-width: 0 !important;
  padding: 0 !important;
  > span {
    padding: 0 !important;
    font-size: 24px !important;
  }
`

export const RemoveButtonContainer = styled(Grid)`
  > button > span {
    color: #fe3f59 !important;
  }
`

export const PriceContainer = styled(Grid)`
  margin-top: -25px !important;
  margin-bottom: 25px !important;
`

export const VouchersNumberContainer = styled(Grid)`
  margin-top: 15px !important;
  margin-bottom: 15px !important;
  > div:nth-child(2) {
    border-radius: 5px;
    padding: 2px;
    background-color: ${colors.primary[55]} !important;
  }
`

export const BonusInput = styled(TextInput)`
  width: 100px !important;
  margin-right: 20px !important;
  * {
    color: ${colors.black} !important;
  }
  > div {
    font-weight: 800;
    background: ${colors.text[50]};
  }
  input {
    padding: 12px !important;
  }
`

export const RestrictedButton = styled(Button)`
  max-height: 50px;
`

export const BackBusinessContainer = styled(Grid)`
  margin-top: 30px !important;
`
export const OtherBusinessContainer = styled(Grid)`
  margin-top: 10px !important;
  margin-bottom: 10px !important;
`
export const MarginBottomContainer = styled(Grid)`
  margin-bottom: 20px !important;
`

export const FullHeightContainer = styled(Grid)`
  height: 100%;
`

export const BuyVouchersContainer = styled(Grid)`
  h6 {
    margin-top: 5px !important;
  }
`

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      background: '#000',
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    orderConfig: {
      textAlign: 'center',
      background: theme.palette.primary.main,
    },
    orderInfo: {
      height: '400px',
    },
    orderBusiness: {
      flex: '1 1 auto',
      background: '#161616',
    },
    orderImg: {
      height: '340px',
      width: '340px',
    },
  })
)
