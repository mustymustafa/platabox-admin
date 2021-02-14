import React from 'react'
import { authStore } from '../../stores'

export const UsersPage: React.FC = () => {
  return (
    <div>
      Users Page <button onClick={() => authStore.logOut()}>Log out</button>
    </div>
  )
}

export default UsersPage
