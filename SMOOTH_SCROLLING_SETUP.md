# Smooth Scrolling Implementation

This document explains the smooth scrolling features implemented in the Vibha Farm to Global website.

## Features Implemented

### 1. Custom Professional Scrollbar
- **Location**: `src/index.css`
- **Features**:
  - Matches website theme colors (forest green and gold)
  - Gradient scrollbar thumb with hover effects
  - Smooth transitions and animations
  - Cross-browser compatibility (WebKit and Firefox)
  - Professional appearance with rounded corners

### 2. Scroll Progress Indicator
- **Component**: `src/components/ScrollProgress.tsx`
- **Features**:
  - Shows reading progress at the top of the page
  - Gradient bar using theme colors
  - Smooth animations with Framer Motion
  - Automatically included in the main App component

### 3. Scroll to Top Button
- **Component**: `src/components/ScrollToTop.tsx`
- **Features**:
  - Appears when user scrolls down 300px
  - Smooth animations with Framer Motion
  - Gradient background matching theme
  - Hover effects and bounce animation
  - Automatically included in the main App component

### 4. Smooth Scroll Hook
- **Location**: `src/hooks/useSmoothScroll.ts`
- **Features**:
  - `scrollToElement(elementId, offset)` - Scroll to specific element
  - `scrollToTop()` - Scroll to top of page
  - `scrollToBottom()` - Scroll to bottom of page
  - `scrollToPosition(position)` - Scroll to specific position

### 5. Smooth Scroll Anchor Component
- **Component**: `src/components/SmoothScrollAnchor.tsx`
- **Features**:
  - Reusable component for internal page navigation
  - Hover and tap animations
  - Configurable offset for header compensation
  - Prevents default anchor behavior

## Usage Examples

### Using the Smooth Scroll Hook

```tsx
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const MyComponent = () => {
  const { scrollToElement, scrollToTop } = useSmoothScroll();

  const handleScrollToSection = () => {
    scrollToElement('about-section', 80); // 80px offset for header
  };

  return (
    <div>
      <button onClick={handleScrollToSection}>
        Go to About Section
      </button>
      <button onClick={scrollToTop}>
        Back to Top
      </button>
    </div>
  );
};
```

### Using the Smooth Scroll Anchor Component

```tsx
import SmoothScrollAnchor from '@/components/SmoothScrollAnchor';

const MyComponent = () => {
  return (
    <div>
      <SmoothScrollAnchor 
        targetId="products-section" 
        className="btn btn-primary"
        offset={80}
      >
        View Products
      </SmoothScrollAnchor>
      
      <section id="products-section">
        {/* Your content here */}
      </section>
    </div>
  );
};
```

### Adding Section IDs for Navigation

```tsx
const HomePage = () => {
  return (
    <div>
      <section id="hero-section">
        {/* Hero content */}
      </section>
      
      <section id="about-section">
        {/* About content */}
      </section>
      
      <section id="products-section">
        {/* Products content */}
      </section>
      
      <section id="contact-section">
        {/* Contact content */}
      </section>
    </div>
  );
};
```

## Customization

### Scrollbar Colors
To customize scrollbar colors, modify the CSS variables in `src/index.css`:

```css
::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-hover)));
  /* Your custom colors here */
}
```

### Scroll Progress Indicator
To customize the progress indicator, modify `src/components/ScrollProgress.tsx`:

```tsx
<motion.div
  className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-[60] origin-left"
  // Customize colors, height, or position here
/>
```

### Scroll to Top Button
To customize the scroll to top button, modify `src/components/ScrollToTop.tsx`:

```tsx
<motion.button
  className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-primary to-primary-hover text-white rounded-full"
  // Customize position, colors, or size here
/>
```

## Browser Compatibility

- ✅ Chrome/Edge (WebKit scrollbar)
- ✅ Firefox (CSS scrollbar-width and scrollbar-color)
- ✅ Safari (WebKit scrollbar)
- ✅ Mobile browsers (native scrollbar)

## Performance Notes

- Smooth scrolling is implemented using CSS `scroll-behavior: smooth`
- Framer Motion animations are optimized for performance
- Scroll event listeners are properly cleaned up
- Components use React.memo where appropriate for optimization

## Dependencies

- `framer-motion` - For smooth animations
- `lucide-react` - For icons (ChevronUp)
- React hooks (useState, useEffect, useCallback)

## Installation

The smooth scrolling features are already integrated into the project. No additional installation steps are required.
