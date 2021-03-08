import React from 'react'
import { Redirect } from 'react-router-dom'
import { LoginPage } from './auth'
import { DeliveriesPage } from './deliveries'
import { LogisticsPage } from './logistics'
import { UsersPage } from './users'

export type RouterRoute = [
  string /* path */,
  boolean /* requires authentication? */,
  React.FC /* component */,
  boolean? /* exact path? */,
]

export const routes: RouterRoute[] = [
  ['/', true, () => <Redirect to={{ pathname: '/users' }} />, true],
  ['/delivery-requests', true, DeliveriesPage],
  ['/log-in', false, LoginPage],
  ['/logistics', true, LogisticsPage],
  ['/users', true, UsersPage],
]
