import React from 'react'
import { Redirect } from 'react-router-dom'
import { LoginPage } from './auth'
import { UsersPage } from './users'

export const routes = [
  ['/', true, () => <Redirect to={{ pathname: '/users' }} />, true],
  ['/users', true, UsersPage],
  ['/log-in', false, LoginPage],
]
