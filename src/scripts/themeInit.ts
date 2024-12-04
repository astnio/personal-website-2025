export default function initColorSchemeDetector() {
  const themeSelect = document.getElementById(
    'color-theme-select'
  ) as HTMLInputElement;
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
    themeSelect!.value = themeName;
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
