import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';
import Sinon from 'sinon';

let el;
let element;
describe('Success screen ', () => {
  // Write test cases inside this block
  beforeEach(async () => {
    el =  await fixture(html`<loan-success></loan-success>`);
  });

  it('Accessible' , async () =>{
    expect(el).to.be.accessible();
  });
  
  it('checks for home method' , () => {
    const func = Sinon.spy(el,"_toHome");
    el._toHome()
    expect(func.calledOnce).to.be.true;
  });
});

describe('error screen', () => {
  // Write test cases inside this block
  beforeEach(async () => {
    element =  await fixture(html`<loan-error></loan-error>`);
  });

  it('Accessible' , async () =>{
    expect(element).to.be.accessible();
  });

   
  it('checks for home method' , () => {
    let func = Sinon.spy(element,"_toHomeError");
    const button = element.shadowRoot.querySelectorAll('lion-button');
    button[0].click();
    expect(func.calledOnce);
  });
});
