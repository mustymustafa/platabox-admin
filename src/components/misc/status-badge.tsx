import { capitalize } from 'lodash'
import React from 'react'
import styled from 'styled-components'
import { DeliveryStatus } from '../../util/constants'

const Wrapper = styled.label`
  display: inline-flex;
  width: 6rem;
  height: 2rem;
  background: black;
  color: white;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`

interface Props {
  status: DeliveryStatus
}

const colorMap = {
  [DeliveryStatus.Accepted]: '4375e4',
  [DeliveryStatus.Canceled]: 'ff8319',
  [DeliveryStatus.Completed]: '5ecc5e',
  [DeliveryStatus.Rejected]: 'f44336',
}

export const StatusBadge: React.FC<Props> = ({ status }) => {
  return (
    <Wrapper style={{ background: '#' + colorMap[status] }}>
      <span>{capitalize(status)}</span>
    </Wrapper>
  )
}
