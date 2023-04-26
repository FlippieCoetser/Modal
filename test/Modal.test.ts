// @category Metadata: Components
import { Tag } from "../node_modules/@browser-modules/component.library/lib/tag.js";
describe("Given Tag imported", () => {
  it("then Tag should be defined", () => {
    expect(Tag).toBeDefined();
  });
  it("then Tag.MODAL should be defined", () => {
    expect(Tag.MODAL).toBeDefined();
  });
});

/**
 * @category Metadata: Attributes
 */
import { Attribute } from "../src/Modal.metadata.js";
describe("Given Attribute imported", () => {
  it("then Attribute should be defined", () => {
    expect(Attribute).toBeDefined();
  });
  it("then Attribute.TEMPLATE should be defined", () => {
    expect(Attribute.TEMPLATE).toBeDefined();
  });
  it("then Attribute.VISIBLE should be defined", () => {
    expect(Attribute.VISIBLE).toBeDefined();
  });
  it("then Attribute.STATE should be defined", () => {
    expect(Attribute.STATE).toBeDefined();
  });
});

/**
 * @category Metadata: State
 */
import { Visible } from "../src/Modal.metadata.js";
describe("Given Visible imported", () => {
  it("then Visible should be defined", () => {
    expect(Visible).toBeDefined();
  });
  it("then Visible.NO should be defined", () => {
    expect(Visible.NO).toBeDefined();
  });
  it("then Visible.YES should be defined", () => {
    expect(Visible.YES).toBeDefined();
  });
});

import { test } from "../src/Modal.js";

describe("Given Tag imported", () => {
  it("then Tag should be defined", () => {
    expect(test).toEqual(1);
  });
});
