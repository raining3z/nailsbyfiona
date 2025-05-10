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
    primary: '#d291bc', // Soft pink-purple
    secondary: '#f8e1f4', // Pastel background
    backgroundPrimary: '#ffffff',
    backgroundSecondary: '#fef6fb', // Light pinkish cream
    border: '#e0e0e0',
    white: '#ffffff',
    heading: '#333333',
    highlight: '#fde2ff',
    midnightBlue: '#003366', // Optional for contrast
    mutedText: '#666666',
    text: '#333333',
    error: '#e53935',
  },
  fontSizes,
  typography: {
    p: {
      margin: 0,
      padding: 0,
      fontSize: fontSizes.smd,
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
