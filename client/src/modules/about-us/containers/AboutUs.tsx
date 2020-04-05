import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { WithAccent } from 'components'

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => (
  <Grid container style={{ height: '100%' }}>
    <Grid item md={5} style={{ padding: '56px 60px', boxSizing: 'border-box' }}>
      <Typography variant="h4" color="textPrimary">
        About us
      </Typography>
      <br />
      <Typography variant="body1" color="textSecondary">
        Pariatur nisi excepteur laboris culpa cillum ipsum enim ex laboris
        reprehenderit est pariatur irure. Nisi sit fugiat adipisicing esse irure
        sit in velit nisi elit id aliquip qui Lorem. Aute reprehenderit amet
        magna id. Consectetur fugiat cillum adipisicing aliqua reprehenderit ad
        ipsum aliqua id. Consectetur mollit minim dolore consequat velit
        reprehenderit. Id nostrud et adipisicing dolor ut qui ut sint dolor elit
        velit. Incididunt qui ad laboris consequat et nostrud reprehenderit.
        Cillum sit occaecat aliquip aliqua est consequat ex laboris aliquip anim
        consequat enim dolore proident. Nostrud officia nulla enim excepteur
        ullamco. In occaecat non mollit cillum qui ipsum excepteur velit nisi
        sunt magna sunt reprehenderit.
        <br />
        <br />
        Velit aliqua cupidatat proident eiusmod incididunt qui nisi consequat
        laborum proident. Sunt deserunt labore incididunt do aute pariatur
        fugiat labore Lorem adipisicing commodo. Esse deserunt voluptate tempor
        nulla culpa commodo tempor anim Lorem nisi ipsum. Officia ut nulla eu
        Lorem aute anim ea veniam nulla dolore. Sit in qui ullamco commodo.
        Deserunt aliquip aliqua occaecat tempor.
      </Typography>
    </Grid>
    <Grid
      item
      md={7}
      style={{
        position: 'relative',
        background:
          'url(https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 70,
      }}
    >
      <WithAccent
        color="textPrimary"
        align="right"
        variant="h2"
        style={{ zIndex: 1 }}
      >
        This is who <em>we</em> are
      </WithAccent>
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(35, 35, 35, 0.65)',
        }}
      />
    </Grid>
  </Grid>
)

export default AboutUs
