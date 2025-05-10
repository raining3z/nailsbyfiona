import type { ExtendTheme } from '@pigment-css/react/theme';

type ButtonOptions = {
  background: string;
  color: string;
  hover: string;
  border?: string;
};

declare module '@pigment-css/react/theme' {
  interface ThemeTokens {
    colors: {
      // [key: string]: string // you could so this, but you lose intellisense
      primary: string;
      secondary: string;
      backgroundPrimary: string;
      backgroundSecondary: string;
      border: string;
      heading: string;
      highlight: string;
      midnightBlue: string;
      mutedText: string;
      text: string;
      white: string;
      error: string;
    };
    button: {
      primary: ButtonOptions;
      secondary: ButtonOptions;
      tertiary: ButtonOptions;
      ghost: ButtonOptions;
      blackLink: ButtonOptions;
      alert: ButtonOptions;
      success: ButtonOptions;
      neutral: ButtonOptions;
      disabled: ButtonOptions;
    };
    fontSizes: {
      xs: string;
      sm: string;
      smd: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    typography: {
      p: {
        [key: string]: string;
      };
      h1: {
        [key: string]: string;
      };
      h2: {
        [key: string]: string;
      };
      h3: {
        [key: string]: string;
      };
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
    widths: {
      maxWidth: string;
    };
    breakpoints: {
      mobile: string;
      desktop: string;
      tablet: string;
    };
    media: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }

  interface ThemeArgs {
    theme: ExtendTheme<{
      tokens: ThemeTokens;
    }>;
  }
}
