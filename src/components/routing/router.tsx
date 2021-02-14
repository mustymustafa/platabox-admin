import React from 'react'
import { Route, Router as ROUTER, Switch } from 'react-router-dom'
import { routes } from '../../pages'
import { appHistory } from '../../util'

const appRoutes = routes.map(([path, requiresAuth, component, exact]) => {
  return (
    <Route
      key={component.name}
      path={path}
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
