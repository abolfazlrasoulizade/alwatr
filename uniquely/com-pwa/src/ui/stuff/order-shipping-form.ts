import {
  customElement,
  css,
  html,
  LocalizeMixin,
  SignalMixin,
  UnresolvedMixin,
  property,
  mapObject,
} from '@alwatr/element';
import {message} from '@alwatr/i18n';
import {ladingTypeCS, carTypeCS, timePeriodCS, type OrderShippingInfo} from '@alwatr/type/customer-order-management.js';
import '@alwatr/ui-kit/button/button.js';
import {AlwatrSurface} from '@alwatr/ui-kit/card/surface.js';
import '@alwatr/ui-kit/radio-group/radio-group.js';
import '@alwatr/ui-kit/text-field/text-field.js';
import {getLocalStorageItem} from '@alwatr/util';

import type {AlwatrRadioGroup} from '@alwatr/ui-kit/radio-group/radio-group.js';
import type {AlwatrTextField} from '@alwatr/ui-kit/text-field/text-field.js';

declare global {
  interface HTMLElementTagNameMap {
    'alwatr-order-shipping-form': AlwatrOrderShoppingForm;
  }
}

const localStorageId = 'shipping_form_data_x2';

/**
 * Alwatr Order Shipping Form.
 */
@customElement('alwatr-order-shipping-form')
export class AlwatrOrderShoppingForm extends LocalizeMixin(SignalMixin(UnresolvedMixin(AlwatrSurface))) {
  static override styles = css`
    :host {
      display: block;
    }

    alwatr-text-field,
    alwatr-radio-group {
      display: block;
      margin-bottom: var(--sys-spacing-track);
    }
  `;

  @property()
    formData: Partial<OrderShippingInfo> = {};

  override connectedCallback(): void {
    super.connectedCallback();
    this._loadFormData();
  }

  private _saveFormData(): void {
    this._logger.logMethod?.('_saveFormData');
    localStorage.setItem(localStorageId, JSON.stringify(this.formData));
  }

  private _loadFormData(): void {
    if (Object.values(this.formData).length !== 0) return;
    this._logger.logMethod?.('_loadFormData');
    const formData = getLocalStorageItem(localStorageId, this.formData);
    for (const prop in formData) {
      if (!Object.prototype.hasOwnProperty.call(formData, prop)) continue;
      this.formData[prop] = formData[prop];
    }
  }

  override render(): unknown {
    this._logger.logMethod?.('render');

    const textFieldContentRecord: Record<string, TextFiledContent> = {
      recipientName: {
        type: 'text',
        name: 'recipientName',
        placeholder: message('order_shipping_recipient_name_title'),
        value: this.formData.recipientName,
      },
      recipientNationalCode: {
        type: 'number',
        name: 'recipientNationalCode',
        placeholder: message('order_shipping_recipient_national_code_title'),
        value: this.formData.recipientNationalCode,
      },
      address: {
        type: 'textarea',
        name: 'address',
        placeholder: message('order_shipping_address_title'),
        value: this.formData.address,
      },
    };

    const radioGroupContentRecord: Record<string, RadioGroupContent> = {
      carType: {
        name: 'carType',
        title: message('order_shipping_car_type_title'),
        radioGroup: carTypeCS.map((value) => {
          return {
            value,
            label: message('order_shipping_car_type_key_' + value),
          };
        }),
        value: this.formData.carType,
        inputChangeSignalName: 'order_shipping_input_change',
      },
      ladingType: {
        name: 'ladingType',
        title: message('order_shipping_lading_type_title'),
        radioGroup: ladingTypeCS.map((value) => {
          return {
            value,
            label: message('order_shipping_lading_type_key_' + value),
          };
        }),
        value: this.formData.ladingType,
        inputChangeSignalName: 'order_shipping_input_change',
      },
      timePeriod: {
        name: 'timePeriod',
        title: message('order_shipping_time_period_title'),
        radioGroup: timePeriodCS.map((value) => {
          return {
            value,
            label: message('order_shipping_time_period_key_' + value),
          };
        }),
        value: this.formData.timePeriod,
        inputChangeSignalName: 'order_shipping_input_change',
      },
    };

    const descriptionTextFieldContent = {
      type: 'textarea',
      name: 'description',
      placeholder: message('order_shipping_description_title'),
      value: this.formData.description,
    };

    return [
      mapObject(this, textFieldContentRecord, (textFieldContent) => {
        return html`
          <alwatr-text-field .content=${textFieldContent} outlined active-outline stated></alwatr-text-field>
        `;
      }),
      mapObject(this, radioGroupContentRecord, (radioGroupContent) => {
        return html`<alwatr-radio-group .content=${radioGroupContent}></alwatr-radio-group>`;
      }),
      html`
        <alwatr-radio-group
          .name=${'carType'}
          .options=${radioGroupOptions.carType}
          .value=${this.formData.carType}
          @input-change=${this._inputChanged}
        ></alwatr-radio-group>
        <alwatr-radio-group
          .name=${'ladingType'}
          .options=${radioGroupOptions.ladingType}
          .value=${this.formData.ladingType}
          @input-change=${this._inputChanged}
        ></alwatr-radio-group>
        <alwatr-radio-group
          .name=${'timePeriod'}
          .options=${radioGroupOptions.timePeriod}
          .value=${this.formData.timePeriod}
          @input-change=${this._inputChanged}
        ></alwatr-radio-group>

        <alwatr-text-field .content=${descriptionTextFieldContent} outlined active-outline stated></alwatr-text-field>
      `,
    ];
  }

  private _inputChanged(event: CustomEvent): void {
    this._logger.logMethod?.('_inputChanged');
    const target = event.target as AlwatrTextField | AlwatrRadioGroup;
    if (target == null) return;
    this.formData[target.name] = target.value;
    this._saveFormData();
  }
}
