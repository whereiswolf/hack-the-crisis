import React, { useState } from 'react'
import { Grid, Typography, Link } from '@material-ui/core'
import { Info, TextInput, Button } from 'components'
import CheckBox from 'components/Checkbox'
import { Title, Wrapper, InputsWrapper } from './RegistrationForm.style'
import { useHistory } from 'react-router'

interface RegistrationFormProps {}

const RegistrationForm: React.FC<RegistrationFormProps> = () => {
  const history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)
  return (
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
          Labore deserunt sit tempor quis occaecat incididunt veniam irure qui.
          Eu nulla ea commodo culpa ea commodo qui culpa aute. Ullamco veniam
          sit deserunt nulla irure in ut sint ad id irure laborum est in.
        </Typography>
        <br />
        <Info align="center" variant="body1">
          <b>Fill the fields below</b>
        </Info>
      </Grid>
      <InputsWrapper item>
        <TextInput
          name="name"
          placeholder="Name"
          value={name}
          onChange={setName as (value: React.ReactText) => void}
        />
        <TextInput
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={setEmail as (value: React.ReactText) => void}
        />
        <TextInput
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={setPassword as (value: React.ReactText) => void}
        />
        <TextInput
          name="repeat-password"
          placeholder="Repeat password"
          type="password"
          value={passwordRepeat}
          onChange={setPasswordRepeat as (value: React.ReactText) => void}
        />
        <CheckBox
          checked={termsAccepted}
          title="I accept terms and condidtions"
          onClick={() => setTermsAccepted(!termsAccepted)}
        />
      </InputsWrapper>
      <br />
      <Button
        onClick={() => history.push('/')}
        style={{ minWidth: 225 }}
        variant="contained"
      >
        Confirm
      </Button>
      <Grid item>
        <Link href="#">
          <Info variant="body2">Already have an account?</Info>
        </Link>
      </Grid>
    </Wrapper>
  )
}
export default RegistrationForm
