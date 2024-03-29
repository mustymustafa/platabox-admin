import styled from 'styled-components'
import { generateMotionButtonAttributes } from './common'
import { DarkButton } from './dark-button'

export const PrimaryButton = styled(DarkButton).attrs(
  ({ children, isLoading, disabled, ...props }) =>
    generateMotionButtonAttributes({
      children,
      disabled,
      isLoading,
      props,
    }),
)`
  background: var(--primary-color);
  border-color: #2e82c5;
  color: var(--light-foreground);
`
