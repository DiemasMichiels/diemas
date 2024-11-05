import { create } from 'zustand'

type GlobalState = {
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
}

export const useGlobalStore = create<GlobalState>((set) => ({
  theme:
    typeof window !== 'undefined' && window.__INITIAL_THEME__
      ? window.__INITIAL_THEME__
      : 'light',
  setTheme: (theme) => {
    // Update localStorage when theme changes
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme)
      document.documentElement.setAttribute('data-theme', theme)
    }

    set({ theme })
  },
}))
