import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateROI(cost: number, revenue: number): number {
  if (cost === 0) return 0;
  return ((revenue - cost) / cost) * 100;
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}
