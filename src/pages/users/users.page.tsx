import React from 'react'
import { Page } from '../../components/layout/page'
import { authStore } from '../../stores'

export const UsersPage: React.FC = () => {
  return (
    <Page title="Users">
      Users Page <button onClick={() => authStore.logOut()}>Log out</button>
    </Page>
  )
}

export default UsersPage
