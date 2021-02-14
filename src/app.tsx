import React from 'react'
import { Router, Stylesheet } from './components'
import { usersStore } from './stores'

export const App: React.FC = () => {
  React.useEffect(() => {
    usersStore.listUsers()
  }, [])

  return (
    <>
      <Stylesheet />
      <Router />
    </>
  )
}

export default App
