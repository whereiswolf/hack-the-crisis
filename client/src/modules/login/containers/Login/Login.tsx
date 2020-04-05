import React from 'react'
import { useTranslation } from 'react-i18next'
import { Grid, Typography } from '@material-ui/core'
import { Background, Overlay, RegistrationFormWrapper } from './Login.style'
import RegistrationForm from './RegistrationForm'

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const { t } = useTranslation()
  return (
    <Grid container style={{ height: '100%' }}>
      <Background item md={8}>
        <Overlay>
          <Typography color="textPrimary" variant="h2">
            You can help - more than you <em>think</em>
          </Typography>
        </Overlay>
      </Background>
      <RegistrationFormWrapper item md={4}>
        <RegistrationForm />
      </RegistrationFormWrapper>
    </Grid>
  )
}

export default Login
