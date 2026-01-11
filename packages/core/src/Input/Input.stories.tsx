import type { Meta, StoryObj } from '@storybook/react'
import KayInput from './Input'
import { Search, Email, Lock } from '@mui/icons-material'

// Meta configuration for Storybook
const meta: Meta<typeof KayInput> = {
  title: 'Components/Input',
  component: KayInput,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled', 'standard'],
      defaultValue: 'outlined'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium'
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    readOnly: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    required: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    error: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    fullWidth: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number'],
      defaultValue: 'text'
    }
  }
} satisfies Meta<typeof KayInput>

export default meta

// Story types
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    variant: 'outlined',
    size: 'medium'
  }
}

// Variants story
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <KayInput placeholder="Outlined" variant="outlined" />
      <KayInput placeholder="Filled" variant="filled" />
      <KayInput placeholder="Standard" variant="standard" />
    </div>
  )
}

// Sizes story
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <KayInput placeholder="Small" size="small" />
      <KayInput placeholder="Medium" size="medium" />
      <KayInput placeholder="Large" size="large" />
    </div>
  )
}

// With label story
export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    helperText: 'Please enter your unique username'
  }
}

// Required field story
export const Required: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    required: true,
    type: 'email'
  }
}

// Error state story
export const ErrorState: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    error: true,
    helperText: 'Password must be at least 8 characters',
    type: 'password'
  }
}

// Disabled state story
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
    value: 'Cannot edit this'
  }
}

// Read-only state story
export const ReadOnly: Story = {
  args: {
    placeholder: 'Read-only input',
    readOnly: true,
    value: 'Cannot modify this value',
    helperText: 'This field is read-only'
  }
}

// With adornments story
export const WithAdornments: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <KayInput
        placeholder="Search..."
        startAdornment={<Search fontSize="small" />}
      />
      <KayInput
        placeholder="Email"
        startAdornment={<Email fontSize="small" />}
      />
      <KayInput
        placeholder="Password"
        startAdornment={<Lock fontSize="small" />}
        type="password"
      />
      <KayInput
        placeholder="Amount"
        endAdornment={<span style={{ color: 'rgba(0, 0, 0, 0.54)' }}>USD</span>}
      />
    </div>
  )
}

// Full width story
export const FullWidth: Story = {
  args: {
    placeholder: 'Full width input',
    fullWidth: true,
    label: 'Full Width Input'
  }
}

// Different types story
export const DifferentTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <KayInput placeholder="Text input" type="text" label="Text" />
      <KayInput placeholder="Email input" type="email" label="Email" />
      <KayInput placeholder="Password input" type="password" label="Password" />
      <KayInput placeholder="Number input" type="number" label="Number" />
    </div>
  )
}

// Polymorphic component story
export const Polymorphic: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <KayInput component="textarea" placeholder="Textarea" rows={4} />
      <KayInput
        component="div"
        contentEditable
        placeholder="Editable div"
        style={{ minHeight: '100px', border: '1px solid #ccc', padding: '8px' }}
      />
    </div>
  )
}