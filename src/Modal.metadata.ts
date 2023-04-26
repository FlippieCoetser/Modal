/**
 * @module Modal
 */

/**
 * HTML Attributes available to set
 * @category Metadata: Attributes
 * @enum
 */
export const Attribute = {
  TEMPLATE: "templateId",
  VISIBLE: "visible",
  STATE: "state",
} as const;
/**
 * HTML Attributes available to set
 * @category Metadata: Attributes
 */
export type Attributes = (typeof Attribute)[keyof typeof Attribute];
