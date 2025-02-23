import { DefaultTheme } from 'styled-components';

const colors = {
  core: {
    alpha: {
      dim: {
        ['50']: '#1a1a1a0f',
        ['800']: '#1a1a1acc',
      },
    },
    gray: {
      ['00']: '#ffffff',
      ['300']: '#c9c9ce',
      ['500']: '#8c8c9a',
      ['950']: '#2c2c31',
    },
    red: {
      ['100']: '#ffdcdc',
      ['600']: '#dc2828',
    },
    yellow: {
      ['100']: '#faf1b6',
      ['700']: '#a56315',
    },
  },
  o2: {
    blue: {
      ['500']: '#0050ff',
    },
  },
};

const theme: DefaultTheme = {
  color: {
    surface: {
      'x-high': colors.core.gray['500'],
      'x-low': colors.core.gray['00'],
      brand: colors.o2.blue['500'],
      danger: colors.core.red['600'],
      'danger-variant': colors.core.red['100'],
      warning: colors.core.yellow['700'],
      'warning-variant': colors.core.yellow['100'],
    },
    content: {
      'on-neutral': {
        'xx-high': colors.core.gray['950'],
        medium: colors.core.gray['500'],
        low: colors.core.gray['300'],
        danger: colors.core.red['600'],
        warning: colors.core.yellow['700'],
      },
    },
    state: {
      default: {
        hover: colors.core.alpha.dim['50'],
        focus: colors.core.alpha.dim['800'],
      },
    },
  },
  font: {
    fontFamily: 'On Air Var sans-serif',
    label: {
      m: {
        size: 16,
        weight: 500,
        lineHeight: '22px',
        letterSpacing: 0.16,
      },
      s: {
        size: 14,
        weight: 550,
        lineHeight: '17px',
        letterSpacing: 0.16,
      },
    },
    body: {
      m: {
        size: 16,
        weight: 400,
        lineHeight: '22px',
        letterSpacing: 0.01,
        paragraphSpacing: 20,
        listSpacing: 6,
      },
    },
  },
  dimensions: {
    radius: {
      input: 12,
    },
    input: {
      boxSizing: 'border-box',
      width: '100%',
      height: 48,
      padding: {
        top: 12,
        right: 16,
        bottom: 12,
        left: 16,
      },
      border: {
        style: 'inset',
        width: 1,
      },
      focus: {
        borderWidth: 3,
      },
    },
    spacing: {
      xs: 8,
      s: 12,
      m: 16,
      l: 20,
    },
  },
};

export default theme;
