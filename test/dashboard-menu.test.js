import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/dashboard/Dashboard-menu.js';

const  el =  await fixture(html`<dashboard-menu></dashboard-menu>`);
const button = el.shadowRoot.querySelector('button');
describe('Dashboard Menu', () => {
   it('Accessible' , async () =>{
     expect(el).to.be.accessible();
   });

   it('checks for spy _setTypeInLS', () => {
    const fun = Sinon.spy(el,"_setTypeInLS");
    el._setTypeInLS();
    expect(fun.calledOnce).to.be.true;
  });
   
   it('checks for spy navigateToDetails', () => {
    const fun = Sinon.spy(el,"navigateToDetails");
    el.navigateToDetails();
    expect(fun.calledOnce).to.be.true;
  });
 
});