import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Hero } from '@/components/Hero';

describe('Hero Component', () => {
  it('renders with default props', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders custom title correctly', () => {
    const customTitle = "Test Title";
    render(<Hero title={customTitle} />);
    expect(screen.getByText(customTitle)).toBeInTheDocument();
  });

  it('renders custom subtitle correctly', () => {
    const customSubtitle = "Test Subtitle";
    render(<Hero subtitle={customSubtitle} />);
    expect(screen.getByText(customSubtitle)).toBeInTheDocument();
  });

  it('renders CTA button with correct text', () => {
    const ctaText = "Click Here";
    render(<Hero ctaText={ctaText} />);
    const link = screen.getByRole('link', { name: ctaText });
    expect(link).toBeInTheDocument();
  });

  it('CTA button has correct href', () => {
    const ctaLink = "/test-link";
    render(<Hero ctaLink={ctaLink} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', ctaLink);
  });

  it('displays trust badge with default text', () => {
    render(<Hero />);
    expect(screen.getByText(/store owners have used/i)).toBeInTheDocument();
  });

  it('displays custom trust badge text', () => {
    const customBadge = "10,000 users";
    render(<Hero trustBadgeText={customBadge} />);
    expect(screen.getByText(customBadge)).toBeInTheDocument();
  });

  it('renders hero image with correct alt text', () => {
    render(<Hero />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt');
    expect(image.getAttribute('alt')).toContain('GenAI Prompt');
  });

  it('has correct section attributes', () => {
    render(<Hero />);
    const section = screen.getByRole('region', { name: /hero/i });
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('data-testid', 'hero-section');
  });

  it('applies hero gradient class', () => {
    render(<Hero />);
    const section = screen.getByTestId('hero-section');
    expect(section).toHaveClass('hero-gradient');
  });
});
