import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppBar, Grid, Button, Typography, Toolbar } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import strings from 'strings'
import { Content } from './Layout.style'

export interface NavItem {
  label: string
  path: string
}

interface LayoutProps {
  items: NavItem[]
}

const Layout: React.FC<LayoutProps> = ({ items, children }) => {
  const { t, i18n } = useTranslation()
  const { pathname } = useLocation()
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
                <Button key={path} to={path} component={Link}>
                  <Typography
                    variant="button"
                    color={path === pathname ? 'secondary' : 'inherit'}
                  >
                    {t(label)}
                  </Typography>
                </Button>
              ))}
            </Grid>
            <Grid item>
              <Button>{i18n.language}</Button>
              <Button>{t(strings.LOGIN)}</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Content>{children}</Content>
    </>
  )
}

export default Layout
