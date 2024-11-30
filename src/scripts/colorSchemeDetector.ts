export default function initColorSchemeDetector() {
  const documentRoot = document.querySelector(':root');

  const prefersDarkTheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  function saveColorScheme(colorScheme: 'dark' | 'light') {
    localStorage.setItem('colorScheme', colorScheme);
  }

  function getSavedColorScheme() {
    return localStorage.getItem('colorScheme') as 'dark' | 'light';
  }

  function setColorScheme(colorScheme: 'dark' | 'light') {
    documentRoot!.setAttribute('data-color-scheme', colorScheme);

    if (colorScheme === 'dark') {
      documentRoot!.classList.remove('light');
      documentRoot!.classList.add('dark');
    } else if (colorScheme === 'light') {
      documentRoot!.classList.add('light');
      documentRoot!.classList.remove('dark');
    }
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
    const lightToggleLabels: NodeListOf<HTMLInputElement> =
      document.querySelectorAll('.light-toggle-theme-label');

    const lightToggles: NodeListOf<HTMLInputElement> =
      document.querySelectorAll('.chk-light-toggle');

    function toCaptialized(word: string) {
      return String(word).charAt(0).toUpperCase() + String(word).slice(1);
    }

    function updateLightToggleLabel() {
      const colorScheme = localStorage.getItem('colorScheme');

      lightToggleLabels.forEach((toggleLabel: HTMLInputElement) => {
        toggleLabel.innerText = toCaptialized(colorScheme as 'dark' | 'light');
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