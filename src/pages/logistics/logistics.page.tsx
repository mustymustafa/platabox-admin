import { observer } from 'mobx-react'
import React from 'react'
import { Cell } from 'react-table'
import styled from 'styled-components'
import { BasicTable, Page } from '../../components'
import { Logistics } from '../../models'
import { logisticsStore } from '../../stores'

const LogoContainer = styled.div<{ img: string }>`
  height: 5rem;
  width: 5rem;
  position: relative;
  word-wrap: break-word;
  font-size: 65%;
  color: white;
  background: linear-gradient(#267bff, #2c81af);
  padding: 0.5rem;

  ::before {
    width: 100%;
    height: 100%;
    display: block;
    content: '';
    background: url(${(props) => props.img});
    background-size: cover;
    background-position: center;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.125);
    position: absolute;
    top: 0%;
    left: 0;
  }
`

export const LogisticsPage: React.FC = observer(() => {
  React.useEffect(() => {
    logisticsStore.listLogistics()
  }, [])

  return (
    <Page title="Logistics">
      <BasicTable
        columns={[
          {
            Header: 'Logo',
            Cell: ({ row: { original: logistics } }: Cell<Logistics>) => {
              return (
                <LogoContainer img={logistics.pic}>
                  <span>Image for {logistics.name}</span>
                </LogoContainer>
              )
            },
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Phone',
            accessor: 'phone',
          },
          {
            Header: 'Completed Rides',
            accessor: 'completed',
          },
        ]}
        data={logisticsStore.logistics}
      />
    </Page>
  )
})

export default LogisticsPage
