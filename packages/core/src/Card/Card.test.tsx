import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import KayCard from './Card'
import '@testing-library/jest-dom'

describe('KayCard', () => {
  it('renders with default props', () => {
    render(<KayCard>Card Content</KayCard>)
    expect(screen.getByText('Card Content')).toBeInTheDocument()
  })

  it('renders as elevation variant by default', () => {
    render(<KayCard>Elevation Card</KayCard>)
    const card = screen.getByText('Elevation Card').parentElement
    expect(card).toHaveClass('MuiPaper-elevation1')
  })

  it('renders different variants', () => {
    const { rerender } = render(<KayCard variant="elevation">Elevation</KayCard>)
    let card = screen.getByText('Elevation').parentElement
    expect(card).toHaveClass('MuiPaper-elevation1')

    rerender(<KayCard variant="outlined">Outlined</KayCard>)
    card = screen.getByText('Outlined').parentElement
    expect(card).toHaveClass('MuiPaper-outlined')
  })

  it('applies different elevation levels', () => {
    render(<KayCard elevation={3}>Elevation 3</KayCard>)
    const card = screen.getByText('Elevation 3').parentElement
    expect(card).toHaveClass('MuiPaper-elevation3')
  })

  it('increases elevation when raised', () => {
    render(<KayCard elevation={1} raised>Raised Card</KayCard>)
    const card = screen.getByText('Raised Card').parentElement
    expect(card).toHaveClass('MuiPaper-elevation9') // 1 + 8 = 9
  })

  it('renders header, footer, and actions', () => {
    render(
      <KayCard
        header={<div data-testid="header">Header</div>}
        footer={<div data-testid="footer">Footer</div>}
        actions={<button data-testid="action">Action</button>}
      >
        Content
      </KayCard>
    )
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.getByTestId('action')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('has hover effect when hoverable', () => {
    render(<KayCard hoverable>Hoverable Card</KayCard>)
    const card = screen.getByText('Hoverable Card').parentElement
    expect(card).toHaveStyle('transition: transform 0.3s, box-shadow 0.3s')
  })

  it('is clickable when clickable prop is true', () => {
    const handleClick = jest.fn()
    render(<KayCard clickable onClick={handleClick}>Clickable Card</KayCard>)
    const card = screen.getByText('Clickable Card').parentElement
    expect(card).toHaveStyle('cursor: pointer')

    if (card) {
      fireEvent.click(card)
      expect(handleClick).toHaveBeenCalledTimes(1)
    }
  })

  it('is disabled when disabled prop is true', () => {
    render(<KayCard disabled>Disabled Card</KayCard>)
    const card = screen.getByText('Disabled Card').parentElement
    expect(card).toHaveStyle('opacity: 0.6')
    expect(card).toHaveStyle('pointer-events: none')
  })

  it('applies custom background color', () => {
    render(<KayCard backgroundColor="#f5f5f5">Custom Background</KayCard>)
    const card = screen.getByText('Custom Background').parentElement
    expect(card).toHaveStyle('background-color: #f5f5f5')
  })

  it('applies custom border radius', () => {
    render(<KayCard borderRadius="16px">Rounded Card</KayCard>)
    const card = screen.getByText('Rounded Card').parentElement
    expect(card).toHaveStyle('border-radius: 16px')
  })

  it('applies custom padding', () => {
    render(<KayCard padding="24px">Padded Card</KayCard>)
    const card = screen.getByText('Padded Card').parentElement
    expect(card).toHaveStyle('padding: 24px')
  })

  it('applies custom gap', () => {
    render(
      <KayCard gap="32px">
        <div>Item 1</div>
        <div>Item 2</div>
      </KayCard>
    )
    const card = screen.getByText('Item 1').parentElement
    expect(card).toHaveStyle('gap: 32px')
  })

  it('applies custom sx styles', () => {
    render(
      <KayCard sx={{ border: '2px solid red', margin: '20px' }}>
        Custom Styles
      </KayCard>
    )
    const card = screen.getByText('Custom Styles').parentElement
    expect(card).toHaveStyle('border: 2px solid red')
    expect(card).toHaveStyle('margin: 20px')
  })

  it('renders as different HTML elements using component prop', () => {
    const { rerender } = render(
      <KayCard component="a" href="https://example.com">
        Link Card
      </KayCard>
    )
    let element = screen.getByText('Link Card').parentElement
    expect(element?.tagName).toBe('A')

    rerender(
      <KayCard component="button">Button Card</KayCard>
    )
    element = screen.getByText('Button Card').parentElement
    expect(element?.tagName).toBe('BUTTON')
  })

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn()
    render(
      <KayCard disabled clickable onClick={handleClick}>
        Disabled Clickable Card
      </KayCard>
    )
    const card = screen.getByText('Disabled Clickable Card').parentElement
    if (card) {
      fireEvent.click(card)
      expect(handleClick).not.toHaveBeenCalled()
    }
  })

  it('renders outlined variant with border', () => {
    render(<KayCard variant="outlined">Outlined</KayCard>)
    const card = screen.getByText('Outlined').parentElement
    expect(card).toHaveStyle('border: 1px solid')
  })

  it('has proper flex layout structure', () => {
    render(
      <KayCard header="Header" footer="Footer">
        Content
      </KayCard>
    )
    const card = screen.getByText('Content').parentElement
    expect(card).toHaveStyle('display: flex')
    expect(card).toHaveStyle('flex-direction: column')
  })
})