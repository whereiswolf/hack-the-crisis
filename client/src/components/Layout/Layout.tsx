import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Grid, Button, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import strings from 'strings'

export interface NavItem {
  label: string
  path: string
}

interface LayoutProps {
  items: NavItem[]
}

const Layout: React.FC<LayoutProps> = ({ items, children }) => {
  const { t } = useTranslation()
  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              <Typography>Place for Logo</Typography>
            </Grid>
            <Grid item>
              {items.map(({ label, path }) => (
                <Button to={path} component={Link}>
                  {t(label)}
                </Button>
              ))}
            </Grid>
            <Grid item>
              <Button>EN</Button>
              <Button>{t(strings.LOGIN)}</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {children}
    </>
  )
}

export default Layout
