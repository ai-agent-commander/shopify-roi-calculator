import { describe, it, expect } from 'vitest';
import { cn, formatCurrency, calculateROI, formatPercentage } from '@/lib/utils';

describe('Utility Functions', () => {
  describe('cn (className merger)', () => {
    it('merges class names correctly', () => {
      expect(cn('btn', 'btn-primary')).toBe('btn btn-primary');
    });

    it('handles conditional classes', () => {
      expect(cn('btn', false && 'hidden', 'active')).toBe('btn active');
    });

    it('handles empty input', () => {
      expect(cn()).toBe('');
    });

    it('handles undefined and null values', () => {
      expect(cn('btn', undefined, null, 'active')).toBe('btn active');
    });

    it('merges tailwind classes correctly', () => {
      expect(cn('px-2', 'px-4')).toBe('px-4');
    });
  });

  describe('formatCurrency', () => {
    it('formats positive USD correctly', () => {
      expect(formatCurrency(1000)).toBe('$1,000');
    });

    it('formats large numbers with commas', () => {
      expect(formatCurrency(1000000)).toBe('$1,000,000');
    });

    it('handles negative values', () => {
      expect(formatCurrency(-500)).toBe('-$500');
    });

    it('handles zero', () => {
      expect(formatCurrency(0)).toBe('$0');
    });

    it('rounds decimal values', () => {
      expect(formatCurrency(1234.56)).toBe('$1,235');
    });

    it('handles small decimal amounts', () => {
      expect(formatCurrency(0.99)).toBe('$1');
    });
  });

  describe('calculateROI', () => {
    it('calculates positive ROI correctly', () => {
      expect(calculateROI(100, 150)).toBe(50);
    });

    it('calculates negative ROI correctly', () => {
      expect(calculateROI(100, 50)).toBe(-50);
    });

    it('handles zero revenue', () => {
      expect(calculateROI(100, 0)).toBe(-100);
    });

    it('handles zero cost', () => {
      expect(calculateROI(0, 100)).toBe(0);
    });

    it('handles equal cost and revenue', () => {
      expect(calculateROI(100, 100)).toBe(0);
    });

    it('calculates high ROI correctly', () => {
      expect(calculateROI(100, 300)).toBe(200);
    });

    it('handles decimal values', () => {
      expect(calculateROI(150.50, 225.75)).toBe(50);
    });
  });

  describe('formatPercentage', () => {
    it('formats positive percentage', () => {
      expect(formatPercentage(50.5)).toBe('50.5%');
    });

    it('formats negative percentage', () => {
      expect(formatPercentage(-25.3)).toBe('-25.3%');
    });

    it('formats zero', () => {
      expect(formatPercentage(0)).toBe('0.0%');
    });

    it('rounds to one decimal place', () => {
      expect(formatPercentage(33.333)).toBe('33.3%');
    });

    it('formats large percentages', () => {
      expect(formatPercentage(200)).toBe('200.0%');
    });
  });
});
