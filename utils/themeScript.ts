export const themeScript = `(function() {
  function getInitialColorMode() {
    const preference = window.localStorage.getItem('theme')

    if (typeof preference === 'string') {
      return preference
    }

    const mediaQuery = '(prefers-color-scheme: dark)'
    const mql = window.matchMedia(mediaQuery)

    return mql.matches ? 'dark' : 'light'
  }

  function setInitialColorMode() {
    const colorMode = getInitialColorMode()

    if (colorMode === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    }

    window.__INITIAL_THEME__ = colorMode
  }

  setInitialColorMode();
})()`
