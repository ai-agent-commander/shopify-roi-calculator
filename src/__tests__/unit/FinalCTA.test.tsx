import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FinalCTA } from '@/components/FinalCTA';

describe('FinalCTA Component', () => {
  it('renders with default props', () => {
    render(<FinalCTA />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('renders custom title', () => {
    const customTitle = "Test CTA Title";
    render(<FinalCTA title={customTitle} />);
    expect(screen.getByText(customTitle)).toBeInTheDocument();
  });

  it('renders default title', () => {
    render(<FinalCTA />);
    expect(screen.getByText(/Ready to stop wasting money/i)).toBeInTheDocument();
  });

  it('renders CTA button with correct text', () => {
    const ctaText = "Click Here Now";
    render(<FinalCTA ctaText={ctaText} />);
    const link = screen.getByRole('link', { name: ctaText });
    expect(link).toBeInTheDocument();
  });

  it('CTA button has correct href', () => {
    const ctaLink = "/custom-link";
    render(<FinalCTA ctaLink={ctaLink} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', ctaLink);
  });

  it('renders default CTA button text', () => {
    render(<FinalCTA />);
    expect(screen.getByText('Get My Free ROI Report')).toBeInTheDocument();
  });

  it('renders subtext', () => {
    render(<FinalCTA />);
    expect(screen.getByText(/No credit card required/i)).toBeInTheDocument();
  });

  it('renders custom subtext', () => {
    const customSubtext = "Custom subtext here";
    render(<FinalCTA subtext={customSubtext} />);
    expect(screen.getByText(customSubtext)).toBeInTheDocument();
  });

  it('has correct section role', () => {
    render(<FinalCTA />);
    const section = screen.getByRole('region', { name: /call to action/i });
    expect(section).toBeInTheDocument();
  });

  it('has gradient background class', () => {
    const { container } = render(<FinalCTA />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-gradient-to-r');
  });
});
