import styled from 'styled-components'
import { generateMotionButtonAttributes } from './common'
import { DarkButton } from './dark-button'

export const LightButton = styled(DarkButton).attrs(
  ({ children, isLoading, disabled, ...props }) =>
    generateMotionButtonAttributes({
      children,
      disabled,
      isLoading,
      props,
    }),
)`
  background: var(--light-foreground);
  border-color: var(--border-color);
  color: var(--color);
`
