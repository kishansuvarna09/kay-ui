// Design tokens for Kay UI
// This provides a centralized place for design system values

export interface SpacingTokens {
  xxxs: string
  xxs: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
  xxxl: string
}

export interface ColorTokens {
  primary: {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
    main: string
    light: string
    dark: string
    contrastText: string
  }
  secondary: {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
    main: string
    light: string
    dark: string
    contrastText: string
  }
  error: {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
    main: string
    light: string
    dark: string
    contrastText: string
  }
  warning: {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
    main: string
    light: string
    dark: string
    contrastText: string
  }
  info: {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
    main: string
    light: string
    dark: string
    contrastText: string
  }
  success: {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
    main: string
    light: string
    dark: string
    contrastText: string
  }
  grey: {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }
  common: {
    black: string
    white: string
  }
}

export interface TypographyTokens {
  fontFamily: string
  h1: {
    fontSize: string
    fontWeight: number
    lineHeight: string
    letterSpacing: string
  }
  h2: {
    fontSize: string
    fontWeight: number
    lineHeight: string
    letterSpacing: string
  }
  h3: {
    fontSize: string
    fontWeight: number
    lineHeight: string
    letterSpacing: string
  }
  h4: {
    fontSize: string
    fontWeight: number
    lineHeight: string
    letterSpacing: string
  }
  h5: {
    fontSize: string
    fontWeight: number
    lineHeight: string
    letterSpacing: string
  }
  h6: {
    fontSize: string
    fontWeight: number
    lineHeight: string
    letterSpacing: string
  }
  subtitle1: {
    fontSize: string
    fontWeight: number
    lineHeight: string
    letterSpacing: string
  }
  subtitle2: {
    fontSize: string
    fontWeight: number
    lineHeight: string
    letterSpacing: string
  }
  body1: {
    fontSize: string
    fontWeight: number
    lineHeight: string
    letterSpacing: string
  }
  body2: {
    fontSize: string
    fontWeight: number
    lineHeight: string
    letterSpacing: string
  }
  button: {
    fontSize: string
    fontWeight: number
    lineHeight: string
    letterSpacing: string
    textTransform: string
  }
  caption: {
    fontSize: string
    fontWeight: number
    lineHeight: string
    letterSpacing: string
  }
  overline: {
    fontSize: string
    fontWeight: number
    lineHeight: string
    letterSpacing: string
    textTransform: string
  }
}

export interface Breakpoints {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

export interface Shadows {
  0: string
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  7: string
  8: string
  9: string
  10: string
  11: string
  12: string
  13: string
  14: string
  15: string
  16: string
  17: string
  18: string
  19: string
  20: string
  21: string
  22: string
  23: string
  24: string
}

export interface Transitions {
  easing: {
    easeInOut: string
    easeOut: string
    easeIn: string
    sharp: string
  }
  duration: {
    shortest: number
    shorter: number
    short: number
    standard: number
    complex: number
    enteringScreen: number
    leavingScreen: number
  }
}

export interface DesignTokens {
  spacing: SpacingTokens
  colors: ColorTokens
  typography: TypographyTokens
  breakpoints: Breakpoints
  shadows: Shadows
  transitions: Transitions
}

// Default design tokens (can be customized per theme)
export const defaultTokens: DesignTokens = {
  spacing: {
    xxxs: '2px',
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px'
  },
  colors: {
    primary: {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
      main: '#1976d2',
      light: '#64b5f6',
      dark: '#1565c0',
      contrastText: '#ffffff'
    },
    secondary: {
      50: '#fce4ec',
      100: '#f8bbd9',
      200: '#f48fb1',
      300: '#f06292',
      400: '#ec407a',
      500: '#e91e63',
      600: '#d81b60',
      700: '#c2185b',
      800: '#ad1457',
      900: '#880e4f',
      main: '#c2185b',
      light: '#f06292',
      dark: '#880e4f',
      contrastText: '#ffffff'
    },
    error: {
      50: '#ffebee',
      100: '#ffcdd2',
      200: '#ef9a9a',
      300: '#e57373',
      400: '#ef5350',
      500: '#f44336',
      600: '#e53935',
      700: '#d32f2f',
      800: '#c62828',
      900: '#b71c1c',
      main: '#d32f2f',
      light: '#e57373',
      dark: '#b71c1c',
      contrastText: '#ffffff'
    },
    warning: {
      50: '#fff8e1',
      100: '#ffecb3',
      200: '#ffe082',
      300: '#ffd54f',
      400: '#ffca28',
      500: '#ffc107',
      600: '#ffb300',
      700: '#ffa000',
      800: '#ff8f00',
      900: '#ff6f00',
      main: '#ffa000',
      light: '#ffd54f',
      dark: '#ff6f00',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    info: {
      50: '#e1f5fe',
      100: '#b3e5fc',
      200: '#81d4fa',
      300: '#4fc3f7',
      400: '#29b6f6',
      500: '#03a9f4',
      600: '#039be5',
      700: '#0288d1',
      800: '#0277bd',
      900: '#01579b',
      main: '#0288d1',
      light: '#4fc3f7',
      dark: '#01579b',
      contrastText: '#ffffff'
    },
    success: {
      50: '#e8f5e9',
      100: '#c8e6c9',
      200: '#a5d6a7',
      300: '#81c784',
      400: '#66bb6a',
      500: '#4caf50',
      600: '#43a047',
      700: '#388e3c',
      800: '#2e7d32',
      900: '#1b5e20',
      main: '#388e3c',
      light: '#81c784',
      dark: '#1b5e20',
      contrastText: '#ffffff'
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    },
    common: {
      black: '#000000',
      white: '#ffffff'
    }
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"',
    h1: {
      fontSize: '6rem',
      fontWeight: 300,
      lineHeight: '1.167',
      letterSpacing: '-0.01562em'
    },
    h2: {
      fontSize: '3.75rem',
      fontWeight: 300,
      lineHeight: '1.2',
      letterSpacing: '-0.00833em'
    },
    h3: {
      fontSize: '3rem',
      fontWeight: 400,
      lineHeight: '1.167',
      letterSpacing: '0em'
    },
    h4: {
      fontSize: '2.125rem',
      fontWeight: 400,
      lineHeight: '1.235',
      letterSpacing: '0.00735em'
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: '1.334',
      letterSpacing: '0em'
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: '1.6',
      letterSpacing: '0.0075em'
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.75',
      letterSpacing: '0.00938em'
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '1.57',
      letterSpacing: '0.00714em'
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.5',
      letterSpacing: '0.00938em'
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.43',
      letterSpacing: '0.01071em'
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '1.75',
      letterSpacing: '0.02857em',
      textTransform: 'uppercase'
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: '1.66',
      letterSpacing: '0.03333em'
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: '2.66',
      letterSpacing: '0.08333em',
      textTransform: 'uppercase'
    }
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  },
  shadows: {
    0: 'none',
    1: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    2: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    3: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    4: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    5: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    6: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    7: '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    8: '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    9: '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    10: '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    11: '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    12: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    13: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    14: '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    15: '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    16: '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    17: '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    18: '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    19: '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    20: '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    21: '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    22: '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    23: '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    24: '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    }
  }
}

// Utility functions for working with tokens
export function createTheme(tokens: Partial<DesignTokens> = {}): DesignTokens {
  return {
    ...defaultTokens,
    ...tokens,
    spacing: { ...defaultTokens.spacing, ...tokens.spacing },
    colors: { ...defaultTokens.colors, ...tokens.colors },
    typography: { ...defaultTokens.typography, ...tokens.typography },
    breakpoints: { ...defaultTokens.breakpoints, ...tokens.breakpoints },
    shadows: { ...defaultTokens.shadows, ...tokens.shadows },
    transitions: { ...defaultTokens.transitions, ...tokens.transitions }
  }
}

// Export default tokens
export default defaultTokens