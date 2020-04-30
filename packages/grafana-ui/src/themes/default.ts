import { GrafanaThemeCommons } from '@grafana/data';

export const commonColorsPalette = {
  dark1: '#13161d',
  dark2: '#1e2028',
  dark3: '#303133',
  dark4: '#35373f',
  dark5: '#41444b',
  gray1: '#52545c',
  gray2: '#767980',
  gray3: '#acb6bf',
  gray4: '#c7d0d9',
  gray5: '#dde4ed',
  gray6: '#e9edf2',
  gray7: 'rgba(240, 240, 240, 0.89)',
  gray8: '#9e9e9e',
  gray9: '#d6d6d6',

  // New greys palette used by next-gen form elements
  gray98: '#f7f8fa',
  gray95: '#e9edf2',
  gray85: '#c7d0d9',
  gray70: '#9fa7b3',
  gray60: '#7B8087',
  gray33: '#464c54',
  gray25: '#343b40',
  gray15: '#202226',
  gray10: '#141619',
  gray05: '#0b0c0e',

  // New blues palette used by next-gen form elements
  blue95: '#5794f2',
  blue85: '#3274d9',
  blue77: '#1f60c4',

  // New reds palette used by next-gen form elements
  red88: '#e02f44',
};

const SPACING_BASE = 8;

const theme: GrafanaThemeCommons = {
  name: 'Grafana Default',
  typography: {
    fontFamily: {
      sansSerif: "Lato, 'Avenir Next', Helvetica, Arial, sans-serif",
      monospace: "Menlo, Monaco, Consolas, 'Courier New', monospace",
    },
    size: {
      base: '14px',
      xs: '10px',
      sm: '12px',
      md: '14px',
      lg: '18px',
    },
    heading: {
      h1: '28px',
      h2: '24px',
      h3: '21px',
      h4: '18px',
      h5: '16px',
      h6: '14px',
    },
    weight: {
      light: 300,
      regular: 400,
      semibold: 500,
      bold: 600,
    },
    lineHeight: {
      xs: 1,
      sm: 1.1,
      md: 1.5,
      lg: 2,
    },
    link: {
      decoration: 'none',
      hoverDecoration: 'none',
    },
  },
  breakpoints: {
    xs: '0',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1600px',
  },
  spacing: {
    insetSquishMd: '4px 8px',
    d: '14px',
    xxs: '2px',
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    gutter: '30px',

    // Next-gen forms spacing variables
    // TODO: Move variables definition to respective components when implementing
    formSpacingBase: SPACING_BASE,
    formMargin: `${SPACING_BASE * 4}px`,
    formFieldsetMargin: `${SPACING_BASE * 2}px`,
    formLegendMargin: `0 0 ${SPACING_BASE * 2}px 0`,
    formInputHeight: `${SPACING_BASE * 4}px`,
    formButtonHeight: SPACING_BASE * 4,
    formInputPaddingHorizontal: `${SPACING_BASE}px`,

    // Used for icons do define spacing between icon and input field
    // Applied on the right(prefix) or left(suffix)
    formInputAffixPaddingHorizontal: `${SPACING_BASE / 2}px`,

    formInputMargin: `${SPACING_BASE * 2}px`,
    formLabelPadding: '0 0 0 2px',
    formLabelMargin: `0 0 ${SPACING_BASE / 2 + 'px'} 0`,
    formValidationMessagePadding: '4px 8px',
    formValidationMessageMargin: '4px 0 0 0',
  },
  border: {
    radius: {
      sm: '2px',
      md: '3px',
      lg: '5px',
    },
    width: {
      sm: '1px',
    },
  },
  height: {
    sm: '24px',
    md: '32px',
    lg: '48px',
  },
  panelPadBottom: 10,
  panelPadSide: 20,
  panelPadTop: 0,
  panelHeaderHeight: 28,
  zIndex: {
    dropdown: '1000',
    navbarFixed: '1020',
    sidemenu: '1025',
    tooltip: '1030',
    modalBackdrop: '1040',
    modal: '1050',
    typeahead: '1060',
  },
};

export default theme;
