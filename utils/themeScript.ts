function setInitialColorMode() {
  function getInitialColorMode() {
    const preference = window.localStorage.getItem('theme')

    if (typeof preference === 'string') {
      return preference
    }

    const mediaQuery = '(prefers-color-scheme: dark)'
    const mql = window.matchMedia(mediaQuery)

    return mql.matches ? 'dark' : 'light'
  }

  const colorMode = getInitialColorMode()

  if (colorMode === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
  }
}

export const themeScript = `(function() {
  ${setInitialColorMode.toString()}
  setInitialColorMode();
})()`
