import React, { forwardRef, ElementType, ReactNode } from 'react'
import { useTextField } from '@mui/base/useTextField'
import { styled } from '@mui/material/styles'
import { SxProps, Theme } from '@mui/material/styles'
import { InputBaseProps } from '@mui/material/InputBase'

// Define the base input props interface
export interface KayInputBaseProps<T extends ElementType = 'input'> {
  /**
   * The value of the input element
   */
  value?: unknown

  /**
   * The default value. Use when the component is not controlled
   */
  defaultValue?: unknown

  /**
   * The component used for the root node
   * Either a string to use a HTML element or a component
   */
  component?: T

  /**
   * System prop that allows defining system overrides as well as additional CSS styles
   */
  sx?: SxProps<Theme>

  /**
   * If true, the input will be disabled
   */
  disabled?: boolean

  /**
   * If true, the input will be read-only
   */
  readOnly?: boolean

  /**
   * If true, the input will be required
   */
  required?: boolean

  /**
   * The size of the input
   */
  size?: 'small' | 'medium' | 'large'

  /**
   * The variant to use
   */
  variant?: 'outlined' | 'filled' | 'standard'

  /**
   * The label content
   */
  label?: ReactNode

  /**
   * The placeholder text
   */
  placeholder?: string

  /**
   * The type of the input
   */
  type?: string

  /**
   * The error state
   */
  error?: boolean

  /**
   * The helper text
   */
  helperText?: ReactNode

  /**
   * The start adornment
   */
  startAdornment?: ReactNode

  /**
   * The end adornment
   */
  endAdornment?: ReactNode

  /**
   * If true, the input will take up the full width of its container
   */
  fullWidth?: boolean

  /**
   * The name attribute of the input element
   */
  name?: string

  /**
   * The id attribute of the input element
   */
  id?: string

  /**
   * Callback fired when the value is changed
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void

  /**
   * Callback fired when the input is blurred
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void

  /**
   * Callback fired when the input is focused
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void

  /**
   * The input ref
   */
  inputRef?: React.Ref<HTMLInputElement>
}

// Define the polymorphic component props
export type KayInputProps<T extends ElementType = 'input'> = KayInputBaseProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof KayInputBaseProps<T>> & {
    component?: T
  }

// The actual input component with polymorphic support
const KayInputRoot = forwardRef(function KayInputRoot<T extends ElementType = 'input'>(
  props: KayInputProps<T>,
  ref: React.ForwardedRef<HTMLElement>
) {
  const {
    component = 'input',
    disabled = false,
    readOnly = false,
    required = false,
    size = 'medium',
    variant = 'outlined',
    label,
    placeholder,
    type = 'text',
    error = false,
    helperText,
    startAdornment,
    endAdornment,
    fullWidth = false,
    name,
    id,
    onChange,
    onBlur,
    onFocus,
    inputRef,
    sx,
    value,
    defaultValue,
    ...otherProps
  } = props

  // Generate unique ID if not provided
  const inputId = id || `kay-input-${Math.random().toString(36).substr(2, 9)}`

  // Use MUI Base useTextField hook for accessibility and keyboard handling
  const { getRootProps, getInputProps, focused } = useTextField({
    ...otherProps,
    disabled,
    readOnly,
    required,
    name,
    id: inputId,
    onChange,
    onBlur,
    onFocus,
    value,
    defaultValue,
    type
  })

  const Component = component

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        width: fullWidth ? '100%' : 'auto',
        ...(sx as React.CSSProperties)
      }}
    >
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontSize: '0.875rem',
            fontWeight: 500,
            color: error ? '#d32f2f' : 'rgba(0, 0, 0, 0.87)',
            display: 'block'
          }}
        >
          {label}{required && ' *'}
        </label>
      )}

      <div
        {...getRootProps()}
        style={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          width: '100%',
          ...getRootProps().style
        }}
      >
        {startAdornment && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '12px',
              color: disabled ? 'rgba(0, 0, 0, 0.38)' : 'rgba(0, 0, 0, 0.54)'
            }}
          >
            {startAdornment}
          </div>
        )}

        <Component
          {...getInputProps()}
          ref={inputRef}
          style={{
            flex: 1,
            padding: size === 'small' ? '8px 12px' : size === 'large' ? '12px 16px' : '10px 14px',
            fontSize: size === 'small' ? '0.875rem' : size === 'large' ? '1rem' : '0.9375rem',
            border: variant === 'outlined' ? '1px solid' : 'none',
            borderColor: error
              ? '#d32f2f'
              : focused
              ? '#1976d2'
              : 'rgba(0, 0, 0, 0.23)',
            borderRadius: '4px',
            backgroundColor: variant === 'filled' ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
            color: disabled ? 'rgba(0, 0, 0, 0.38)' : 'rgba(0, 0, 0, 0.87)',
            outline: 'none',
            width: '100%',
            transition: 'border-color 0.3s, box-shadow 0.3s',
            boxShadow: focused ? '0 0 0 2px rgba(25, 118, 210, 0.2)' : 'none',
            ...(startAdornment ? { paddingLeft: '0' } : {}),
            ...(endAdornment ? { paddingRight: '0' } : {}),
            ...getInputProps().style
          }}
        />

        {endAdornment && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingRight: '12px',
              color: disabled ? 'rgba(0, 0, 0, 0.38)' : 'rgba(0, 0, 0, 0.54)'
            }}
          >
            {endAdornment}
          </div>
        )}
      </div>

      {helperText && (
        <div
          style={{
            fontSize: '0.75rem',
            color: error ? '#d32f2f' : 'rgba(0, 0, 0, 0.6)',
            marginTop: '4px'
          }}
        >
          {helperText}
        </div>
      )}
    </div>
  )
})

// Styled version using MUI's styled utility
const StyledKayInput = styled(KayInputRoot)(({ theme, variant, error }) => ({
  // Variant specific styles
  ...(variant === 'outlined' && {
    '& input': {
      border: `1px solid ${error ? theme.palette.error.main : theme.palette.grey[400]}`,
      '&:hover:not(:disabled)': {
        borderColor: error ? theme.palette.error.main : theme.palette.grey[600]
      },
      '&:focus-within': {
        borderColor: error ? theme.palette.error.main : theme.palette.primary.main,
        borderWidth: '2px',
        padding: 'calc(10px - 1px) calc(14px - 1px)'
      }
    }
  }),

  ...(variant === 'filled' && {
    '& input': {
      backgroundColor: theme.palette.grey[100],
      '&:hover:not(:disabled)': {
        backgroundColor: theme.palette.grey[200]
      },
      '&:focus-within': {
        backgroundColor: theme.palette.grey[100],
        border: `2px solid ${error ? theme.palette.error.main : theme.palette.primary.main}`
      }
    }
  }),

  ...(variant === 'standard' && {
    '& input': {
      border: 'none',
      borderBottom: `1px solid ${error ? theme.palette.error.main : theme.palette.grey[400]}`,
      borderRadius: 0,
      padding: '4px 0',
      '&:hover:not(:disabled)': {
        borderBottomColor: error ? theme.palette.error.main : theme.palette.grey[600]
      },
      '&:focus-within': {
        borderBottom: `2px solid ${error ? theme.palette.error.main : theme.palette.primary.main}`
      }
    }
  })
}))

// Main Input component with MUI integration
const KayInput = forwardRef(function KayInput<T extends ElementType = 'input'>(
  props: KayInputProps<T>,
  ref: React.ForwardedRef<HTMLElement>
) {
  return <StyledKayInput {...props} ref={ref} />
}) as <T extends ElementType = 'input'>(
  props: KayInputProps<T> & { ref?: React.ForwardedRef<HTMLElement> }
) => React.ReactElement

// Add display name for debugging
KayInput.displayName = 'KayInput'

// Export the input with proper typing
export default KayInput