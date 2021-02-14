import styled from 'styled-components'
import { generateMotionButtonAttributes } from './common'
import { DarkButton } from './dark-button'

export const PrimaryButton = styled(DarkButton).attrs(
  ({ children, isLoading, disabled, ...props }) =>
    generateMotionButtonAttributes({
      children,
      disabled,
      isLoading,
      whileHover: {
        color: '#000000',
        backgroundColor: '#032367',
      },
      props,
    }),
)`
  background: var(--primary-color);
  color: white;
`
