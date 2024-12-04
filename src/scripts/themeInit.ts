export default function initColorSchemeDetector() {
  const documentRoot = document.querySelector(':root');

  const defaultTheme = 'catppuccin';

  function saveTheme(themeName: string) {
    localStorage.setItem('theme', themeName);
  }

  function getSavedTheme() {
    return localStorage.getItem('theme') as string;
  }

  function setTheme(themeName: string) {
    localStorage.setItem('theme', themeName);
    documentRoot!.setAttribute('data-theme', themeName);
  }

  function initSavedTheme() {
    if (getSavedTheme()) {
      setTheme(getSavedTheme());
    } else {
      documentRoot!.setAttribute('data-theme', defaultTheme);
    }
  }

  initSavedTheme();
}
