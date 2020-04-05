import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Title, Wrapper } from './RegistrationForm.style'
import { Info, TextInput } from 'components'

interface RegistrationFormProps {}

const RegistrationForm: React.FC<RegistrationFormProps> = () => (
  <Wrapper
    container
    direction="column"
    justify="center"
    alignItems="center"
    spacing={2}
  >
    <Grid item>
      <Title align="center" color="textPrimary" variant="h5">
        Create <em>account</em>
      </Title>
      <br />
      <Typography color="textSecondary" variant="body2" align="center">
        Labore deserunt sit tempor quis occaecat incididunt veniam irure qui. Eu
        nulla ea commodo culpa ea commodo qui culpa aute. Ullamco veniam sit
        deserunt nulla irure in ut sint ad id irure laborum est in.
      </Typography>
      <br />
      <Info align="center" variant="body1">
        <b>Fill the fields below</b>
      </Info>
    </Grid>
    <Grid item>
      <TextInput name="name" placeholder="Name" />
    </Grid>
    <Grid item>
      <TextInput name="email" placeholder="Email" type="email" />
    </Grid>
    <Grid item>
      <TextInput name="password" placeholder="Password" type="password" />
    </Grid>
    <Grid item>
      <TextInput
        name="repeat-password"
        placeholder="Repeat password"
        type="password"
      />
    </Grid>
    <Grid item></Grid>
  </Wrapper>
)

export default RegistrationForm
