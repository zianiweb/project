import { createCss, defaultThemeMap, StitchesCss } from '@stitches/react';
export type { StitchesVariants, StitchesCss } from '@stitches/react';
// These are the different text types that our design system handles. 
// h's indicate headers, and the other names are explicit. 
// h1: '',
// h2: '',
// h3: '',
// h4: '',
// h5: '',
// h6: '',
// subtitle1: '',
// subtitle2: '',
// body1: '',
// body2: '',
// button: '',
// caption: '',
// overline: '',
// blockquote: '',
const stitches = createCss({
  prefix: 'sho-',
  themeMap: {
    ...defaultThemeMap,
    textTransform: "fontCases",
    fontStyle: "fontStyles",
    marginBottom: "spacesAfter",
  },
  theme: {
    colors: {
      pri: 'rgba(64,121,162,1)', // primary
      sec: 'rgba(39, 81, 101, 1)', // secondary
      ter: 'rgba(23, 141, 179, 1)', // tertiary
      acc: 'rgba(214, 57, 255, 1)', // accent
      lin: 'rgba(74, 180, 249, 1)', // link
      ale: 'rgba(195, 111, 123, 1)', // alerts
      suc: 'rgba(87, 143, 131)', // success
      gs1:'rgba(255,255,255, 1)',
      gs2: 'rgba(200,200,200, 1)',
      gs3:'rgba(150,150,150, 1)',
      gs4:'rgba(100,100,100, 1)',
      gs5: 'rgba(50,50,50, 1)',
      gs6:'rgba(0,0,0, 1)',
    },
    fonts: {
      h1: 'sans-serif',
      h2: 'sans-serif',
      h3: 'sans-serif',
      h4: 'sans-serif',
      h5: 'sans-serif',
      h6: 'sans-serif',
      subtitle1: 'sans-serif',
      subtitle2: 'sans-serif',
      body1: 'Zen Loop',
      body2: 'Source Code Pro',
      button: 'sans-serif',
      caption: 'sans-serif',
      overline: 'sans-serif',
      blockquote: 'sans-serif',
    },
    fontWeights: {
      h1: '400',
      h2: '400',
      h3: '400',
      h4: '400',
      h5: '400',
      h6: '400',
      subtitle1: '400',
      subtitle2: '400',
      body1: '400',
      body2: '900',
      button: '400',
      caption: '400',
      overline: '400',
      blockquote: '400',
    },
    fontStyles: {
      h1: 'normal',
      h2: 'normal',
      h3: 'normal',
      h4: 'normal',
      h5: 'normal',
      h6: 'normal',
      subtitle1: 'normal',
      subtitle2: 'normal',
      body1: 'italic',
      body2: 'normal',
      button: 'normal',
      caption: 'normal',
      overline: 'normal',
      blockquote: 'normal',
    },
    fontCases: {
      h1: 'none',
      h2: 'none',
      h3: 'none',
      h4: 'none',
      h5: 'none',
      h6: 'none',
      subtitle1: 'none',
      subtitle2: 'none',
      body1: 'none',
      body2: 'none',
      button: 'none',
      caption: 'none',
      overline: 'none',
      blockquote: 'none',
    },
    fontSizes: {
      h1: '9.6rem',
      h2: '6.0rem',
      h3: '4.8rem',
      h4: '3.2rem',
      h5: '2.4rem',
      h6: '2.0rem',
      subtitle1: '1.6rem',
      subtitle2: '1.4rem',
      body1: '1.8rem',
      body2: '1.4rem',
      button: '1.4rem',
      caption: '1.2rem',
      overline: '1.2rem',
      blockquote: '1.4rem',
    },
    spacesAfter: {
      h1: '0px',
      h2: '0px',
      h3: '0px',
      h4: '0px',
      h5: '0px',
      h6: '0px',
      subtitle1: '0px',
      subtitle2: '0px',
      body1: '0px',
      body2: '0px',
      button: '0px',
      caption: '0px',
      overline: '0px',
      blockquote: '0px',
    },
    lineHeights: {
      h1: '1.4em',
      h2: '1.4em',
      h3: '1.4em',
      h4: '1.4em',
      h5: '1.4em',
      h6: '1.4em',
      subtitle1: '1.4em',
      subtitle2: '1.4em',
      body1: '1.4em',
      body2: '1.4em',
      button: '1.4em',
      caption: '1.4em',
      overline: '1.4em',
      blockquote: '1.4em',
    },
    letterSpacings: {
      h1: '0px',
      h2: '0px',
      h3: '0px',
      h4: '0px',
      h5: '0px',
      h6: '0px',
      subtitle1: '0px',
      subtitle2: '0px',
      body1: '0px',
      body2: '0px',
      button: '0px',
      caption: '0px',
      overline: '0px',
      blockquote: '0px',
    },
    space: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      13: '52px',
      14: '56px',
      15: '60px',
      16: '64px',
      17: '68px',
      18: '72px',
      19: '76px',
      20: '80px'
    },
    sizes: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      13: '52px',
      14: '56px',
      15: '60px',
      16: '64px',
      17: '68px',
      18: '72px',
      19: '76px',
      20: '80px'
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      round: '50%',
      pill: '9999px',
    },
    shadows: {},
    transitions: {
      slow: "500ms",
      normal: "300ms",
      fast: "100ms"
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
  },
  media: { // why media queries expressed in em https://zellwk.com/blog/media-query-units/
    bp1: '(min-width: 37.5em)', //600px 
    bp2: '(min-width: 56.5625em)', // 905px
    bp3: '(min-width: 77.5em)', // 1240px
    bp4: '(min-width: 87.5em)', // 1400px 
  },
  utils: {}
} as any);
export type CSS = StitchesCss<typeof stitches>;
export const { styled, css, theme, getCssString, global, keyframes, config } = stitches;
export const utils = config.utils;
export const globalStyles = (mediaArray: any) => global({
  '@font-face': mediaArray,
  ':root' : {
    fontSize: '53.125%', // 0.85% 1rem at 10px
    '@bp1': {
      fontSize: '62.5%', // 1rem = 10px
    },
  },
  '*': { margin: 0, padding: 0 },
  body: { 
    webkitFontSmooting: 'antialised',
    mosOsxFontSmoothing: 'grayscale',
    counterReset: 'page',
    '@bp1': {
      backgroundColor: 'pink',
    },
    '@bp2': {
      backgroundColor: 'red',
    },
    '@bp3': {
      backgroundColor: 'green',
    },
    '@bp4': {
      backgroundColor: 'blue',
    },
  },
});