import { html, fixture, expect } from '@open-wc/testing';
import '../src/dashboard/Dashboard-overview.js';
import Sinon from 'sinon';

let element;
describe('DashboardOverview', () => {
  // Write test cases inside this block
  before(async () => {
    element = await fixture(html`<dashboard-overview></dashboard-overview>`);
  });

  it('should check dashboard overview is render', async () => {
    expect(await element).to.be.accessible();
  });

  it('checks for  _renderdashboardcard method', async () => {
    const ourd = Sinon.spy(element, '_renderdashboardcard');
    element._renderdashboardcard();
    expect(await ourd.calledOnce);
  });

  it('checks for  _render dashboard-menu ', async () => {
    const el = await fixture(html`<dashoard-menu></dashboard-menu>`);
    await expect(el).to.be.accessible();
  });
});
