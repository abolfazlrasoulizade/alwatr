import {html, customElement} from '@alwatr/element';
import '@alwatr/font/vazirmatn.css';
import {AlwatrPwaElement} from '@alwatr/pwa-helper/pwa-element.js';
import '@alwatr/ui-kit/style/theme/color.css';
import '@alwatr/ui-kit/style/theme/palette-300.css';

import './page-card.js';
import './page-chat.js';

import type {RoutesConfig} from '@alwatr/router';

declare global {
  interface HTMLElementTagNameMap {
    'alwatr-pwa': AlwatrPwa;
  }
}

/**
 * Alwatr PWA Root Element
 */
@customElement('alwatr-pwa')
class AlwatrPwa extends AlwatrPwaElement {
  protected override _routesConfig: RoutesConfig = {
    routeId: this._routesConfig.routeId,
    templates: {
      _404: this._routesConfig.templates._404,
      home: () => html`<alwatr-page-chat></alwatr-page-chat>`,
      card: () => html`<alwatr-page-card></alwatr-page-card>`,
    },
  };
}
