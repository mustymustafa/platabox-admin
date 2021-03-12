import { observer } from 'mobx-react'
import React from 'react'
import { BasicTable, Page } from '../../components'
import { usersStore } from '../../stores'

export const UsersPage: React.FC = observer(() => {
  React.useEffect(() => {
    usersStore.listUsers()
  }, [])

  return (
    <Page title="Users">
      <BasicTable
        columns={[
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'E-mail',
            accessor: 'email',
          },
          {
            Header: 'Phone',
            accessor: 'phone',
          },
          {
            Header: 'Balance',
            accessor: 'balance',
          },
        ]}
        data={usersStore.users}
      />
    </Page>
  )
})

export default UsersPage
