import { observer } from 'mobx-react'
import React from 'react'
import { BasicTable, Page } from '../../components'
import { deliveriesStore } from '../../stores'

export const DeliveriesPage: React.FC = observer(() => {
  React.useEffect(() => {
    deliveriesStore.listDeliveries()
  }, [])

  return (
    <Page title="Deliveries">
      <BasicTable
        columns={[
          {
            Header: 'Artisan Name',
            accessor: 'artisan_name',
          },
          {
            Header: 'From',
            accessor: 'from',
          },
          {
            Header: 'To',
            accessor: 'to',
          },
          {
            Header: 'Requested By',
            accessor: 'user',
          },
        ]}
        data={deliveriesStore.deliveries}
      />
    </Page>
  )
})

export default DeliveriesPage
