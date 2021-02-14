import { observer } from 'mobx-react'
import React from 'react'
import { Router, Stylesheet } from './components'

export const App: React.FC = observer(() => {
  return (
    <>
      <Stylesheet />
      <Router />
    </>
  )
})

export default App
