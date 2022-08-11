import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

const el =  await fixture(html`<loanemi-details></loanemi-details>`);
const button = el.shadowRoot.querySelectorAll('lion-button');
describe('Loan EMI details', () => {
  it('Accessible' , async () =>{
    expect(el).to.be.accessible();
  });

  it('check for the h2 heading' , async () => {
    const h2  = el.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
    expect(h2.textContent).to.equal('EMI Details');
  });

  it('spy the method', () => {
    const func = Sinon.spy(el,"_toBasicDetails");
    button[0].click();
    expect(func.calledOnce).to.be.true;
  });

  xit('spy the method _toCustomer', () => {
    const func = Sinon.spy(el,"_toCustomer");
    button[1].click();
    expect(func.calledOnce).to.be.true;
  });


  // Write test cases inside this block
});
