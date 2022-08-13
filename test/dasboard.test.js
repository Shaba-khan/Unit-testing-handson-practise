import { html, fixture, expect } from '@open-wc/testing';
import '../src/dashboard/Dashboard.js';
import Sinon from 'sinon';

let element;
describe('Dashboard', () => {
  // Write test cases inside this block
  before(async () => {
    element = await fixture(html`<dash-board></dash-board>`);
  });

  it('should check loan-application is render', async () => {
    expect(element).to.be.accessible();
  });
  it('checks for  getoverview method', () => {
    const ourd = Sinon.spy(element, 'getOverview');
    element.getOverview();
    expect(ourd.calledOnce).to.be.true;
  });
});
