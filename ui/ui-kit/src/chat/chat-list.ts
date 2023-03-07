import {AlwatrBaseElement, css, customElement, html, mapObject, nothing, property} from '@alwatr/element';

import './chat-message.js';

import type {ChatStorage} from '@alwatr/type';

declare global {
  interface HTMLElementTagNameMap {
    'alwatr-chat-list': AlwatrChatList;
  }
}

export function* map<T>(
    items: Record<string, T> | undefined,
    func: (value: T, index: string) => unknown,
): Generator<unknown, void, unknown> {
  if (items !== undefined) {
    for (const key in items) {
      if (!Object.prototype.hasOwnProperty.call(items, key)) continue;
      yield func(items[key], key);
    }
  }
}

/**
 * Alwatr chat message box element.
 *
 * @attr end-side
 */
@customElement('alwatr-chat-list')
export class AlwatrChatList extends AlwatrBaseElement {
  static override styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: calc(2 * var(--sys-spacing-track));
      border-top-left-radius: var(--sys-radius-large);
      border-top-right-radius: var(--sys-radius-large);
      padding: calc(2 * var(--sys-spacing-track));
      flex-grow: 1;
      overflow-y: auto;
      box-sizing: border-box;
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
  `;

  @property({type: Object, attribute: false})
    storage?: ChatStorage;

  @property({type: String, attribute: false})
    currentUser?: string;

  override render(): unknown {
    this._logger.logMethod('render');
    if (this.storage == null) return nothing;
    return html`${mapObject(
        this,
        this.storage.data,
        (message) => html`
        <alwatr-chat-message .message=${message} ?self=${message.from === this.currentUser}></alwatr-chat-message>
      `,
    )}`;
  }
}
