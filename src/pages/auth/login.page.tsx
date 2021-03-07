import { Formik } from 'formik'
import React from 'react'
import { TextInput } from '../../components'
import { DarkButton } from '../../components/buttons'
import { LogInModel } from '../../models/request/auth'
import { authStore } from '../../stores'
import { validateModel } from '../../util'
import { AuthFormWrapper } from './components'

export const LoginPage: React.FC = () => {
  const [error, setError] = React.useState('')

  return (
    <div
      className="d-flex align-items-center justify-content-center h-100"
      style={{
        background: 'url(/images/background.jpg)',
        backgroundSize: 'cover',
      }}
    >
      <Formik
        validate={validateModel}
        enableReinitialize
        initialValues={new LogInModel()}
        onSubmit={(login, { setSubmitting, setErrors }) => {
          setSubmitting(true)
          setError('')

          authStore.logIn(login, {
            done(response) {
              setSubmitting(false)
              setError(response.message)
            },
          })
        }}
      >
        {({ handleSubmit, isValid, isSubmitting }) => (
          <AuthFormWrapper handleSubmit={handleSubmit}>
            <header>
              <span className="heading">Log In</span>
              <span className="tagline">Welcome back!</span>
              <span>{error}</span>
            </header>
            <main>
              <TextInput
                name="email"
                label="E-mail"
                required
                placeholder="E-mail address"
                type="email"
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
                type="password"
              />
            </main>
            <footer>
              <DarkButton
                type="submit"
                isLoading={isSubmitting}
                disabled={!isValid}
              >
                <span>Enter &gt;</span>
              </DarkButton>
            </footer>
          </AuthFormWrapper>
        )}
      </Formik>
    </div>
  )
}

export default LoginPage
