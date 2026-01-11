import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import KayInput from './Input'
import '@testing-library/jest-dom'

describe('KayInput', () => {
  it('renders with default props', () => {
    render(<KayInput placeholder="Enter text..." />)
    const input = screen.getByPlaceholderText('Enter text...')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
  })

  it('renders as outlined by default', () => {
    render(<KayInput placeholder="Outlined" />)
    const input = screen.getByPlaceholderText('Outlined')
    expect(input).toHaveStyle('border: 1px solid')
  })

  it('renders different variants', () => {
    const { rerender } = render(<KayInput placeholder="Filled" variant="filled" />)
    let input = screen.getByPlaceholderText('Filled')
    expect(input).toHaveStyle('background-color: rgba(0, 0, 0, 0.04)')

    rerender(<KayInput placeholder="Standard" variant="standard" />)
    input = screen.getByPlaceholderText('Standard')
    expect(input).toHaveStyle('border: none')
    expect(input).toHaveStyle('border-bottom: 1px solid')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(<KayInput placeholder="Small" size="small" />)
    let input = screen.getByPlaceholderText('Small')
    expect(input).toHaveStyle('padding: 8px 12px')

    rerender(<KayInput placeholder="Large" size="large" />)
    input = screen.getByPlaceholderText('Large')
    expect(input).toHaveStyle('padding: 12px 16px')
  })

  it('renders with label', () => {
    render(<KayInput label="Username" placeholder="Enter username" />)
    expect(screen.getByText('Username')).toBeInTheDocument()
    expect(screen.getByText('Username *')).not.toBeInTheDocument()
  })

  it('shows required indicator when required', () => {
    render(<KayInput label="Email" required />)
    expect(screen.getByText('Email *')).toBeInTheDocument()
  })

  it('renders helper text', () => {
    render(<KayInput helperText="Helper text" />)
    expect(screen.getByText('Helper text')).toBeInTheDocument()
  })

  it('shows error state', () => {
    render(<KayInput error helperText="Error message" />)
    const helperText = screen.getByText('Error message')
    expect(helperText).toHaveStyle('color: rgb(211, 47, 47)')
  })

  it('is disabled when disabled prop is true', () => {
    render(<KayInput disabled placeholder="Disabled" />)
    const input = screen.getByPlaceholderText('Disabled')
    expect(input).toBeDisabled()
    expect(input).toHaveStyle('color: rgba(0, 0, 0, 0.38)')
  })

  it('is read-only when readOnly prop is true', () => {
    render(<KayInput readOnly value="Read only" />)
    const input = screen.getByDisplayValue('Read only')
    expect(input).toHaveAttribute('readonly')
  })

  it('handles input changes', () => {
    const handleChange = jest.fn()
    render(<KayInput onChange={handleChange} />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'test' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('handles focus and blur events', () => {
    const handleFocus = jest.fn()
    const handleBlur = jest.fn()
    render(<KayInput onFocus={handleFocus} onBlur={handleBlur} />)
    const input = screen.getByRole('textbox')

    fireEvent.focus(input)
    expect(handleFocus).toHaveBeenCalledTimes(1)

    fireEvent.blur(input)
    expect(handleBlur).toHaveBeenCalledTimes(1)
  })

  it('renders with start and end adornments', () => {
    render(
      <KayInput
        startAdornment={<span data-testid="start">S</span>}
        endAdornment={<span data-testid="end">E</span>}
      />
    )
    expect(screen.getByTestId('start')).toBeInTheDocument()
    expect(screen.getByTestId('end')).toBeInTheDocument()
  })

  it('renders as full width when fullWidth prop is true', () => {
    render(<KayInput fullWidth />)
    const container = screen.getByRole('textbox').parentElement
    expect(container).toHaveStyle('width: 100%')
  })

  it('renders different input types', () => {
    const { rerender } = render(<KayInput type="email" />)
    let input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'email')

    rerender(<KayInput type="password" />)
    input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'password')
  })

  it('renders as different HTML elements using component prop', () => {
    const { rerender } = render(
      <KayInput component="textarea" rows={4} />
    )
    let element = screen.getByRole('textbox')
    expect(element.tagName).toBe('TEXTAREA')

    rerender(
      <KayInput component="div" contentEditable />
    )
    element = screen.getByRole('textbox')
    expect(element.tagName).toBe('DIV')
  })

  it('applies custom sx styles', () => {
    render(
      <KayInput sx={{ backgroundColor: 'lightblue', padding: '20px' }} />
    )
    const container = screen.getByRole('textbox').parentElement?.parentElement
    expect(container).toHaveStyle('background-color: lightblue')
    expect(container).toHaveStyle('padding: 20px')
  })

  it('generates unique id when not provided', () => {
    render(<KayInput label="Test" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('id')
    expect(input.id).toMatch(/^kay-input-/)
  })

  it('uses provided id when available', () => {
    render(<KayInput id="custom-id" label="Test" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('id', 'custom-id')
    expect(screen.getByLabelText('Test')).toHaveAttribute('for', 'custom-id')
  })
})