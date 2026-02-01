# Quick Start Guide

## Installation

```bash
cd docs
npm install
```

## Development

Start dev server:
```bash
npm run dev
```

Visit: http://localhost:3000

## Testing

### Run All Tests
```bash
# Unit + Integration tests
npm test

# With coverage report
npm run test:coverage

# Interactive test UI
npm run test:ui
```

### Run E2E Tests
```bash
# Start dev server in one terminal
npm run dev

# In another terminal, run E2E tests
npm run test:e2e

# Or run E2E with UI
npm run test:e2e:ui

# View test report
npm run test:e2e:report
```

### Run Everything
```bash
npm run test:all
```

## Quality Checks

```bash
# TypeScript type checking
npm run type-check

# ESLint
npm run lint
```

## Build

```bash
# Create production build
npm run build

# Output will be in out/ directory
```

## Project Status

- Build: ✓ Working
- Tests: ✓ 97/97 passing
- Coverage: ✓ 93.86%
- TypeScript: ✓ No errors
- Components: ✓ 7/7 complete

## File Locations

- **Main page**: `app/page.tsx`
- **Components**: `components/*.tsx`
- **Tests**: `__tests__/**/*.test.tsx`
- **Styles**: `app/globals.css`
- **Build output**: `out/`

## Common Tasks

### Update CTA Link
Edit `components/Hero.tsx` and `components/FinalCTA.tsx`:
```typescript
ctaLink = "YOUR_TALLY_URL_HERE"
```

### Change Colors
Edit `tailwind.config.ts` and `app/globals.css`

### Add New Component
1. Create `components/YourComponent.tsx`
2. Create `__tests__/unit/YourComponent.test.tsx`
3. Import in `app/page.tsx`
4. Run tests: `npm test`

### View Coverage Report
```bash
npm run test:coverage
# Then open coverage/index.html in browser
```

## Deployment

### Static Export
```bash
npm run build
# Deploy out/ directory to any static host
```

### GitHub Pages
```bash
npm run build
# Commit out/ directory
# Enable GitHub Pages from repo settings
```

### Vercel
```bash
# Connect GitHub repo to Vercel
# Auto-deployment on push
```

## Need Help?

- See `README.md` for comprehensive guide
- See `PROJECT_SUMMARY.md` for full project details
- Check test files for component usage examples
