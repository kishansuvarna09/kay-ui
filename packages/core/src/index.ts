// Main exports for Kay UI Core package
// Components

export { default as Button } from "./Button/Button"
export type { KayButtonProps } from "./Button/Button"

export { default as Input } from "./Input/Input"
export type { KayInputProps } from "./Input/Input"

export { default as Card } from "./Card/Card"
export type { KayCardProps } from "./Card/Card"

// Export types for better developer experience
export type { KayButtonBaseProps } from "./Button/Button"
export type { KayInputBaseProps } from "./Input/Input"
export type { KayCardBaseProps } from "./Card/Card"

// Re-export MUI types for convenience
export type { SxProps, Theme } from "@mui/material/styles"

export type { ButtonProps as MuiButtonProps } from "@mui/material/Button"
export type { InputBaseProps as MuiInputBaseProps } from "@mui/material/InputBase"
export type { PaperProps as MuiPaperProps } from "@mui/material/Paper"
