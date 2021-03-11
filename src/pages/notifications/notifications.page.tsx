import { observer } from 'mobx-react'
import React from 'react'
import { Page } from '../../components'
import { NotificationForm } from './components'

export const NotificationsPage: React.FC = observer(() => {
  return (
    <Page title="Notifications">
      <NotificationForm />
    </Page>
  )
})

export default NotificationsPage
