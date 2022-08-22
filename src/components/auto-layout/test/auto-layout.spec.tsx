import { newSpecPage } from '@stencil/core/testing';
import { AutoLayout } from '../auto-layout';

describe('auto-layout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AutoLayout],
      html: `<auto-layout></auto-layout>`,
    });
    expect(page.root).toEqualHtml(`
      <auto-layout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </auto-layout>
    `);
  });
});
