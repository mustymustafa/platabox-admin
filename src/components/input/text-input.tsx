import { HTMLMotionProps, motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.label`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  user-select: none;

  .required-marker {
    color: red;
    padding-left: 0.5rem;
  }
`

const Input = styled(motion.input)`
  height: 3rem;
  width: 100%;
  border-radius: 0.125rem;
  border: 1px solid #d5d9de;
  padding: 1rem;
  color: #66758a;
  transition: color 0.2s ease;
  user-select: text;

  :active,
  :focus {
    border-width: 2px;
    border-color: var(--color);
    color: var(--color);
    scale: 1.025;

    ::placeholder {
      color: var(--color);
    }
  }

  ::placeholder {
    color: #cad4de;
    letter-spacing: unset;
  }
`

interface Props {
  name: string
  label: string
  required?: boolean
  placeholder: string
  type: HTMLMotionProps<'input'>['type']
  extras?: HTMLMotionProps<'input'>
}

export const TextInput: React.FC<Props> = ({
  name,
  label,
  required,
  placeholder,
  type,
  extras,
}) => {
  return (
    <Wrapper>
      <span>
        {label}
        {required && <span className="required-marker">*</span>}
      </span>
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        whileHover={{
          scale: 1.025,
          // borderColor: 'var(--color)',
        }}
        {...extras}
      />
    </Wrapper>
  )
}
