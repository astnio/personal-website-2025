export default function initColorSchemeDetector() {
  const documentRoot = document.querySelector(':root');

  const prefersLightTheme = window.matchMedia(
    '(prefers-color-scheme: light)'
  ).matches;

  function saveColorScheme(colorScheme) {
    localStorage.setItem('colorScheme', colorScheme);
  }

  function getSavedColorScheme() {
    return localStorage.getItem('colorScheme');
  }

  function setColorScheme(colorScheme) {
    documentRoot.setAttribute('data-color-scheme', colorScheme);
  }

  function setPrefferedColorScheme() {
    if (prefersLightTheme) {
      setColorScheme('light');
      saveColorScheme('light');
    } else {
      setColorScheme('dark');
      saveColorScheme('dark');
    }
  }

  function checkSavedColorScheme() {
    if (getSavedColorScheme()) {
      setColorScheme(getSavedColorScheme());
    } else {
      setPrefferedColorScheme();
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const lightToggleLabel = document.getElementById(
      'light-toggle-theme-label'
    );

    function toCaptialized(word) {
      return String(word).charAt(0).toUpperCase() + String(word).slice(1);
    }

    function updateLightToggleLabel() {
      const colorScheme = localStorage.getItem('colorScheme');

      lightToggleLabel.innerText = toCaptialized(colorScheme);
    }

    updateLightToggleLabel();
  });

  checkSavedColorScheme();
}
