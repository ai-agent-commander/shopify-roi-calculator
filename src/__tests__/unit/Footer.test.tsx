import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from '@/components/Footer';

describe('Footer Component', () => {
  it('renders footer element', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('displays copyright text with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument();
  });

  it('displays company name in copyright', () => {
    render(<Footer />);
    expect(screen.getByText(/Shopify ROI Calculator/i)).toBeInTheDocument();
  });

  it('renders Privacy Policy link', () => {
    render(<Footer />);
    const privacyLink = screen.getByRole('link', { name: /privacy policy/i });
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute('href', '/privacy');
  });

  it('renders Contact link', () => {
    render(<Footer />);
    const contactLink = screen.getByRole('link', { name: /contact/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('has correct navigation aria-label', () => {
    render(<Footer />);
    const nav = screen.getByRole('navigation', { name: /footer navigation/i });
    expect(nav).toBeInTheDocument();
  });

  it('renders all footer links', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });
});
