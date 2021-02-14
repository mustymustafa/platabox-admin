import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  max-width: 800px;
  width: 100%;
  background: red;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(1rem);

  .form {
    padding: 4rem 3rem;
    max-width: 420px;
    width: 100%;

    > header {
      text-align: center;
      padding-bottom: 1rem;
      margin-bottom: 2rem;
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
      margin-bottom: 2rem;
    }

    > footer {
      display: flex;
      justify-content: center;
    }
  }
`

export const AuthFormWrapper: React.FC = ({ children }) => {
  return (
    <Wrapper className="d-flex align-items-center justify-content-center">
      <form className="form">{children}</form>
    </Wrapper>
  )
}
