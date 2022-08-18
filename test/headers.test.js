import { html, fixture, expect } from '@open-wc/testing';
import '../src/header/Header.js';
import Sinon from 'sinon';

let elementh;
let buttonsh;
describe('loan-header', () => {
  // Write test cases inside this block
  beforeEach(async () => {
    elementh = await fixture(html`<loan-header></loan-header>`);
    buttonsh = await elementh.shadowRoot.querySelectorAll('button');
  });

  it('should check header is render', () => {
    expect(elementh).to.be.accessible();
  });

  xit('should check en-GB button is accessible', () => {
    expect(buttonsh[0]).to.be.accessible();
  });

  xit('should check nl-NL is render', () => {
    expect(buttonsh[1]).to.be.accessible();
  });

  it('check for the form class form basic', async () => {
    const div = elementh.shadowRoot.querySelector('div');
    expect(div).to.exist;
    expect(div).to.have.class('container');
  });

  it('checks for the language change', async () => {
    const func = Sinon.spy(elementh, 'localeChanged');
    buttonsh[0].click();
    expect(func.calledOnce);
    func.restore();
  });

  it('check for the color change of button', async () => {
    buttonsh[0].click();
    expect(buttonsh[0]).to.have.class('bg-btn-color');
  });

  it('check for the color change of button', async () => {
    buttonsh[0].click();
    expect(buttonsh[1]).to.have.class('btn-cursor');
  });

  it('check for the color change of button', async () => {
    buttonsh[1].click();
    expect(buttonsh[1]).to.have.class('bg-btn-color');
  });
});
