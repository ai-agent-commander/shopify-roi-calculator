import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Benefits } from '@/components/Benefits';

describe('Benefits Component', () => {
  it('renders section heading', () => {
    render(<Benefits />);
    expect(screen.getByText(/What's included in your personalized report/i)).toBeInTheDocument();
  });

  it('renders section description', () => {
    render(<Benefits />);
    expect(screen.getByText(/Everything you need to make confident decisions/i)).toBeInTheDocument();
  });

  it('renders all four benefit cards', () => {
    render(<Benefits />);
    expect(screen.getByText('Personalized ROI Breakdown')).toBeInTheDocument();
    expect(screen.getByText('Tool Recommendations')).toBeInTheDocument();
    expect(screen.getByText('Payback Period Calculation')).toBeInTheDocument();
    expect(screen.getByText('30-Day Action Plan')).toBeInTheDocument();
  });

  it('renders benefit descriptions', () => {
    render(<Benefits />);
    expect(screen.getByText(/Get exact numbers on how much you'll save/i)).toBeInTheDocument();
    expect(screen.getByText(/Discover the perfect apps for your store size/i)).toBeInTheDocument();
    expect(screen.getByText(/Know exactly when each app will break even/i)).toBeInTheDocument();
    expect(screen.getByText(/Receive a step-by-step plan/i)).toBeInTheDocument();
  });

  it('has benefits grid with correct data-testid', () => {
    render(<Benefits />);
    const grid = screen.getByTestId('benefits-grid');
    expect(grid).toBeInTheDocument();
  });

  it('has correct section role', () => {
    render(<Benefits />);
    const section = screen.getByRole('region', { name: /benefits/i });
    expect(section).toBeInTheDocument();
  });

  it('renders icons for each benefit', () => {
    const { container } = render(<Benefits />);
    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThanOrEqual(4);
  });
});
