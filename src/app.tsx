import React from 'react'
import { usersStore } from './stores'

export const App: React.FC = () => {
  React.useEffect(() => {
    usersStore.listUsers()
  }, [])

  return (
    <div className="App">
      <span>Placeholder</span>
    </div>
  )
}

export default App
