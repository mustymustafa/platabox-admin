import { observer } from 'mobx-react'
import React from 'react'
import { Page } from '../../components/layout/page'
import { BasicTable } from '../../components/tables'
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
            Header: 'Code',
            accessor: 'confirmationCode',
          },
        ]}
        data={usersStore.users}
      />
    </Page>
  )
})

export default UsersPage
