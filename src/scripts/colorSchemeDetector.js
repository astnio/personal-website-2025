export default function initColorSchemeDetector() {
  const documentRoot = document.querySelector(':root');

  const prefersLightTheme = window.matchMedia(
    '(prefers-color-scheme: light)'
  ).matches;

  function setColorScheme(colorScheme) {
    localStorage.setItem('colorScheme', colorScheme);
    documentRoot.setAttribute('data-color-scheme', colorScheme);
  }

  function checkUserPrefferedColorScheme() {
    if (prefersLightTheme) {
      setColorScheme('light');
    } else {
      setColorScheme('dark');
    }
  }

  checkUserPrefferedColorScheme();
}
