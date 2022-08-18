import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

let el;
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
  });

  it('Accessible', async () => {
    expect(el).to.be.accessible();
  });

  it('check for the h2 heading', async () => {
    const h2 = el.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
    // expect(h2.textContent).to.equal('EMI Details');
  });

  // Write test cases inside this block
});
