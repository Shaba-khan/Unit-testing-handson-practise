import { html, fixture, expect } from '@open-wc/testing';
import '../loan-application.js';

let element;
describe('LoanApplication', () => {
  // Write test cases inside this block
  beforeEach(async () => {
    element = await fixture(html`<loan-application></loan-application>`);
    // runs before each test in this block
  });

  it('should check loan-application is render', async () => {
    expect(element).to.be.accessible();
  });
});
