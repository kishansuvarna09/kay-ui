import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import KayButton from './Button'
import '@testing-library/jest-dom'

describe('KayButton', () => {
  it('renders with default props', () => {
    render(<KayButton>Click Me</KayButton>)
    const button = screen.getByText('Click Me')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('MuiButton-root')
  })

  it('renders as contained button by default', () => {
    render(<KayButton>Contained</KayButton>)
    const button = screen.getByText('Contained')
    expect(button).toHaveStyle('background-color: rgb(25, 118, 210)')
  })

  it('renders as outlined button', () => {
    render(<KayButton variant="outlined">Outlined</KayButton>)
    const button = screen.getByText('Outlined')
    expect(button).toHaveStyle('border: 1px solid rgb(25, 118, 210)')
  })

  it('renders as text button', () => {
    render(<KayButton variant="text">Text</KayButton>)
    const button = screen.getByText('Text')
    expect(button).toHaveStyle('background-color: rgba(0, 0, 0, 0)')
  })

  it('renders with different sizes', () => {
    render(
      <div>
        <KayButton size="small">Small</KayButton>
        <KayButton size="medium">Medium</KayButton>
        <KayButton size="large">Large</KayButton>
      </div>
    )

    const smallButton = screen.getByText('Small')
    const mediumButton = screen.getByText('Medium')
    const largeButton = screen.getByText('Large')

    expect(smallButton).toHaveStyle('font-size: 14px')
    expect(mediumButton).toHaveStyle('font-size: 16px')
    expect(largeButton).toHaveStyle('font-size: 18px')
  })

  it('renders with different colors', () => {
    render(
      <div>
        <KayButton color="primary">Primary</KayButton>
        <KayButton color="secondary">Secondary</KayButton>
        <KayButton color="error">Error</KayButton>
      </div>
    )

    const primaryButton = screen.getByText('Primary')
    const secondaryButton = screen.getByText('Secondary')
    const errorButton = screen.getByText('Error')

    expect(primaryButton).toHaveStyle('background-color: rgb(25, 118, 210)')
    expect(secondaryButton).toHaveStyle('background-color: rgb(220, 0, 78)')
    expect(errorButton).toHaveStyle('background-color: rgb(211, 47, 47)')
  })

  it('renders with icons', () => {
    render(
      <KayButton startIcon={<span data-testid="start-icon">S</span>} endIcon={<span data-testid="end-icon">E</span>}>
        With Icons
      </KayButton>
    )

    expect(screen.getByTestId('start-icon')).toBeInTheDocument()
    expect(screen.getByTestId('end-icon')).toBeInTheDocument()
    expect(screen.getByText('With Icons')).toBeInTheDocument()
  })

  it('renders as full width when fullWidth prop is true', () => {
    render(<KayButton fullWidth>Full Width</KayButton>)
    const button = screen.getByText('Full Width')
    expect(button).toHaveStyle('width: 100%')
  })

  it('is disabled when disabled prop is true', () => {
    render(<KayButton disabled>Disabled</KayButton>)
    const button = screen.getByText('Disabled')
    expect(button).toBeDisabled()
    expect(button).toHaveStyle('opacity: 0.5')
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<KayButton onClick={handleClick}>Clickable</KayButton>)
    const button = screen.getByText('Clickable')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders as different HTML elements using component prop', () => {
    const { rerender } = render(
      <KayButton component="a" href="https://example.com">
        Link
      </KayButton>
    )

    let element = screen.getByText('Link')
    expect(element.tagName).toBe('A')
    expect(element).toHaveAttribute('href', 'https://example.com')

    rerender(
      <KayButton component="div">Div</KayButton>
    )

    element = screen.getByText('Div')
    expect(element.tagName).toBe('DIV')
  })

  it('applies custom sx styles', () => {
    render(
      <KayButton sx={{ backgroundColor: 'purple', padding: '20px' }}>
        Custom Styles
      </KayButton>
    )

    const button = screen.getByText('Custom Styles')
    expect(button).toHaveStyle('background-color: purple')
    expect(button).toHaveStyle('padding: 20px')
  })
})