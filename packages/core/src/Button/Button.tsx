import React, { forwardRef, ElementType, ReactNode } from 'react'
import { useButton } from '@mui/base/useButton'
import { styled } from '@mui/material/styles'
import { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import { SxProps, Theme } from '@mui/material/styles'

// Define the base button props interface
export interface KayButtonBaseProps<T extends ElementType = 'button'> {
  /**
   * The content of the button
   */
  children: ReactNode

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
   * If true, the button will be disabled
   */
  disabled?: boolean

  /**
   * The size of the button
   */
  size?: 'small' | 'medium' | 'large'

  /**
   * The variant to use
   */
  variant?: 'text' | 'contained' | 'outlined'

  /**
   * The color of the button
   */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'

  /**
   * If true, the button will take up the full width of its container
   */
  fullWidth?: boolean

  /**
   * Element placed before the children
   */
  startIcon?: ReactNode

  /**
   * Element placed after the children
   */
  endIcon?: ReactNode
}

// Define the polymorphic component props
export type KayButtonProps<T extends ElementType = 'button'> = KayButtonBaseProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof KayButtonBaseProps<T>> & {
    component?: T
  }

// The actual button component with polymorphic support
const KayButtonRoot = forwardRef(function KayButtonRoot<T extends ElementType = 'button'>(
  props: KayButtonProps<T>,
  ref: React.ForwardedRef<HTMLElement>
) {
  const {
    children,
    component = 'button',
    disabled = false,
    size = 'medium',
    variant = 'contained',
    color = 'primary',
    fullWidth = false,
    startIcon,
    endIcon,
    sx,
    ...otherProps
  } = props

  // Use MUI Base useButton hook for accessibility and keyboard handling
  const { getRootProps } = useButton({
    disabled,
    ...otherProps
  })

  const Component = component

  return (
    <Component
      ref={ref}
      {...getRootProps()}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: size === 'small' ? '6px 12px' : size === 'large' ? '10px 20px' : '8px 16px',
        fontSize: size === 'small' ? '0.875rem' : size === 'large' ? '1.125rem' : '1rem',
        fontWeight: 500,
        borderRadius: '4px',
        border: variant === 'outlined' ? '1px solid' : 'none',
        backgroundColor: variant === 'contained' ? 'currentColor' : 'transparent',
        color: variant === 'contained' ? 'white' : 'currentColor',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        width: fullWidth ? '100%' : 'auto',
        ...(sx as React.CSSProperties)
      }}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </Component>
  )
})

// Styled version using MUI's styled utility
const StyledKayButton = styled(KayButtonRoot)(({ theme, variant, color }) => ({
  // Base styles
  transition: theme.transitions.create(['background-color', 'color', 'border-color', 'box-shadow'], {
    duration: theme.transitions.duration.short
  }),

  // Variant specific styles
  ...(variant === 'contained' && {
    backgroundColor: theme.palette[color]?.main || theme.palette.primary.main,
    color: theme.palette[color]?.contrastText || theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette[color]?.dark || theme.palette.primary.dark,
      boxShadow: theme.shadows[2]
    }
  }),

  ...(variant === 'outlined' && {
    border: `1px solid ${theme.palette[color]?.main || theme.palette.primary.main}`,
    color: theme.palette[color]?.main || theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette[color]?.light || theme.palette.primary.light,
      border: `1px solid ${theme.palette[color]?.dark || theme.palette.primary.dark}`
    }
  }),

  ...(variant === 'text' && {
    color: theme.palette[color]?.main || theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.action.hover
    }
  })
}))

// Main Button component with MUI integration
const KayButton = forwardRef(function KayButton<T extends ElementType = 'button'>(
  props: KayButtonProps<T>,
  ref: React.ForwardedRef<HTMLElement>
) {
  return <StyledKayButton {...props} ref={ref} />
}) as <T extends ElementType = 'button'>(
  props: KayButtonProps<T> & { ref?: React.ForwardedRef<HTMLElement> }
) => React.ReactElement

// Add display name for debugging
KayButton.displayName = 'KayButton'

// Export the button with proper typing
export default KayButton