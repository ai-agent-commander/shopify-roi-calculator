import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SocialProof } from '@/components/SocialProof';

describe('SocialProof Component', () => {
  it('renders section heading', () => {
    render(<SocialProof />);
    expect(screen.getByText(/Trusted by Shopify Store Owners/i)).toBeInTheDocument();
  });

  it('renders all three testimonials', () => {
    const { container } = render(<SocialProof />);
    const testimonials = container.querySelectorAll('blockquote');
    expect(testimonials).toHaveLength(3);
  });

  it('renders first testimonial content', () => {
    render(<SocialProof />);
    expect(screen.getByText(/Found out I was overpaying/i)).toBeInTheDocument();
  });

  it('renders second testimonial content', () => {
    render(<SocialProof />);
    expect(screen.getByText(/calculator showed me/i)).toBeInTheDocument();
  });

  it('renders third testimonial content', () => {
    render(<SocialProof />);
    expect(screen.getByText(/Wish I'd found this before/i)).toBeInTheDocument();
  });

  it('displays author names', () => {
    render(<SocialProof />);
    expect(screen.getByText('Mike S.')).toBeInTheDocument();
    expect(screen.getByText('Jennifer L.')).toBeInTheDocument();
    expect(screen.getByText('David R.')).toBeInTheDocument();
  });

  it('displays business sizes', () => {
    render(<SocialProof />);
    expect(screen.getByText('$18K/month store')).toBeInTheDocument();
    expect(screen.getByText('$45K/month store')).toBeInTheDocument();
    expect(screen.getByText('$8K/month store')).toBeInTheDocument();
  });

  it('renders avatar images with proper alt text', () => {
    render(<SocialProof />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3);
    images.forEach(img => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).toContain('GenAI Prompt');
    });
  });

  it('has correct section role', () => {
    render(<SocialProof />);
    const section = screen.getByRole('region', { name: /testimonials/i });
    expect(section).toBeInTheDocument();
  });

  it('uses lazy loading for images', () => {
    render(<SocialProof />);
    const images = screen.getAllByRole('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('loading', 'lazy');
    });
  });
});
