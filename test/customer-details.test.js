import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/Customer/Customer-details.js';
import { localize } from '@lion/localize';

const el = await fixture(html`<customer-details></customer-details>`);
const button =  el.shadowRoot.querySelectorAll('lion-button');

describe('customer details', () => {
    it('check for accessibility', () => {
      expect(el).to.be.accessible;
    });

    it('spy the toEmidetails method',()=>{
      const func = Sinon.spy(el,"_toEmidetails");
      // func._toEmidetails()
      button[0].click();
      expect(func.calledOnce);

    });

    it('should contain valid characters in FirstName', async()=>{
      const el=await fixture(html`<lion-input label="${localize.msg('change-language:firstname')}"></lion-input>`);
      await expect(el.label).to.match(/^[a-zA-Z\s]*$/);
    });

    it('check for submithandler', async() => {
      await el.shadowRoot.querySelector('lion-button').click();
      const form = el.shadowRoot.querySelector('lion-form');
      await el.updateComplete;
      
    });
  // Write test cases inside this block
});