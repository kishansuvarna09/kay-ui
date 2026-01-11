import type { Meta, StoryObj } from '@storybook/react'
import KayCard from './Card'
import KayButton from '../Button/Button'
import { Favorite, Share, MoreVert } from '@mui/icons-material'

// Meta configuration for Storybook
const meta: Meta<typeof KayCard> = {
  title: 'Components/Card',
  component: KayCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['elevation', 'outlined'],
      defaultValue: 'elevation'
    },
    elevation: {
      control: { type: 'number', min: 0, max: 24 },
      defaultValue: 1
    },
    raised: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    hoverable: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    clickable: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false
    }
  }
} satisfies Meta<typeof KayCard>

export default meta

// Story types
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    children: 'This is a basic card with some content.',
    variant: 'elevation',
    elevation: 1
  }
}

// Variants story
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <KayCard variant="elevation" elevation={2}>
        <h3>Elevation Card</h3>
        <p>This card uses elevation for depth</p>
      </KayCard>
      <KayCard variant="outlined">
        <h3>Outlined Card</h3>
        <p>This card uses a border outline</p>
      </KayCard>
    </div>
  )
}

// Elevation levels story
export const ElevationLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((level) => (
        <KayCard key={level} elevation={level}>
          <p>Elevation {level}</p>
        </KayCard>
      ))}
    </div>
  )
}

// Raised cards story
export const RaisedCards: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px' }}>
      <KayCard elevation={1} raised={false}>
        <p>Normal Card</p>
      </KayCard>
      <KayCard elevation={1} raised={true}>
        <p>Raised Card</p>
      </KayCard>
    </div>
  )
}

// Card with sections story
export const WithSections: Story = {
  args: {
    header: <h2 style={{ margin: 0 }}>Card Title</h2>,
    children: (
      <div>
        <p style={{ margin: '8px 0' }}>This is the main content of the card.</p>
        <p style={{ margin: '8px 0' }}>It can contain any type of content.</p>
      </div>
    ),
    footer: <small>Footer information</small>,
    actions: (
      <>
        <KayButton size="small">Action 1</KayButton>
        <KayButton size="small" variant="outlined">
          Action 2
        </KayButton>
      </>
    )
  }
}

// Hoverable card story
export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: (
      <div>
        <h3>Hoverable Card</h3>
        <p>Hover over me to see the effect!</p>
      </div>
    )
  }
}

// Clickable card story
export const Clickable: Story = {
  args: {
    clickable: true,
    hoverable: true,
    onClick: () => alert('Card clicked!'),
    children: (
      <div>
        <h3>Clickable Card</h3>
        <p>Click me to trigger an action</p>
      </div>
    )
  }
}

// Disabled card story
export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <div>
        <h3>Disabled Card</h3>
        <p>This card is disabled and cannot be interacted with</p>
      </div>
    )
  }
}

// Custom styling story
export const CustomStyling: Story = {
  args: {
    backgroundColor: '#f5f5f5',
    borderRadius: '16px',
    padding: '24px',
    gap: '24px',
    children: (
      <div>
        <h3>Custom Styled Card</h3>
        <p>This card has custom background, border radius, and spacing</p>
      </div>
    )
  }
}

// Complex card example story
export const ComplexCard: Story = {
  render: () => (
    <KayCard
      elevation={3}
      hoverable
      header={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <h2 style={{ margin: 0 }}>Featured Content</h2>
          <MoreVert style={{ cursor: 'pointer' }} />
        </div>
      }
    >
      <div>
        <img
          src="https://source.unsplash.com/random/600x300"
          alt="Featured"
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
        />
        <h3 style={{ margin: '16px 0 8px 0' }}>Card Title</h3>
        <p style={{ margin: '8px 0', color: 'rgba(0, 0, 0, 0.7)' }}>
          This is a more complex card with an image, title, description, and multiple actions.
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <KayButton size="small" startIcon={<Favorite />}>
            Like
          </KayButton>
          <KayButton size="small" startIcon={<Share />}>
            Share
          </KayButton>
        </div>
        <small style={{ color: 'rgba(0, 0, 0, 0.5)' }}>5 min read</small>
      </div>
    </KayCard>
  )
}

// Polymorphic component story
export const Polymorphic: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <KayCard component="a" href="https://example.com" clickable hoverable>
        <h3>Link Card</h3>
        <p>This card is actually a link</p>
      </KayCard>
      <KayCard component="button" clickable hoverable onClick={() => alert('Button card clicked!')}>
        <h3>Button Card</h3>
        <p>This card is actually a button</p>
      </KayCard>
    </div>
  )
}

// Responsive card layout story
export const ResponsiveLayout: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', width: '100%' }}>
      <KayCard elevation={2} hoverable>
        <h3>Card 1</h3>
        <p>Responsive card layout that adapts to screen size</p>
      </KayCard>
      <KayCard elevation={2} hoverable>
        <h3>Card 2</h3>
        <p>Multiple cards in a responsive grid</p>
      </KayCard>
      <KayCard elevation={2} hoverable>
        <h3>Card 3</h3>
        <p>Try resizing the preview to see the responsive behavior</p>
      </KayCard>
    </div>
  )
}