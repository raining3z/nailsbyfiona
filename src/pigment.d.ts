import type { ExtendTheme } from '@pigment-css/react/theme';

declare module '@pigment-css/react/theme' {
  interface ThemeTokens {
    colors: {
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
    // Optional: Uncomment if you ever need button theme again
    // button: {
    //   primary: ButtonOptions;
    //   secondary: ButtonOptions;
    //   tertiary: ButtonOptions;
    //   ghost: ButtonOptions;
    //   blackLink: ButtonOptions;
    //   alert: ButtonOptions;
    //   success: ButtonOptions;
    //   neutral: ButtonOptions;
    //   disabled: ButtonOptions;
    // };
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
        margin: string;
        padding: string;
        fontSize?: string;
      };
      h1: {
        fontSize: string;
        margin: string;
        padding: string;
      };
      h2: {
        fontSize: string;
        margin: string;
        padding: string;
      };
      h3: {
        fontSize: string;
        margin: string;
        padding: string;
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
