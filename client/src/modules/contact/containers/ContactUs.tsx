import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Card } from 'components'
import config from 'config'

interface ContactUsProps {}

const contacts = [
  {
    imageUrl:
      'https://ca.slack-edge.com/T010G79FD17-U01110DPTEC-g574c2fe3255-512',
    name: 'Tomasz Rozmus',
    id: 'U01110DPTEC',
  },
  {
    imageUrl:
      'https://ca.slack-edge.com/T010G79FD17-U010SEJ9DSP-gee073dba012-512',
    name: 'Marcin Rzepiel',
    id: 'U010SEJ9DSP',
  },
  {
    imageUrl:
      'https://ca.slack-edge.com/T010G79FD17-U010N7CFZLJ-ga3fd851457c-512',
    name: 'Wojtek Bębenek',
    id: 'U010QUW2WV7',
  },
  {
    imageUrl:
      'https://ca.slack-edge.com/T010G79FD17-U010PFRBPH9-g455451b7c53-512',
    name: 'Adrian Mróz',
    id: 'U010PFRBPH9',
  },
  {
    imageUrl:
      'https://ca.slack-edge.com/T010G79FD17-U010N7EMMQS-g513d86de225-512',
    name: 'Bartek Gładys',
    id: 'U010N7EMMQS',
  },
  {
    imageUrl:
      'https://ca.slack-edge.com/T010G79FD17-U0110FLNNRJ-g26b291dbdb7-512',
    name: 'Michał Wilk',
    id: 'U0110FLNNRJ',
  },
]

const ContactUs: React.FC<ContactUsProps> = () => (
  <Grid
    container
    spacing={4}
    style={{ padding: '32px 100px' }}
    justify="center"
    direction="column"
  >
    <Grid item>
      <Typography align="center" color="textPrimary" variant="h2">
        Contact us
      </Typography>
    </Grid>
    <Grid item container spacing={4} justify="center" alignItems="center">
      {contacts.map((contact) => (
        <Card
          data={contact as any}
          onClick={() =>
            window.open(`${config.SLACK_ADDRESS}/${contact.id}`, '_blank')
          }
        >
          <Typography variant="h6" color="textPrimary">
            {contact.name}
          </Typography>
        </Card>
      ))}
    </Grid>
  </Grid>
)

export default ContactUs
