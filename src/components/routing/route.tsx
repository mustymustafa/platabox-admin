import { observer } from 'mobx-react'
import React from 'react'
import {
  Redirect,
  Route as ReactRouterRoute,
  RouteProps,
} from 'react-router-dom'
import { authStore } from '../../stores'

interface Props extends RouteProps {
  requiresAuth?: boolean
}

export const Route: React.FC<Props> = observer(({ requiresAuth, ...props }) => {
  const loggedIn = authStore.loggedIn

  if (requiresAuth && !loggedIn) {
    return <Redirect to={{ pathname: '/log-in' }} />
  }

  if (!requiresAuth && loggedIn) {
    return <Redirect to={{ pathname: '/' }} />
  }

  return <ReactRouterRoute {...props} />
})
