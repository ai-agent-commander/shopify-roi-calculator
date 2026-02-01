import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FAQ } from '@/components/FAQ';

describe('FAQ Component', () => {
  it('renders section heading', () => {
    render(<FAQ />);
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('renders all FAQ questions', () => {
    render(<FAQ />);
    expect(screen.getByText('Is this really free?')).toBeInTheDocument();
    expect(screen.getByText('How long does it take?')).toBeInTheDocument();
    expect(screen.getByText("What if I don't want to buy anything?")).toBeInTheDocument();
    expect(screen.getByText('Are your recommendations biased?')).toBeInTheDocument();
    expect(screen.getByText('Do you sell my email address?')).toBeInTheDocument();
    expect(screen.getByText('What data do you use for calculations?')).toBeInTheDocument();
  });

  it('answers are hidden by default', () => {
    render(<FAQ />);
    const answer = screen.queryByText(/we earn a small commission/i);
    expect(answer).not.toBeInTheDocument();
  });

  it('shows answer when question is clicked', () => {
    render(<FAQ />);
    const question = screen.getByText('Is this really free?');
    fireEvent.click(question);
    const answer = screen.getByText(/we earn a small commission/i);
    expect(answer).toBeVisible();
  });

  it('hides answer when question is clicked again', () => {
    render(<FAQ />);
    const question = screen.getByText('Is this really free?');
    fireEvent.click(question);
    fireEvent.click(question);
    const answer = screen.queryByText(/we earn a small commission/i);
    expect(answer).not.toBeInTheDocument();
  });

  it('can expand different FAQ items', () => {
    render(<FAQ />);

    const question1 = screen.getByText('Is this really free?');
    fireEvent.click(question1);
    expect(screen.getByText(/we earn a small commission/i)).toBeVisible();

    const question2 = screen.getByText('How long does it take?');
    fireEvent.click(question2);
    expect(screen.getByText(/2 minutes to complete/i)).toBeVisible();
  });

  it('has correct section role', () => {
    render(<FAQ />);
    const section = screen.getByRole('region', { name: /frequently asked questions/i });
    expect(section).toBeInTheDocument();
  });

  it('renders correct number of FAQ items', () => {
    const { container } = render(<FAQ />);
    const items = container.querySelectorAll('[data-state]');
    expect(items.length).toBeGreaterThanOrEqual(6);
  });
});
