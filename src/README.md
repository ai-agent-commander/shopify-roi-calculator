# Shopify ROI Calculator Landing Page

A modern, conversion-optimized landing page for a Shopify ROI Calculator built with Next.js 14, TypeScript, and TailwindCSS.

## Features

- Modern, clean design with purple/blue gradient hero
- Fully responsive (mobile-first approach)
- Fast loading performance (<2s target)
- Accessibility compliant (WCAG AA)
- Comprehensive test coverage (80%+ target)
- Static export ready for GitHub Pages
- Shadcn/UI components
- TypeScript strict mode

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: TailwindCSS
- **Components**: Shadcn/UI
- **Icons**: Lucide React
- **Testing**:
  - Unit/Integration: Vitest + React Testing Library
  - E2E: Playwright
- **Build**: Static export

## Project Structure

```
docs/
├── app/                        # Next.js app router
│   ├── page.tsx               # Main landing page
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Global styles
├── components/                # React components
│   ├── ui/                    # Shadcn UI components
│   ├── Hero.tsx              # Hero section
│   ├── SocialProof.tsx       # Testimonials
│   ├── Benefits.tsx          # Benefits section
│   ├── HowItWorks.tsx        # Process steps
│   ├── FAQ.tsx               # FAQ accordion
│   ├── FinalCTA.tsx          # Bottom CTA
│   └── Footer.tsx            # Footer
├── lib/                       # Utilities
│   └── utils.ts              # Helper functions
├── __tests__/                # Test files
│   ├── unit/                 # Unit tests
│   ├── integration/          # Integration tests
│   └── e2e/                  # E2E tests
├── public/                    # Static assets
└── out/                       # Build output (generated)
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
cd docs
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page.

### Building

Build the static site:

```bash
npm run build
```

This creates a static export in the `out/` directory.

### Testing

#### Unit and Integration Tests

Run tests:

```bash
npm test
```

Run tests with coverage:

```bash
npm run test:coverage
```

Run tests with UI:

```bash
npm run test:ui
```

#### End-to-End Tests

Run E2E tests:

```bash
npm run test:e2e
```

Run E2E tests with UI:

```bash
npm run test:e2e:ui
```

View E2E test report:

```bash
npm run test:e2e:report
```

#### All Tests

Run all tests (unit + integration + E2E):

```bash
npm run test:all
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## Landing Page Sections

1. **Hero Section**
   - Compelling headline about ROI calculation
   - Large CTA button linking to calculator
   - Trust badge (12,453+ users)
   - Hero image with placeholder

2. **Social Proof Section**
   - 3 testimonial cards with avatars
   - Real quotes from store owners
   - Business size indicators

3. **Benefits Section**
   - 4 benefit cards in 2x2 grid
   - Icons from Lucide React
   - Personalized ROI, recommendations, payback period, action plan

4. **How It Works Section**
   - 3 step process
   - Numbered badges
   - Visual flow indicators

5. **FAQ Section**
   - Shadcn Accordion component
   - 6 common questions
   - Addresses objections directly

6. **Final CTA Section**
   - Large button CTA
   - "No credit card required" subtext
   - Gradient background

7. **Footer**
   - Simple links (Privacy, Contact)
   - Copyright notice

## Placeholder Images

All images use placeholder URLs with detailed GenAI prompts in alt text for future asset generation:

- Hero image: Isometric 3D dashboard illustration
- Testimonial avatars: Professional headshots (3 variations)
- All images include comprehensive alt text for accessibility

## Performance Targets

- **Load Time**: <2 seconds on 3G
- **Lighthouse Scores**:
  - Performance: >90
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100

## Code Quality Standards

- **TypeScript**: Strict mode, no `any` types
- **Testing**: 80%+ code coverage, 100% on core utils
- **Components**: Single responsibility, modular design
- **Accessibility**: WCAG AA compliant, proper ARIA labels
- **Responsive**: Mobile-first, tested at 375px, 768px, 1024px, 1440px

## Test Coverage Summary

### Target Coverage

- Overall: 80%+ (statements, branches, functions, lines)
- Core utilities (`lib/utils.ts`): 100%
- UI components: 80%+

### Test Types

1. **Unit Tests**: Individual component testing
2. **Integration Tests**: Multi-component interactions
3. **E2E Tests**: Complete user journeys across browsers

### Browser Support (E2E)

- Desktop: Chrome, Firefox, Safari
- Mobile: Chrome (Pixel 5), Safari (iPhone 12)

## Deployment

The project is configured for static export and can be deployed to:

- **GitHub Pages**: Set `output: 'export'` in `next.config.js` (already configured)
- **Vercel**: Zero-config deployment
- **Netlify**: Drag and drop `out/` folder
- **Any static host**: Upload contents of `out/` directory

### GitHub Pages Deployment

1. Build the project: `npm run build`
2. The `out/` directory contains the static site
3. Push to GitHub and enable GitHub Pages from the `out/` directory or deploy manually

## Customization

### Update CTA Links

Replace `#calculator` with your actual Tally.so form URL in:
- `components/Hero.tsx`
- `components/FinalCTA.tsx`

### Replace Placeholder Images

Replace placeholder URLs with real images:
- Hero image: `components/Hero.tsx`
- Testimonial avatars: `components/SocialProof.tsx`

Use the GenAI prompts in alt text to generate matching images.

### Update Copy

All text content can be updated in the respective component files. Main sections:
- Hero: `components/Hero.tsx`
- Testimonials: `components/SocialProof.tsx`
- Benefits: `components/Benefits.tsx`
- Process steps: `components/HowItWorks.tsx`
- FAQs: `components/FAQ.tsx`

### Customize Colors

Update colors in `tailwind.config.ts` and `app/globals.css`:
- Primary: Purple (`--primary`)
- Gradients: Hero section uses purple to blue
- Accent colors: Defined in CSS variables

## Troubleshooting

### Tests Failing

If tests fail to run:
1. Ensure all dependencies are installed: `npm install`
2. Check Node version: `node -v` (should be 18+)
3. Clear cache: `rm -rf node_modules .next out && npm install`

### Build Errors

If build fails:
1. Run type check: `npm run type-check`
2. Run linter: `npm run lint`
3. Check for missing dependencies

### E2E Tests Not Running

If Playwright tests don't run:
1. Install browsers: `npx playwright install`
2. Check dev server is running: `npm run dev`
3. Verify port 3000 is available

## Contributing

This is a landing page template. Feel free to customize and extend as needed.

## License

See parent project LICENSE file.

## Support

For issues or questions, please open an issue in the project repository.
