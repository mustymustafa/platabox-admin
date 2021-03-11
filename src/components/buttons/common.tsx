import {
  HTMLMotionProps,
  MotionProps,
  TargetAndTransition,
} from 'framer-motion'
import React from 'react'

interface Args {
  children: React.ReactNode
  disabled?: boolean | undefined
  isLoading?: boolean
  whileHover?: TargetAndTransition
  whileTap?: TargetAndTransition
  props: HTMLMotionProps<'button'>
}

export const generateMotionButtonAttributes = ({
  children,
  disabled,
  isLoading,
  whileHover = {},
  whileTap = {},
  props,
}: Args): MotionProps => {
  const _children = (
    <React.Fragment>
      {isLoading ? (
        <div className="spinner-border spinner-border-sm" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        children
      )}
    </React.Fragment>
  )

  const motionAttributes: MotionProps = {
    whileHover: {
      scale: 1,
      y: -4,
      ...whileHover,
    },
    whileTap: {
      scale: 0.9,
      y: 2,
      ...whileTap,
    },
  }

  return {
    ...props,
    ...(disabled ? {} : motionAttributes),
    children: _children,
    disabled,
  } as HTMLMotionProps<'button'>
}
