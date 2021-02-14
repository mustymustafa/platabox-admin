import React from 'react'
import { TextInput } from '../../components'
import { DarkButton, PrimaryButton } from '../../components/buttons'
import { AuthFormWrapper } from './components'

export const LoginPage: React.FC = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center h-100"
      style={{
        background: 'url(/images/rodion-kutsaev-pVoEPpLw818-unsplash.jpg)',
        backgroundSize: 'cover',
      }}
    >
      <AuthFormWrapper>
        <header>
          <span className="heading">Log In</span>
          <span className="tagline">Welcome back!</span>
        </header>
        <main>
          <TextInput
            name="email"
            label="E-mail"
            required
            placeholder="E-mail address"
            type="text"
            extras={{
              autoCapitalize: 'off',
              autoCorrect: 'off',
              autoComplete: 'off',
              spellCheck: false,
            }}
          />
          <TextInput
            name="password"
            label="Password"
            required
            placeholder="Password"
            type="text"
          />
        </main>
        <footer>
          <DarkButton>
            <span>Enter &gt;</span>
          </DarkButton>
        </footer>
      </AuthFormWrapper>
    </div>
  )
}

export default LoginPage
