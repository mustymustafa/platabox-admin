import React from 'react'
import { Router as ROUTER, Switch } from 'react-router-dom'
import { routes } from '../../pages'
import { appHistory } from '../../util'
import { Route } from './route'

const appRoutes = routes.map(([path, requiresAuth, component, exact], i) => {
  return (
    <Route
      key={i}
      path={path}
      requiresAuth={requiresAuth}
      component={component}
      exact={exact}
    />
  )
})

export const Router: React.FC = () => {
  return (
    <ROUTER history={appHistory}>
      <Switch>{appRoutes}</Switch>
    </ROUTER>
  )
}
