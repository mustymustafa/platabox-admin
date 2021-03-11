import { ForwardRefComponent, HTMLMotionProps, motion } from 'framer-motion'
import styled from 'styled-components'
import { generateMotionButtonAttributes } from './common'

type Button = ForwardRefComponent<
  HTMLButtonElement,
  HTMLMotionProps<'button'> & { isLoading?: boolean }
>

export const DarkButton = styled<Button>(motion.button).attrs(
  ({ children, disabled, isLoading, ...props }) =>
    generateMotionButtonAttributes({
      children,
      disabled,
      isLoading,
      props,
    }),
)`
  background: var(--dark-background);
  height: 3rem;
  border: 1px solid var(--dark-background);
  border-radius: 0.25rem;
  color: var(--light-foreground);
  font-weight: bold;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.035);

  :disabled {
    background: #f5f5f5 !important;
    backdrop-filter: blur(0.25rem);
    color: #616161 !important;
  }

  .icon {
    height: 1rem;
    width: 1rem;
    stroke-width: 3px;
    stroke-linecap: square;
  }

  .icon + * {
    margin-left: 0.5rem;
  }
`
