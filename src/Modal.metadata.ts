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

/**
 * Attribute only visible when set to NO
 * @category Metadata: State
 * @enum
 */
export const Visible = {
  NO: "no",
  YES: "yes",
} as const;
/**
 * Attribute only visible when set to NO
 * @category Metadata: State
 */
export type Visibility = (typeof Visible)[keyof typeof Visible];

/**
 * @category Metadata: Behavior
 * @enum
 */
export const Operation = {
  HIDE: "hide",
  SHOW: "show",
} as const;
/**
 * @category Metadata: Behavior
 */
export type Operations = (typeof Operation)[keyof typeof Operation];

/**
 * @category Metadata: Behavior
 * @enum
 */
export const Event = {
  ONHIDE: "onhide",
  ONSHOW: "onshow",
} as const;
/**
 * @category Metadata: Behavior
 */
export type Events = (typeof Event)[keyof typeof Event];
