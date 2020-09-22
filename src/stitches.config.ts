import { createStyled } from '@stitches/react';

export const { styled, css } = createStyled({
  prefix: '',
  tokens: {},
  breakpoints: {},
  utils: {},
});

css.global({
  body: {
    margin: '0',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',\n    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
});

export const Div = styled('div', {});
export const Input = styled('input', {});
