# Kay UI - Hybrid MUI Component Library

A scalable, type-safe UI component library built with React, TypeScript, and a hybrid MUI approach (combining Material UI styled components with Base UI headless components).

## Features

✅ **Monorepo Architecture** - Built with Turborepo for optimal performance
✅ **Hybrid MUI Approach** - Combine styled Material UI with headless Base UI
✅ **Type Safety** - Strict TypeScript with comprehensive type definitions
✅ **Polymorphic Components** - Flexible component composition
✅ **Design System** - Centralized design tokens and theming
✅ **Storybook Integration** - Interactive component development
✅ **Modern Tooling** - Vite, Vitest, React Testing Library

## Architecture

```
kay-ui/
├── apps/
│   ├── docs/                # Documentation site (TanStack Start ready)
│   └── playground/          # Component testing playground
├── packages/
│   ├── core/                # Main UI components (hybrid MUI)
│   ├── tokens/              # Design system tokens
│   ├── utils/               # Shared utilities
│   └── storybook/           # Storybook configuration
├── tooling/
│   ├── tsconfig/            # Shared TypeScript configs
│   └── scripts/             # Build scripts
└── package.json             # Root workspace
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+ (recommended)
- Turborepo CLI

### Installation

```bash
# Install dependencies
pnpm install

# Set up husky git hooks
pnpm prepare
```

### Development

```bash
# Start all dev servers
pnpm dev

# Start specific package
cd packages/core && pnpm dev

# Run Storybook
pnpm storybook
```

### Building

```bash
# Build all packages
pnpm build

# Build specific package
cd packages/core && pnpm build
```

### Testing

```bash
# Run all tests
pnpm test

# Run tests with watch mode
cd packages/core && pnpm test:watch
```

## Component Development

### Creating a New Component

1. **Create component files** in `packages/core/src/ComponentName/`:
   - `ComponentName.tsx` - Main component
   - `ComponentName.stories.tsx` - Storybook stories
   - `ComponentName.test.tsx` - Unit tests
   - `index.ts` - Exports

2. **Follow the pattern** from the Button component:
   - Use polymorphic component pattern with `forwardRef`
   - Extend native HTML attributes
   - Support MUI styling system
   - Include comprehensive TypeScript types

3. **Add to main exports** in `packages/core/src/index.ts`

### Component Structure Example

```tsx
// Button.tsx - Hybrid approach
export interface KayButtonProps<T extends ElementType = 'button'> {
  children: ReactNode
  component?: T
  variant?: 'text' | 'contained' | 'outlined'
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
  // ... other props
}

const KayButton = forwardRef(function KayButton<T extends ElementType = 'button'>(
  props: KayButtonProps<T>,
  ref: React.ForwardedRef<HTMLElement>
) {
  // Use MUI Base hooks for accessibility
  const { getRootProps } = useButton({ ...props })

  // Combine with MUI Material styling
  return <StyledComponent {...getRootProps()} ref={ref} />
})
```

## Design System

### Using Design Tokens

```typescript
import { defaultTokens, createTheme } from '@kay-ui/tokens'

// Create custom theme
const customTheme = createTheme({
  colors: {
    primary: {
      main: '#3f51b5', // Custom primary color
      ...defaultTokens.colors.primary
    }
  }
})
```

### Spacing System

```typescript
import { spacingToCss } from '@kay-ui/utils'

// Convert spacing units to CSS
const margin = spacingToCss(2) // "16px" (2 * 8px base unit)
```

## Storybook

### Running Storybook

```bash
pnpm storybook
```

### Adding Stories

```tsx
// ComponentName.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import ComponentName from './ComponentName'

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
  argTypes: {
    // Define controls for props
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // Default props
  }
}
```

## Testing

### Unit Tests

```tsx
// ComponentName.test.tsx
import { render, screen } from '@testing-library/react'
import ComponentName from './ComponentName'

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName />)
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })
})
```

### Running Tests

```bash
# Run all tests
pnpm test

# Run specific package tests
cd packages/core && pnpm test

# Run in watch mode
cd packages/core && pnpm test:watch
```

## Deployment

### Publishing Packages

```bash
# Build all packages
pnpm build

# Publish to npm (from each package directory)
cd packages/core
pnpm publish
```

## Configuration

### TypeScript

- Strict mode enabled
- ES modules
- Path aliases configured
- Shared configs in `tooling/tsconfig/`

### Vite

- Optimized for library builds
- ESM/CJS dual output
- TypeScript declaration files
- Externalized peer dependencies

### Turborepo

- Caching enabled for builds
- Parallel execution for dev servers
- Pipeline configuration in `turbo.json`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Implement your changes
4. Write tests
5. Update documentation
6. Submit a pull request

## License

MIT License - See LICENSE file for details.

## Roadmap

- [x] Core architecture setup
- [x] Button component implementation
- [x] Design token system
- [x] Storybook integration
- [x] Testing setup
- [ ] Additional components (Input, Card, Modal, etc.)
- [ ] Documentation site (TanStack Start)
- [ ] Playground app
- [ ] CI/CD pipeline
- [ ] Accessibility audits
- [ ] Performance optimization

## Support

For questions or issues, please open a GitHub issue or contact the maintainers.

---

**Built with ❤️ using Turborepo, React, TypeScript, and MUI**