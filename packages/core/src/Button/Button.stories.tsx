import type { Meta, StoryObj } from '@storybook/react'
import KayButton from './Button'
import { Home, Settings } from '@mui/icons-material'

// Meta configuration for Storybook
const meta: Meta<typeof KayButton> = {
  title: 'Components/Button',
  component: KayButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'contained', 'outlined'],
      defaultValue: 'contained'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium'
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
      defaultValue: 'primary'
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    fullWidth: {
      control: { type: 'boolean' },
      defaultValue: false
    }
  }
} satisfies Meta<typeof KayButton>

export default meta

// Story types
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    children: 'Click Me',
    variant: 'contained',
    size: 'medium',
    color: 'primary'
  }
}

// Contained variants story
export const ContainedVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <KayButton variant="contained" color="primary">
        Primary
      </KayButton>
      <KayButton variant="contained" color="secondary">
        Secondary
      </KayButton>
      <KayButton variant="contained" color="error">
        Error
      </KayButton>
      <KayButton variant="contained" color="warning">
        Warning
      </KayButton>
      <KayButton variant="contained" color="info">
        Info
      </KayButton>
      <KayButton variant="contained" color="success">
        Success
      </KayButton>
    </div>
  )
}

// Outlined variants story
export const OutlinedVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <KayButton variant="outlined" color="primary">
        Primary
      </KayButton>
      <KayButton variant="outlined" color="secondary">
        Secondary
      </KayButton>
      <KayButton variant="outlined" color="error">
        Error
      </KayButton>
      <KayButton variant="outlined" color="warning">
        Warning
      </KayButton>
      <KayButton variant="outlined" color="info">
        Info
      </KayButton>
      <KayButton variant="outlined" color="success">
        Success
      </KayButton>
    </div>
  )
}

// Text variants story
export const TextVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <KayButton variant="text" color="primary">
        Primary
      </KayButton>
      <KayButton variant="text" color="secondary">
        Secondary
      </KayButton>
      <KayButton variant="text" color="error">
        Error
      </KayButton>
      <KayButton variant="text" color="warning">
        Warning
      </KayButton>
      <KayButton variant="text" color="info">
        Info
      </KayButton>
      <KayButton variant="text" color="success">
        Success
      </KayButton>
    </div>
  )
}

// Sizes story
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <KayButton size="small">Small</KayButton>
      <KayButton size="medium">Medium</KayButton>
      <KayButton size="large">Large</KayButton>
    </div>
  )
}

// With icons story
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <KayButton startIcon={<Home />}>Home</KayButton>
      <KayButton endIcon={<Settings />}>Settings</KayButton>
      <KayButton startIcon={<Home />} endIcon={<Settings />}>
        Both Icons
      </KayButton>
    </div>
  )
}

// Disabled state story
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true
  }
}

// Full width story
export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true
  }
}

// Polymorphic component story
export const Polymorphic: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <KayButton component="a" href="https://example.com" target="_blank">
        Link Button
      </KayButton>
      <KayButton component="div" style={{ cursor: 'pointer' }}>
        Div Button
      </KayButton>
    </div>
  )
}