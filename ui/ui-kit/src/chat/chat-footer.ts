import {AlwatrBaseElement, css, customElement, html, property} from '@alwatr/element';

import './chat-text-area.js';
import '../button/icon-button.js';

import type {IconButtonContent} from '../button/icon-button.js';

declare global {
  interface HTMLElementTagNameMap {
    'alwatr-chat-footer': AlwatrChatFooter;
  }
}

/**
 * Alwatr chat footer element.
 */
@customElement('alwatr-chat-footer')
export class AlwatrChatFooter extends AlwatrBaseElement {
  static override styles = css`
    :host {
      display: flex;
      gap: var(--sys-spacing-track);
      padding: calc(2 * var(--sys-spacing-track));
      padding-inline-start: var(--sys-spacing-track);
      border-top-left-radius: var(--sys-radius-large);
      border-top-right-radius: var(--sys-radius-large);
      color: var(--sys-color-on-surface);
      background-color: var(--sys-color-surface);
    }
  `;

  @property({type: String})
    sendButtonClickSignalId?: string;

  override render(): unknown {
    this._logger.logMethod?.('render');
    return html`
      <alwatr-icon-button .content=${<IconButtonContent>{icon: 'happy-outline'}}></alwatr-icon-button>
      <alwatr-chat-text-input .sendButtonClickSignalId=${this.sendButtonClickSignalId}></alwatr-chat-text-input>
    `;
  }
}
