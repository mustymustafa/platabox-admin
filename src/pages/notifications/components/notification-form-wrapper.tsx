import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  .form {
    max-width: 420px;
    width: 100%;

    > header {
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);

      .heading {
        font-size: 200%;
        font-weight: 900;
      }

      .tagline {
        font-family: 'Space Grotesk';
        font-weight: 400;
        color: #666;
        font-size: 90%;
      }
    }

    > main {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    > footer {
      display: flex;
    }
  }
`

interface Props {
  handleSubmit: () => any
}

export const NotificationFormWrapper: React.FC<Props> = ({
  handleSubmit,
  children,
}) => {
  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form">
        {children}
      </form>
    </Wrapper>
  )
}
