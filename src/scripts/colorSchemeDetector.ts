export default function initColorSchemeDetector() {
  const documentRoot = document.querySelector(':root');
  const blogBgImageLight = document.querySelector('.blog-bg-img-light');
  const blogBgImageDark = document.querySelector('.blog-bg-img-dark');

  const prefersDarkTheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  function pageHasBlogBgImage() {
    if (blogBgImageDark && blogBgImageLight) return true;
    else return false;
  }

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
      if (pageHasBlogBgImage()) {
        blogBgImageDark!.setAttribute('data-active', 'true');
        blogBgImageLight!.setAttribute('data-active', 'false');
      }
    } else if (colorScheme === 'light') {
      documentRoot!.classList.add('light');
      documentRoot!.classList.remove('dark');
      if (pageHasBlogBgImage()) {
        blogBgImageDark!.setAttribute('data-active', 'false');
        blogBgImageLight!.setAttribute('data-active', 'true');
      }
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

  document.addEventListener('astro:page-load', () => {
    const lightToggleLabels: NodeListOf<HTMLInputElement> =
      document.querySelectorAll('.light-switch-label');

    const lightToggles: NodeListOf<HTMLInputElement> =
      document.querySelectorAll('.chk-light-switch-toggle');

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
