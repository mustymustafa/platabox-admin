import { motion } from 'framer-motion'
import React from 'react'
import { FiCheck, FiCircle, FiX } from 'react-icons/fi'
import styled from 'styled-components'

export const InputWrapper = styled.label`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  user-select: none;

  textarea {
    min-height: 6rem;
    height: 6rem;
    max-height: 8rem;
    padding: 0.75rem 1.5rem;
  }

  :focus-within .input-label {
    background: var(--color);
    color: white;
  }

  .input-label {
    transition: all 0.2s ease;
    font-size: 70%;
    display: inline-flex;
    align-items: center;
    color: #666;
    background: #d5d9de;
    border-radius: 0.25rem;
  }

  .input-label__validation-section {
    width: 1.5rem;
    height: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.6rem;
  }

  &.invalid .input-label__validation-section {
    color: red;
  }

  &.valid .input-label__validation-section {
    color: green;
  }

  .input-label__label {
    padding: 0.25rem 0.75rem;
    padding-left: 0;
  }

  .required-marker {
    color: red;
    padding-left: 0.35rem;
    transform: translateY(0.125rem);
    font-weight: bold;
  }

  .error-message {
    font-weight: 100;
    font-size: 80%;
    color: var(--color);
    padding: 0.5rem 1.5rem;
    background: rgba(213, 217, 222, 0.25);
    backdrop-filter: blur(1rem);
  }
`

export const BaseInput = styled(motion.input)`
  height: 3rem;
  width: 100%;
  border-radius: 0.25rem;
  border: 1px solid #d5d9de;
  background: white;
  padding: 0 1.5rem;
  color: #66758a;
  transition: border-color 0.2s ease;
  user-select: text;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.035);

  :active,
  :focus {
    border-color: var(--color);
    color: var(--color);
  }

  ::placeholder {
    color: #cad4de;
    letter-spacing: unset;
    font-style: italic;
  }
`

export const generateInputLabel = ({
  valid,
  invalid,
  label,
  required,
}: {
  valid: boolean
  invalid?: boolean
  label: string
  required?: boolean
}) => {
  return (
    <div>
      <span className="input-label">
        <span className="input-label__validation-section">
          {invalid && <FiX strokeWidth={3} />}
          {valid && <FiCheck strokeWidth={3} />}
          {!valid && !invalid && <FiCircle strokeWidth={3} />}
        </span>
        <span className="input-label__label">
          {label}
          {required && <span className="required-marker">*</span>}
        </span>
      </span>
    </div>
  )
}
