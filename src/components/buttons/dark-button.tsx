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
      whileHover: {
        color: '#000000',
        backgroundColor: '#fde500',
      },
      props,
    }),
)`
  background: #000000;
  height: 3rem;
  border-radius: 0.125rem;
  color: white;
  font-weight: bold;
  border: none;
  padding: 0 2rem;
  display: flex;
  align-items: center;

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
