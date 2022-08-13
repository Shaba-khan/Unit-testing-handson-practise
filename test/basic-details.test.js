import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanBasicDetails/BasicDetails.js';
import Sinon from 'sinon';

let element;
describe('Basic details', () => {
  beforeEach(async () => {
    element = await fixture(html`<basic-details></<basic-details>`);
    // runs before each test in this block
  });

  it('should run _numToWord for number to string', async () => {
    element.shadowRoot.querySelector('.amount').value = 100000;
    element._numToWord();
    const wordElement = element.shadowRoot.getElementById('word');
    expect(wordElement.innerHTML.includes('one lakh')).to.be.true;
  });

  it('should Check amount is less than 10000', async () => {
    element.shadowRoot.querySelector('.amount').value = 1000;
    element.shadowRoot.querySelector('.type').value = 'Home Loan';
    element.shadowRoot.querySelector('.period').value = 10;
    // let obj=element.shadowRoot.getElementById('word');
    expect(element._captureDetails()).to.be.false;
    expect(element.shadowRoot.querySelector('.amount')).to.have.class(
      'e-handle'
    );
  });

  it('should check dashboard function called', () => {
    const func = Sinon.spy(element, '_toDashboard');
    const button = element.shadowRoot.querySelectorAll('lion-button');
    button[0].click();
    expect(func.calledOnce);
  });
});
