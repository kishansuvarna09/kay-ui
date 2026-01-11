// Shared utilities for Kay UI

/**
 * Deep merge objects - useful for merging theme configurations
 */
export function deepMerge<T extends object>(target: T, ...sources: Partial<T>[]): T {
  if (!sources.length) return target

  const source = sources.shift()

  if (source === undefined) return target

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          target[key] = {} as any
        }
        deepMerge(target[key], source[key] as any)
      } else {
        target[key] = source[key] as any
      }
    }
  }

  return deepMerge(target, ...sources)
}

/**
 * Check if value is an object
 */
function isObject(item: any): item is object {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * Generate unique ID - useful for accessibility attributes
 */
export function generateId(prefix: string = 'kay-ui'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Convert spacing token to CSS value
 * @param spacing - Spacing value (number or string)
 * @param base - Base spacing unit (default: 8px)
 */
export function spacingToCss(spacing: number | string, base: number = 8): string {
  if (typeof spacing === 'string') {
    return spacing
  }
  return `${spacing * base}px`
}

/**
 * Create responsive styles object
 * @param styles - Styles for different breakpoints
 */
export function responsiveStyles(styles: {
  xs?: React.CSSProperties
  sm?: React.CSSProperties
  md?: React.CSSProperties
  lg?: React.CSSProperties
  xl?: React.CSSProperties
}): Record<string, React.CSSProperties> {
  const result: Record<string, React.CSSProperties> = {}

  if (styles.xs) {
    result['@media (min-width: 0px)'] = styles.xs
  }
  if (styles.sm) {
    result['@media (min-width: 600px)'] = styles.sm
  }
  if (styles.md) {
    result['@media (min-width: 900px)'] = styles.md
  }
  if (styles.lg) {
    result['@media (min-width: 1200px)'] = styles.lg
  }
  if (styles.xl) {
    result['@media (min-width: 1536px)'] = styles.xl
  }

  return result
}

/**
 * Type guard for checking if value is not null or undefined
 */
export function isNotNil<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

/**
 * Type guard for checking if value is a function
 */
export function isFunction(value: any): value is Function {
  return typeof value === 'function'
}

/**
 * Create a className string from multiple conditions
 */
export function clsx(...classes: (string | boolean | undefined | null)[]): string {
  return classes
    .filter(Boolean)
    .join(' ')
}

/**
 * Debounce function - useful for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return function (...args: Parameters<T>): void {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Throttle function - useful for performance optimization
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let lastFunc: ReturnType<typeof setTimeout> | null = null
  let lastRan = 0

  return function (...args: Parameters<T>): void {
    if (!lastRan) {
      func(...args)
      lastRan = Date.now()
    } else {
      if (lastFunc) {
        clearTimeout(lastFunc)
      }
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}