# Accessibility Improvements for Nexmar Solutions

This document outlines accessibility enhancements to make nexmarsolutions.com WCAG 2.1 AA compliant.

## Issues Found

### 1. Missing Skip Link
- **Issue**: No skip-to-content link for keyboard users
- **WCAG**: 2.4.1 Bypass Blocks
- **Fix**: Add a skip link in the header

### 2. Keyboard Focus States Missing
- **Issue**: Buttons and links lack visible `:focus` outlines
- **WCAG**: 2.4.7 Focus Visible
- **Fix**: Add focus ring styles to all interactive elements

### 3. Color Contrast
- **Issue**: `.muted` text (#a8bcc0) may have insufficient contrast on dark background
- **WCAG**: 1.4.3 Contrast (Minimum)
- **Fix**: Ensure text colors meet 4.5:1 for normal text

### 4. Semantic HTML
- **Issue**: Contact buttons use `<a href="mailto:...">` instead of semantic form
- **WCAG**: 1.3.1 Info and Relationships
- **Fix**: Consider adding form structure for contact

### 5. Scroll Behavior
- **Issue**: Smooth scroll may disorient users with vestibular disorders
- **WCAG**: 2.3.3 Animation from Interactions
- **Fix**: Respect `prefers-reduced-motion`

### 6. Animated Decorations
- **Issue**: Floating shapes and drift animations could cause motion sickness
- **WCAG**: 2.3.2 Animation from Motion
- **Fix**: Disable animations for users with `prefers-reduced-motion`

## Recommended Changes

### A. Add Skip Link (HTML)
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

### B. Improve Focus States (CSS)
```css
:focus-visible {
    outline: 2px solid var(--teal);
    outline-offset: 2px;
}
```

### C. Enhance Contrast
- Current `.muted` color: `#a8bcc0` (contrast ~4.2:1)
- Recommended: `#96b0b5` or darker (contrast 4.5:1+)

### D. Reduce Motion (CSS already partial)
The `@media (prefers-reduced-motion: reduce)` media query exists but may need expansion to cover all animations.

## Testing Checklist

- [ ] Run through keyboard navigation (Tab, Shift+Tab, Enter)
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Check contrast ratios with WCAG Color Contrast Checker
- [ ] Verify focus indicators visible on all interactive elements
- [ ] Test on mobile with accessibility features enabled
- [ ] Lighthouse Accessibility audit (target: 90+)

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Deque axe DevTools](https://www.deque.com/axe/devtools/)
