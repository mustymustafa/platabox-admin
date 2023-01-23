import React from 'react'
import { Redirect } from 'react-router-dom'
import { LoginPage } from './auth'
import { DeliveriesPage } from './deliveries'
import { LogisticsPage } from './logistics'
import { NotificationsPage } from './notifications'
import { UsersPage } from './users'

export type RouterRoute = [
  string /* path */,
  boolean /* requires authentication? */,
  React.FC /* component */,
  boolean? /* exact path? */,
]

export const routes: RouterRoute[] = [
  //remove auth for demo purpose
  ['/', true, () => <Redirect to={{ pathname: '/users' }} />, true],
  ['/delivery-requests', false, DeliveriesPage],
  ['/log-in', false, LoginPage],
  ['/logistics', false, LogisticsPage],
  ['/notifications', false, NotificationsPage],
  ['/users', false, UsersPage],
]
