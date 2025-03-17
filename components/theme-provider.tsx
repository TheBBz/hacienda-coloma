'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // This approach prevents hydration mismatch by not rendering anything until client-side
  const [mounted, setMounted] = React.useState(false)
  
  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // If not mounted yet, render a div with no theme-specific attributes
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>
  }

  // Once mounted on client, render with the theme provider
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
