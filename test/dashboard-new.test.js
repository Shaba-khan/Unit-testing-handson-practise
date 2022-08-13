import { html, fixture, expect } from '@open-wc/testing';
import '../src/dashboard/Dashboard-new.js';

let element;
describe('DashboardNew', () => {
  // Write test cases inside this block
  before(async () => {
    element = await fixture(html`<dashboard-new></dashboard-new>`);
  });

  it('should check dashboard new is render', async () => {
    expect(element).to.be.accessible();
  });
});
