import { html, fixture, expect } from '@open-wc/testing';
import "../Homework-9.js";

describe("Homework9 test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <Homework-9
        title="title"
      ></Homework-9>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
