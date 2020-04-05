import React from 'react'
import { Typography } from '@material-ui/core'
import { Title } from './Description.style'

interface DescriptionProps {}

const Description = () => (
  <>
    <Title color="textPrimary" variant="h2">
      Businesses in need of <em>support</em>
    </Title>
    <br />
    <Typography color="textSecondary" variant="body1">
      Ad ad minim est mollit deserunt duis qui reprehenderit minim laborum sit.
      Ipsum mollit est quis non ex ad sit. Lorem mollit exercitation dolore
      velit velit ad ut sint irure ut excepteur ad. Qui quis nostrud ad labore.
      Adipisicing ex enim irure labore magna anim laboris amet proident quis
      sint aute. Cillum id ex cupidatat id.
    </Typography>
  </>
)

export default Description
