import React from 'react'
import styled from 'styled-components'
import { Sidebar } from './sidebar'

const Wrapper = styled.div`
  display: flex;
  background: white;
  width: 100%;
  height: 100%;

  .page__body__header {
    font-size: 70%;
    margin-bottom: 2rem;
    user-select: none;
    color: #777;
  }

  .page__body {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    flex: 1;
  }

  .page__body__main {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
`

interface Props {
  title: string
}

export const Page: React.FC<Props> = ({ title, children }) => {
  React.useEffect(() => {
    document.title = title
  }, [title])

  return (
    <Wrapper>
      <Sidebar />
      <main className="page__body">
        <header className="page__body__header">
          <span>/ {title}</span>
        </header>
        <main className="page__body__main">{children}</main>
      </main>
    </Wrapper>
  )
}
