import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './global.css'
import { ThemeProvider } from './components/theme/theme-provider.tsx'
import { Toaster } from './components/ui/sonner.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider
      defaultTheme="light"
      storageKey="@Clients:theme"
    >
      <App />
      <Toaster
        position="bottom-right"
        richColors
      />
    </ThemeProvider>
  </React.StrictMode>
)
