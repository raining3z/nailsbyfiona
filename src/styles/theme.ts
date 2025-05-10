const fontSizes = {
  xs: '12px',
  sm: '14px',
  smd: '16px',
  md: '18px',
  lg: '24px',
  xl: '32px',
  xxl: '40px',
};

export const theme = {
  colors: {
    primary: '#333', // Earthy green
    secondary: '#a89f91', // Neutral beige accent
    backgroundPrimary: '#ffffff',
    backgroundSecondary: '#f8f3ea', // Soft cream
    border: '#ccc',
    white: '#ffffff',
    heading: '#111111',
    highlight: '#e0f7fa',
    midnightBlue: '#003366',
    mutedText: '#666666',
    text: '#333333',
    error: '#e53935', // Used in button.alert too
  },
  // note: i don't think these are being used as css is in Button.tsx
  button: {
    primary: {
      background: '#415c49', // Matches theme.primary
      color: '#ffffff',
      hover: '#234c39',
    },
    secondary: {
      background: '#f8f3ea',
      color: '#415c49',
      hover: '#ece6dc',
    },
    tertiary: {
      background: '#ffffff',
      color: '#415c49',
      border: '1px solid #ccc',
      hover: '#f2f2f2',
    },
    ghost: {
      background: 'transparent',
      color: '#415c49',
      border: '1px solid transparent',
      hover: '#f8f3ea',
    },
    blackLink: {
      background: '#000000',
      color: '#ffffff',
      hover: '#222222',
    },
    alert: {
      background: '#e53935', // Alert/danger
      color: '#ffffff',
      hover: '#c62828',
    },
    success: {
      background: '#28a745',
      color: '#ffffff',
      hover: '#218838',
    },
    neutral: {
      background: '#e0e0e0',
      color: '#333333',
      hover: '#c0c0c0',
    },
    disabled: {
      background: '#e0e0e0',
      color: '#888888',
      hover: '#e0e0e0',
    },
  },
  fontSizes,
  typography: {
    p: {
      margin: 0,
      padding: 0,
    },
    h1: {
      fontSize: fontSizes.xxl,
      margin: 0,
      padding: 0,
    },
    h2: {
      fontSize: fontSizes.xl,
      margin: 0,
      padding: 0,
    },
    h3: {
      fontSize: fontSizes.lg,
      margin: 0,
      padding: 0,
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '24px',
    full: '9999px',
  },
  widths: {
    maxWidth: '1280px',
  },
  breakpoints: {
    mobile: '767px',
    tablet: '1023px',
    desktop: '1024px',
  },
  media: {
    mobile: '(max-width: 767px)',
    tablet: '(max-width: 1023px)',
    desktop: '(min-width: 1024px)',
  },
};

export default theme;
