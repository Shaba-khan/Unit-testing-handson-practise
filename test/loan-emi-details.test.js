import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

let el;
let button;
const data = JSON.stringify({
  interestRate: '7.00',
  monthlyEMI: '447.73',
  principal: '10000.00',
  interest: '745.42',
  totalAmount: '10745.42',
});
describe('Loan EMI details', () => {
  beforeEach(async () => {
    el = await fixture(
      html`<loanemi-details dataProp=${data}></loanemi-details>`
    );
    button = el.shadowRoot.querySelectorAll('lion-button');
  });

  it('Accessible', async () => {
    expect(el).to.be.accessible();
  });

  it('check for the h2 heading', async () => {
    const h2 = el.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
    expect(h2.textContent).to.equal('EMI Details');
  });

  it('spy the method _toBasicDetails', () => {
    const func = Sinon.spy(el, '_toBasicDetails');
    button[0].click();
    expect(func.calledOnce);
  });

  it('spy the method _toCustomer', () => {
    const func = Sinon.spy(el, '_toCustomer');
    button[1].click();
    expect(func.calledOnce);
  });

  // Write test cases inside this block
});
