import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      surface: {
        'x-high': string;
        'x-low': string;
        brand: string;
        danger: string;
        'danger-variant': string;
        warning: string;
        'warning-variant': string;
      };
      content: {
        'on-neutral': {
          'xx-high': string;
          medium: string;
          low: string;
          danger: string;
          warning: string;
        };
      };
      state: {
        default: {
          hover: string;
          focus: string;
        };
      };
    };
    font: {
      fontFamily: string;
      label: {
        m: {
          size: number;
          weight: number;
          lineHeight: string;
          letterSpacing: number;
        };
        s: {
          size: number;
          weight: number;
          lineHeight: string;
          letterSpacing: number;
        };
      };
      body: {
        m: {
          size: number;
          weight: number;
          lineHeight: string;
          letterSpacing: number;
          paragraphSpacing: number;
          listSpacing: number;
        };
      };
    };
    dimensions: {
      radius: {
        input: number;
      };
      input: {
        boxSizing: string;
        width: string;
        height: number;
        padding: {
          top: number;
          right: number;
          bottom: number;
          left: number;
        };
        border: {
          style: string;
          width: number;
        };
        focus: {
          borderWidth: number;
        };
      };
      spacing: {
        xs: number;
        s: number;
        m: number;
        l: number;
      };
    };
  }
}
