# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Shopify ROI Calculator - A production-ready landing page built with Next.js 14, TypeScript, TailwindCSS, and Shadcn/UI. The page helps Shopify store owners calculate ROI and make informed decisions about app purchases.

## Project Location

All project files are in the `/docs` directory:
- Source code: `/docs/app`, `/docs/components`, `/docs/lib`
- Tests: `/docs/__tests__`
- Build output: `/docs/out`

## Commands

All commands must be run from the `/docs` directory:

```bash
cd docs

# Development
npm install          # Install dependencies
npm run dev         # Start dev server (http://localhost:3000)

# Testing
npm test            # Run unit + integration tests
npm run test:coverage   # Run tests with coverage report
npm run test:ui     # Run tests with interactive UI
npm run test:e2e    # Run E2E tests (requires dev server)
npm run test:all    # Run all tests

# Build
npm run build       # Build static site to out/

# Quality checks
npm run type-check  # TypeScript validation
npm run lint        # ESLint
```

## Architecture

### Tech Stack
- **Next.js 14**: App Router with static export (`output: 'export'`)
- **TypeScript**: Strict mode enabled, no `any` types
- **TailwindCSS**: Utility-first styling with custom theme
- **Shadcn/UI**: Component library (Button, Card, Badge, Accordion)
- **Vitest**: Unit and integration testing
- **Playwright**: E2E testing across browsers

### Component Structure

All components are in `/docs/components/`:

```
components/
├── ui/                    # Shadcn UI primitives
│   ├── button.tsx
│   ├── card.tsx
│   ├── badge.tsx
│   └── accordion.tsx
├── Hero.tsx              # Hero section with gradient, CTA
├── SocialProof.tsx       # Testimonial cards
├── Benefits.tsx          # 4 benefit cards in grid
├── HowItWorks.tsx        # 3-step process
├── FAQ.tsx               # Accordion with FAQs
├── FinalCTA.tsx          # Bottom CTA section
└── Footer.tsx            # Footer with links
```

Main page: `/docs/app/page.tsx` - Composes all sections

### Testing Strategy

- **Unit tests**: Test components in isolation (`__tests__/unit/`)
- **Integration tests**: Test component interactions (`__tests__/integration/`)
- **E2E tests**: Test complete user flows across browsers (`__tests__/e2e/`)
- **Coverage target**: 80%+ overall, 100% on core utilities
- **Current coverage**: 97.62%

### Utilities

`/docs/lib/utils.ts` contains:
- `cn()`: Tailwind className merger (clsx + tailwind-merge)
- `formatCurrency()`: USD formatter
- `calculateROI()`: ROI percentage calculator
- `formatPercentage()`: Percentage formatter

## Development Guidelines

### Making Changes

1. **Always run from `/docs` directory**
2. **Read existing component before editing** - Check test files for usage patterns
3. **Write tests for new features** - Maintain 80%+ coverage
4. **Follow TypeScript strict mode** - No `any` types
5. **Use existing Shadcn components** - Don't create custom UI primitives
6. **Mobile-first responsive** - Test at 375px, 768px, 1024px

### Component Patterns

All components follow this structure:
```typescript
// 1. Imports (grouped: React, third-party, local)
import React from 'react';
import { Button } from '@/components/ui/button';

// 2. Type definitions
interface ComponentProps {
  title: string;
}

// 3. Component
export function Component({ title }: ComponentProps) {
  return <div>{title}</div>;
}
```

### Adding New Components

1. Create component: `components/NewComponent.tsx`
2. Create test: `__tests__/unit/NewComponent.test.tsx`
3. Write implementation with TypeScript types
4. Write comprehensive tests (80%+ coverage)
5. Run `npm test` to verify
6. Import in `app/page.tsx` if needed

### Modifying Existing Components

1. Read component file first
2. Read corresponding test file
3. Make changes
4. Update tests if needed
5. Run `npm run test:coverage` to ensure coverage maintained
6. Run `npm run type-check` and `npm run lint`

## Static Export Configuration

The project is configured for static export to GitHub Pages:
- `next.config.js`: `output: 'export'`
- Images: `unoptimized: true` (required for static export)
- Build output: `out/` directory
- No server-side features (API routes, ISR, etc.)

## Customization Points

### Update CTA Links
Replace `#calculator` placeholder in:
- `/docs/components/Hero.tsx` (line ~30)
- `/docs/components/FinalCTA.tsx` (line ~26)

### Replace Images
All images use placeholder URLs with GenAI prompts in alt text:
- Hero image: `/docs/components/Hero.tsx`
- Testimonial avatars: `/docs/components/SocialProof.tsx`

### Customize Colors
- Theme colors: `/docs/tailwind.config.ts`
- Gradients: `/docs/app/globals.css`

## Testing Notes

- All tests must pass before committing
- E2E tests require dev server to be running
- Coverage report: `open coverage/index.html` after `npm run test:coverage`
- Visual regression tests configured in Playwright

## Common Issues

### "Cannot find module '@/...'"
Solution: Ensure you're in `/docs` directory and run `npm install`

### Tests failing after component changes
Solution: Update corresponding test file in `__tests__/unit/`

### Build errors
Solution: Run `npm run type-check` first to identify TypeScript issues

### E2E tests not running
Solution: Install browsers with `npx playwright install`

## Documentation

- **README.md**: Comprehensive usage guide
- **PROJECT_SUMMARY.md**: Architecture and delivery details
- **QUICK_START.md**: Quick reference commands
- **DEPLOYMENT_READY.md**: Deployment checklist

## Deployment

Build static site: `npm run build`
Output location: `/docs/out/`
Deploy `out/` directory to any static host (GitHub Pages, Vercel, Netlify, etc.)
