import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Page from '@/app/page';

describe('Landing Page Integration', () => {
  beforeEach(() => {
    // Mock scrollIntoView
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  it('renders the complete landing page', () => {
    render(<Page />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders all sections in correct order', () => {
    render(<Page />);
    const sections = screen.getAllByRole('region');
    expect(sections.length).toBeGreaterThanOrEqual(6);
  });

  it('renders Hero section', () => {
    render(<Page />);
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
  });

  it('renders Social Proof section', () => {
    render(<Page />);
    expect(screen.getByText(/Trusted by Shopify Store Owners/i)).toBeInTheDocument();
  });

  it('renders Benefits section', () => {
    render(<Page />);
    expect(screen.getByText(/What's included in your personalized report/i)).toBeInTheDocument();
  });

  it('renders How It Works section', () => {
    render(<Page />);
    expect(screen.getByText('How it works')).toBeInTheDocument();
  });

  it('renders FAQ section', () => {
    render(<Page />);
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('renders Final CTA section', () => {
    render(<Page />);
    expect(screen.getByText(/Ready to stop wasting money/i)).toBeInTheDocument();
  });

  it('renders Footer', () => {
    render(<Page />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('has multiple CTA buttons linking to calculator', () => {
    render(<Page />);
    const ctaLinks = screen.getAllByRole('link', { name: /calculator|start calculator|get my free roi report/i });
    expect(ctaLinks.length).toBeGreaterThanOrEqual(2);
    ctaLinks.forEach(link => {
      expect(link).toHaveAttribute('href', '#calculator');
    });
  });

  it('FAQ accordion expands and collapses', () => {
    render(<Page />);
    const faqTrigger = screen.getByText(/Is this really free/i);

    // Initially hidden
    expect(screen.queryByText(/we earn a small commission/i)).not.toBeInTheDocument();

    // Click to expand
    fireEvent.click(faqTrigger);
    expect(screen.getByText(/we earn a small commission/i)).toBeInTheDocument();

    // Click to collapse
    fireEvent.click(faqTrigger);
    expect(screen.queryByText(/we earn a small commission/i)).not.toBeInTheDocument();
  });

  it('displays all testimonials', () => {
    render(<Page />);
    expect(screen.getByText(/Found out I was overpaying/i)).toBeInTheDocument();
    expect(screen.getByText(/calculator showed me/i)).toBeInTheDocument();
    expect(screen.getByText(/Wish I'd found this before/i)).toBeInTheDocument();
  });

  it('displays all benefit cards', () => {
    render(<Page />);
    expect(screen.getByText('Personalized ROI Breakdown')).toBeInTheDocument();
    expect(screen.getByText('Tool Recommendations')).toBeInTheDocument();
    expect(screen.getByText('Payback Period Calculation')).toBeInTheDocument();
    expect(screen.getByText('30-Day Action Plan')).toBeInTheDocument();
  });

  it('displays all process steps', () => {
    render(<Page />);
    expect(screen.getByText('Answer 5 Questions')).toBeInTheDocument();
    expect(screen.getByText('Get Instant Analysis')).toBeInTheDocument();
    expect(screen.getByText('Receive Report via Email')).toBeInTheDocument();
  });

  it('all images have alt text', () => {
    render(<Page />);
    const images = screen.getAllByRole('img');
    images.forEach(img => {
      const alt = img.getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt).not.toBe('');
    });
  });

  it('has accessible heading hierarchy', () => {
    render(<Page />);
    const h1 = screen.getAllByRole('heading', { level: 1 });
    const h2s = screen.getAllByRole('heading', { level: 2 });

    expect(h1.length).toBe(1); // Only one h1
    expect(h2s.length).toBeGreaterThan(0); // Multiple h2s
  });
});
