import { test, expect } from '@playwright/test';

test.describe('Landing Page E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('loads page successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Shopify ROI Calculator/i);
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
  });

  test('hero CTA is visible and clickable', async ({ page }) => {
    const ctaButton = page.getByRole('link', { name: /start calculator/i });
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveAttribute('href', '#calculator');
  });

  test('all main sections are visible', async ({ page }) => {
    await expect(page.locator('text=Trusted by Shopify Store Owners')).toBeVisible();
    await expect(page.locator('text=What\'s included')).toBeVisible();
    await expect(page.locator('text=How it works')).toBeVisible();
    await expect(page.locator('text=Frequently Asked Questions')).toBeVisible();
    await expect(page.locator('text=Ready to stop wasting money')).toBeVisible();
  });

  test('testimonials are displayed', async ({ page }) => {
    await expect(page.locator('text=Mike S.')).toBeVisible();
    await expect(page.locator('text=Jennifer L.')).toBeVisible();
    await expect(page.locator('text=David R.')).toBeVisible();
  });

  test('benefit cards are displayed', async ({ page }) => {
    await expect(page.locator('text=Personalized ROI Breakdown')).toBeVisible();
    await expect(page.locator('text=Tool Recommendations')).toBeVisible();
    await expect(page.locator('text=Payback Period Calculation')).toBeVisible();
    await expect(page.locator('text=30-Day Action Plan')).toBeVisible();
  });

  test('FAQ accordion functionality', async ({ page }) => {
    const faqItem = page.locator('text=Is this really free?');
    await faqItem.click();

    const answer = page.locator('text=we earn a small commission');
    await expect(answer).toBeVisible();

    await faqItem.click();
    await expect(answer).not.toBeVisible();
  });

  test('multiple FAQ items can be interacted with', async ({ page }) => {
    await page.locator('text=Is this really free?').click();
    await expect(page.locator('text=we earn a small commission')).toBeVisible();

    await page.locator('text=How long does it take?').click();
    await expect(page.locator('text=2 minutes to complete')).toBeVisible();
  });

  test('footer links are present', async ({ page }) => {
    await expect(page.getByRole('link', { name: /privacy policy/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /contact/i })).toBeVisible();
  });

  test('all images have alt text', async ({ page }) => {
    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt?.length).toBeGreaterThan(10);
    }
  });

  test('page has proper heading structure', async ({ page }) => {
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);

    const h2Count = await page.locator('h2').count();
    expect(h2Count).toBeGreaterThan(0);
  });
});

test.describe('Responsive Design', () => {
  test('mobile layout works correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const hero = page.locator('h1');
    await expect(hero).toBeVisible();

    // Check that content is still accessible
    await expect(page.locator('text=Trusted by Shopify Store Owners')).toBeVisible();
  });

  test('tablet layout works correctly', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=How it works')).toBeVisible();
  });

  test('desktop layout works correctly', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    await expect(page.locator('h1')).toBeVisible();
    const benefitsGrid = page.locator('[data-testid="benefits-grid"]');
    await expect(benefitsGrid).toBeVisible();
  });
});

test.describe('Accessibility', () => {
  test('keyboard navigation works', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');

    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });

  test('has proper ARIA labels', async ({ page }) => {
    await page.goto('/');

    const regions = page.locator('[role="region"]');
    const count = await regions.count();
    expect(count).toBeGreaterThan(0);
  });

  test('links have accessible names', async ({ page }) => {
    await page.goto('/');

    const links = page.locator('a');
    const count = await links.count();

    for (let i = 0; i < count; i++) {
      const ariaLabel = await links.nth(i).getAttribute('aria-label');
      const textContent = await links.nth(i).textContent();
      expect(ariaLabel || textContent).toBeTruthy();
    }
  });
});

test.describe('Performance', () => {
  test('page loads within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const loadTime = Date.now() - startTime;

    expect(loadTime).toBeLessThan(3000); // 3 seconds for test environment
  });

  test('images load properly', async ({ page }) => {
    await page.goto('/');
    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      await expect(images.nth(i)).toBeVisible();
    }
  });
});
