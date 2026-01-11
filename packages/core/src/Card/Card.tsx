import React, { forwardRef, ElementType, ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import { SxProps, Theme } from '@mui/material/styles'
import { Paper, PaperProps } from '@mui/material/Paper'

// Define the base card props interface
export interface KayCardBaseProps<T extends ElementType = 'div'> {
  /**
   * The content of the card
   */
  children?: ReactNode

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
   * The elevation of the card
   */
  elevation?: number

  /**
   * If true, the card will be raised
   */
  raised?: boolean

  /**
   * The variant of the card
   */
  variant?: 'elevation' | 'outlined'

  /**
   * The header content of the card
   */
  header?: ReactNode

  /**
   * The footer content of the card
   */
  footer?: ReactNode

  /**
   * The actions to display at the bottom of the card
   */
  actions?: ReactNode

  /**
   * If true, the card will have a hover effect
   */
  hoverable?: boolean

  /**
   * If true, the card will be clickable
   */
  clickable?: boolean

  /**
   * Callback fired when the card is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void

  /**
   * If true, the card will be disabled
   */
  disabled?: boolean

  /**
   * The background color of the card
   */
  backgroundColor?: string

  /**
   * The border radius of the card
   */
  borderRadius?: string | number

  /**
   * The padding of the card content
   */
  padding?: string | number

  /**
   * The gap between card sections
   */
  gap?: string | number
}

// Define the polymorphic component props
export type KayCardProps<T extends ElementType = 'div'> = KayCardBaseProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof KayCardBaseProps<T>> & {
    component?: T
  }

// The actual card component with polymorphic support
const KayCardRoot = forwardRef(function KayCardRoot<T extends ElementType = 'div'>(
  props: KayCardProps<T>,
  ref: React.ForwardedRef<HTMLElement>
) {
  const {
    children,
    component = 'div',
    elevation = 1,
    raised = false,
    variant = 'elevation',
    header,
    footer,
    actions,
    hoverable = false,
    clickable = false,
    onClick,
    disabled = false,
    backgroundColor,
    borderRadius = '8px',
    padding = '16px',
    gap = '16px',
    sx,
    ...otherProps
  } = props

  const Component = component

  const effectiveElevation = raised ? elevation + 8 : elevation

  return (
    <Paper
      ref={ref}
      component={Component}
      elevation={variant === 'elevation' ? effectiveElevation : 0}
      variant={variant}
      onClick={disabled ? undefined : onClick}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: backgroundColor || 'background.paper',
        borderRadius,
        padding,
        display: 'flex',
        flexDirection: 'column',
        gap,
        transition: 'transform 0.3s, box-shadow 0.3s',
        ...(hoverable && !disabled && {
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: variant === 'elevation' ? effectiveElevation + 4 : '0 4px 20px rgba(0, 0, 0, 0.1)'
          }
        }),
        ...(clickable && !disabled && {
          cursor: 'pointer',
          '&:active': {
            transform: 'translateY(0)'
          }
        }),
        ...(disabled && {
          opacity: 0.6,
          pointerEvents: 'none'
        }),
        ...sx
      }}
      {...otherProps}
    >
      {header && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: gap,
            borderBottom: variant === 'outlined' ? '1px solid rgba(0, 0, 0, 0.12)' : 'none'
          }}
        >
          {header}
        </div>
      )}

      <div style={{ flex: 1 }}>{children}</div>

      {(actions || footer) && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: gap,
            marginTop: 'auto',
            borderTop: variant === 'outlined' ? '1px solid rgba(0, 0, 0, 0.12)' : 'none'
          }}
        >
          {actions && (
            <div style={{ display: 'flex', gap: '8px' }}>
              {actions}
            </div>
          )}
          {footer && <div>{footer}</div>}
        </div>
      )}
    </Paper>
  )
})

// Styled version using MUI's styled utility
const StyledKayCard = styled(KayCardRoot)(({ theme, variant }) => ({
  // Variant specific styles
  ...(variant === 'outlined' && {
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      borderColor: theme.palette.primary.main
    }
  })
}))

// Main Card component with MUI integration
const KayCard = forwardRef(function KayCard<T extends ElementType = 'div'>(
  props: KayCardProps<T>,
  ref: React.ForwardedRef<HTMLElement>
) {
  return <StyledKayCard {...props} ref={ref} />
}) as <T extends ElementType = 'div'>(
  props: KayCardProps<T> & { ref?: React.ForwardedRef<HTMLElement> }
) => React.ReactElement

// Add display name for debugging
KayCard.displayName = 'KayCard'

// Export the card with proper typing
export default KayCard