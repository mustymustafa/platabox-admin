import { observer } from 'mobx-react'
import React from 'react'
import { BasicTable, Page, StatusBadge } from '../../components'
import { Delivery } from '../../models'
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
            Header: 'Status',
            accessor: ({ status }: Delivery) => <StatusBadge status={status} />,
          },
          {
            Header: 'Requested By',
            accessor: ({ hirer, hirer_phone }: Delivery) =>
              hirer ? (
                <span>
                  {hirer} <br />
                  <b>{hirer_phone}</b>
                </span>
              ) : (
                'N/A'
              ),
          },
        ]}
        data={deliveriesStore.deliveries}
      />
    </Page>
  )
})

export default DeliveriesPage
