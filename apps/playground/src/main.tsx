import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { defaultTokens } from '@kay-ui/tokens'

// Create MUI theme from Kay UI tokens
const theme = createTheme({
  palette: {
    primary: defaultTokens.colors.primary,
    secondary: defaultTokens.colors.secondary,
    error: defaultTokens.colors.error,
    warning: defaultTokens.colors.warning,
    info: defaultTokens.colors.info,
    success: defaultTokens.colors.success,
  },
  spacing: (factor: number) => {
    const spacingValues = [
      defaultTokens.spacing.xxxs,
      defaultTokens.spacing.xxs,
      defaultTokens.spacing.xs,
      defaultTokens.spacing.sm,
      defaultTokens.spacing.md,
      defaultTokens.spacing.lg,
      defaultTokens.spacing.xl,
      defaultTokens.spacing.xxl,
      defaultTokens.spacing.xxxl,
    ]
    return spacingValues[factor] || `${factor * 8}px`
  },
  typography: {
    fontFamily: defaultTokens.typography.fontFamily,
  },
  shadows: defaultTokens.shadows,
  transitions: defaultTokens.transitions,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)