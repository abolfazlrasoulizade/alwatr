import {customElement, AlwatrSmartElement, css, html} from '@alwatr/element';

import '@alwatr/ui-kit/icon-box/icon-box.js';

declare global {
  interface HTMLElementTagNameMap {
    'alwatr-page-home': AlwatrPageHome;
  }
}

/**
 * Alwatr Demo Home Page
 */
@customElement('alwatr-page-home')
export class AlwatrPageHome extends AlwatrSmartElement {
  static override styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow-y: auto;
    }

    :host::-webkit-scrollbar {
      width: var(--sys-scrollbar-size);
      height: var(--sys-scrollbar-size);
    }

    :host::-webkit-scrollbar-corner,
    :host::-webkit-scrollbar-track {
      background-color: var(--sys-scrollbar-background);
    }

    :host::-webkit-scrollbar-track {
      margin: var(--sys-spacing-track);
    }

    :host::-webkit-scrollbar-thumb {
      background-color: var(--sys-scrollbar-color);
      border-radius: var(--sys-scrollbar-radius);
    }

    :host(:hover)::-webkit-scrollbar-thumb {
      background-color: var(--sys-scrollbar-color-hover);
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 1;
      box-sizing: border-box;
      padding: calc(2 * var(--sys-spacing-track));
      gap: calc(2 * var(--sys-spacing-track));
    }

    header {
      display: flex;
      align-items: center;
      padding: calc(2 * var(--sys-spacing-track));
    }

    header img {
      width: 100%;
    }

    footer {
      width: 100%;
      display: flex;
      direction: ltr;
      text-align: center;
      box-sizing: border-box;
      color: var(--sys-color-on-primary-container);
      padding: calc(2 * var(--sys-spacing-track));
      background-color: var(--sys-color-primary-container);
      box-shadow: var(--sys-surface-elevation-4);
    }
  `;

  override render(): unknown {
    super.render();

    // eslint-disable-next-line max-len
    const loremText = `مداد رنگی ها مشغول بودند به جز مداد سفید، هیهم باشیم شاید فردا ما هم در کنار هم نباشیم…`;

    return html`
      <header>
        <img src="image/soffit.jpg" />
      </header>
      <section>
        <alwatr-icon-box
          href="/"
          icon="gift-outline"
          description=${loremText}
          headline="شرکت در قرعه کشی میدکس"
        ></alwatr-icon-box>
        <alwatr-icon-box
          href="/"
          icon="download-outline"
          description=${loremText}
          headline="دانلود کاتالوگ"
        ></alwatr-icon-box>
        <alwatr-icon-box href="/" icon="earth-outline" description=${loremText} headline="سایت اصلی"></alwatr-icon-box>
        <alwatr-icon-box
          href="/"
          icon="call-outline"
          description=${loremText}
          headline="ارتباط مستقیم با سافیت"
        ></alwatr-icon-box>
        <alwatr-icon-box
          href="/"
          icon="logo-instagram"
          description=${loremText}
          headline="اینستاگرام"
        ></alwatr-icon-box>
        <alwatr-icon-box
          href="/"
          icon="send-outline"
          description=${loremText}
          headline="کانال تلگرام"
        ></alwatr-icon-box>
      </section>
      <footer>
        <span>A good ceiling is vital. But a SOFFIT ceiling can be an inspiration.</span>
      </footer>
    `;
  }
}
