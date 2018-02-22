"use strict";

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-nested": {},
    "postcss-advanced-variables": {},
    autoprefixer: {
      cascade: false
    },
    perfectionist: {
      cascade: false,
      colorCase: "lower",
      colorShorthand: true,
      format: "expanded",
      indentChar: " ",
      indentSize: 2,
      trimLeadingZero: false,
      trimTrailingZeros: true,
      zeroLengthNoUnit: true
    },
    "postcss-flexbugs-fixes": {},
    "postcss-calc": {},
    "postcss-color-hex-alpha": {},
    "postcss-color-hsl": {},
    "postcss-color-hwb": {},
    "postcss-pseudoelements": {},
    "postcss-reporter": {
      clearReportedMessages: true
    }
  }
};
