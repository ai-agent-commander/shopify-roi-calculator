import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HowItWorks } from '@/components/HowItWorks';

describe('HowItWorks Component', () => {
  it('renders section heading', () => {
    render(<HowItWorks />);
    expect(screen.getByText('How it works')).toBeInTheDocument();
  });

  it('renders all three steps', () => {
    render(<HowItWorks />);
    expect(screen.getByText('Answer 5 Questions')).toBeInTheDocument();
    expect(screen.getByText('Get Instant Analysis')).toBeInTheDocument();
    expect(screen.getByText('Receive Report via Email')).toBeInTheDocument();
  });

  it('renders step numbers', () => {
    render(<HowItWorks />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('renders step descriptions', () => {
    render(<HowItWorks />);
    expect(screen.getByText(/Tell us about your store revenue/i)).toBeInTheDocument();
    expect(screen.getByText(/Our algorithm calculates ROI/i)).toBeInTheDocument();
    expect(screen.getByText(/Get personalized recommendations/i)).toBeInTheDocument();
  });

  it('has correct section role', () => {
    render(<HowItWorks />);
    const section = screen.getByRole('region', { name: /how it works/i });
    expect(section).toBeInTheDocument();
  });

  it('renders arrow indicators between steps', () => {
    const { container } = render(<HowItWorks />);
    const arrows = container.querySelectorAll('svg path[d*="M9 5l7 7"]');
    expect(arrows.length).toBeGreaterThan(0);
  });
});
