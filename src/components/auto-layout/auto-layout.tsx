import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'auto-layout',
  styleUrl: 'auto-layout.scss',
})
export class AutoLayout {

  /* SPACE BETWEEN ITEMS */
  @Prop() gap: string;

  /* PADDING */
  @Prop() padding: string;

  @Prop() paddingVertical: string;
  @Prop() paddingHorizontal: string;
  @Prop() paddingTop: string;
  @Prop() paddingBottom: string;
  @Prop() paddingLeft: string;
  @Prop() paddingRight: string;

  @Prop() height: string;
  @Prop() width: string;

  getSpaceBetweenItems(): string {
    if (this.gap) {
      return this.gap;
    }
  }

  getPaddingTop(): string {
    if(this.padding) {
      return this.padding
    }
    if(this.paddingVertical) {
      return this.paddingVertical
    }
    if(this.paddingTop) {
      return this.paddingTop
    }
  }

  getPaddingBottom(): string {
    if(this.padding) {
      return this.padding
    }
    if(this.paddingVertical) {
      return this.paddingVertical
    }
    if(this.paddingBottom) {
      return this.paddingBottom
    }
  }

  getPaddingLeft(): string {
    if(this.padding) {
      return this.padding
    }
    if(this.paddingHorizontal) {
      return this.paddingHorizontal
    }
    if(this.paddingLeft) {
      return this.paddingLeft
    }
  }

  getPaddingRight(): string {
    if(this.padding) {
      return this.padding
    }
    if(this.paddingHorizontal) {
      return this.paddingHorizontal
    }
    if(this.paddingRight) {
      return this.paddingRight
    }
  }

  getHeight(): string {
    if(this.height) {
      return this.height
    }
  }

  getWidth(): string {
    if(this.width) {
      return this.width
    }
  }

  render() {
    return (
      <Host style={{
        gap: this.getSpaceBetweenItems() + 'px',
        paddingTop: this.getPaddingTop() + 'px',
        paddingBottom: this.getPaddingBottom() + 'px',
        paddingLeft: this.getPaddingLeft() + 'px',
        paddingRight: this.getPaddingRight() + 'px',
        height: this.getHeight() + 'px',
        width: this.getWidth() + 'px',
      }}>
        <slot></slot>
      </Host>
    );
  }

}
