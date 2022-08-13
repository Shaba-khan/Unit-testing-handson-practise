import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/Customer/Customer-details.js';
import { localize } from '@lion/localize';

let el;
let button;

describe('customer details', () => {
  before(async () => {
    el = await fixture(html`<customer-details></customer-details>`);
    button = el.shadowRoot.querySelectorAll('lion-button');
  });

  it('check for accessibility', () => {
    expect(el).to.be.accessible;
  });

  it('spy the toEmidetails method', () => {
    const func = Sinon.spy(el, '_toEmidetails');
    // func._toEmidetails()
    button[0].click();
    expect(func.calledOnce);
  });

  it('should contain valid characters in FirstName', async () => {
    const element = await fixture(
      html`<lion-input
        label="${localize.msg('change-language:firstname')}"
      ></lion-input>`
    );
    await expect(element.label).to.match(/^[a-zA-Z\s]*$/);
  });

  it('check for submithandler', async () => {
    await el.shadowRoot.querySelector('lion-button').click();
    await el.updateComplete;
  });
  // Write test cases inside this block
});
