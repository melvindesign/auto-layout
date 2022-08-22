import { newE2EPage } from '@stencil/core/testing';

describe('auto-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<auto-layout></auto-layout>');

    const element = await page.find('auto-layout');
    expect(element).toHaveClass('hydrated');
  });
});
