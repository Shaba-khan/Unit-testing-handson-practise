import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/dashboard/Dashboard-overview.js';
import Sinon from 'sinon';

let element;
describe('DashboardOverview', () => {
    // Write test cases inside this block
    before(async() =>{
      element =  await fixture(html`<dashboard-overview></dashboard-overview>`);
    });
  
    it('should check dashboard overview is render',async()=>{
       expect(element).to.be.accessible();
    })
    
    it('checks for  _renderdashboardcard method' , () => {
        const ourd=Sinon.spy(element,'_renderdashboardcard');
        element._renderdashboardcard();
        expect(ourd.calledOnce);
      });
      
    it('checks for  _render dashboard-menu ' , async() => {
        let el =  await fixture(html`<dashboard-menu></dashboard-menu>`);
        expect(el).to.be.accessible();
        
      });
  });
  