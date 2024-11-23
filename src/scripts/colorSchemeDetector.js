export default function initColorSchemeDetector() {
  const documentRoot = document.querySelector(':root');

  const prefersDarkTheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
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
    if (prefersDarkTheme) {
      setColorScheme('dark');
      saveColorScheme('dark');
    } else {
      setColorScheme('light');
      saveColorScheme('light');
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
    const lightToggleLabels = document.querySelectorAll(
      '.light-toggle-theme-label'
    );

    const lightToggles = document.querySelectorAll('.chk-light-toggle');

    function toCaptialized(word) {
      return String(word).charAt(0).toUpperCase() + String(word).slice(1);
    }

    function updateLightToggleLabel() {
      const colorScheme = localStorage.getItem('colorScheme');

      lightToggleLabels.forEach((toggleLabel) => {
        toggleLabel.innerText = toCaptialized(colorScheme);
      });

      if (colorScheme === 'dark') {
        lightToggles.forEach((toggle) => {
          toggle.checked = true;
        });
      } else {
        lightToggles.forEach((toggle) => {
          toggle.checked = false;
        });
      }
    }

    updateLightToggleLabel();
  });

  checkSavedColorScheme();
}
