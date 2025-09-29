# @dehlwes/icons

A modern, high-quality icon package with stroke-based, scalable SVG icons and the dehlwes brand assets.

## Design Philosophy

**@dehlwes/icons** follows modern UI icon standards with:

- **Outline-style** (stroke-based) icons for flexible theming
- **2px stroke weight** for optimal clarity at all sizes
- **24×24 grid system** with ~20×20 active drawing area
- **Round caps and joins** for a friendly, accessible appearance
- **Consistent visual language** across all icons and brand assets

## Installation

```bash
npm install @dehlwes/icons
```

## Usage

### Basic Import

```jsx
import { Home, DehlwesLogo, DehlwesWordmark } from '@dehlwes/icons';

function App() {
  return (
    <div>
      <Home size={24} />
      <DehlwesLogo size={32} />
      <DehlwesWordmark size={120} />
    </div>
  );
}
```

### Tree-shaking Support

Import only the icons you need:

```jsx
import { Home } from '@dehlwes/icons';
// Only Home icon is bundled
```

## Available Icons

### UI Icons

- **`Home`** - Clean house outline with centered roof and door

### Brand Assets

- **`DehlwesWordmark`** - Primary brand wordmark in lowercase
- **`DehlwesLogo`** - Compact 'd' monogram for avatars/favicons

## Props

All icons accept these common props:

```typescript
interface IconProps {
  size?: number | string;  // Default: 24 (Home/Logo) or 120 (Wordmark)
  className?: string;      // CSS classes
  title?: string;          // Accessibility title
}
```

## Design Guidelines

### Grid System

- **Canvas:** 24×24px
- **Active Area:** ~20×20px (10% margin from edges)
- **Stroke Width:** 2px consistent
- **Line Caps:** Round
- **Line Joins:** Round

### Sizing Recommendations

| Use Case | Size | Example |
|----------|------|---------|
| Small UI controls | 16px | Buttons, form elements |
| Standard UI | 20-24px | Navigation, toolbars |
| Large UI | 32px+ | Headers, focal points |
| Wordmark | 100-150px | Branding, logos |

### Color & Theming

Icons inherit the current text color (`currentColor`):

```css
.icon-primary { color: #3b82f6; }
.icon-secondary { color: #6b7280; }
.dark .icon { color: #f9fafb; }
```

### Accessibility

- All icons include semantic `title` elements
- Use `aria-label` for meaningful icons
- Hide decorative icons: `aria-hidden="true"`

```jsx
{/* Meaningful icon */}
<Home title="Go to homepage" />

{/* Decorative icon */}
<DehlwesLogo aria-hidden="true" />
```

### Clearspace

**Wordmark:** Maintain minimum clearspace equal to the x-height around the wordmark.

**Logomark:** Maintain minimum 4px clearspace around the logo at 24px size (scale proportionally).

## Design Specs

### Home Icon Blueprint

- House outline with gabled roof
- Roof peak centered, ~40-45° angle
- Optional door rectangle
- No interior details under 2px
- Maintains clarity at 16px minimum

### Brand Asset Specifications

**Wordmark:**
- Lowercase "dehlwes" in geometric sans-serif style
- Consistent 2px stroke weight
- Aspect ratio: ~4:1 (width:height)

**Logo:**
- Simplified 'd' monogram
- Circle + vertical stem construction
- Same 2px stroke as icon system
- Perfect square aspect ratio

## Examples

### Navigation

```jsx
<nav>
  <DehlwesLogo size={28} />
  <ul>
    <li><Home size={20} /> Dashboard</li>
  </ul>
</nav>
```

### Theme Integration

```jsx
// With Tailwind CSS
<Home className="w-6 h-6 text-blue-600" />

// With styled-components
const StyledIcon = styled(Home)`
  color: ${props => props.theme.primary};
  transition: color 0.2s ease;
`;
```

### Responsive Branding

```jsx
// Mobile: compact logo
<DehlwesLogo size={24} className="md:hidden" />

// Desktop: full wordmark  
<DehlwesWordmark size={120} className="hidden md:block" />
```

## License

MIT

## Contributing

Icons should follow the established design system:
- 2px stroke weight
- Round caps/joins
- 24×24 grid with 10% margin
- Minimal details for scalability
- Consistent visual language

For new icons or modifications, please ensure they pass the "squint test" at 16px size and maintain optical balance within the grid system.