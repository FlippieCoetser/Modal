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

import { test } from "../src/Modal.js";

describe("Given Tag imported", () => {
  it("then Tag should be defined", () => {
    expect(test).toEqual(1);
  });
});
