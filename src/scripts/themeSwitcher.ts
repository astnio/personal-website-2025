document.addEventListener('astro:page-load', () => {
  const themeSelect = document.getElementById(
    'color-theme-select'
  ) as HTMLInputElement;
  const docRoot = document.querySelector(':root');

  function setTheme(themeName: string) {
    console.log('set theme');
    localStorage.setItem('theme', themeName);
    docRoot!.setAttribute('data-theme', themeName);
  }

  function getTheme() {
    return localStorage.getItem('theme');
  }

  themeSelect.addEventListener('change', () => {
    switch (themeSelect.value) {
      case 'catppuccin':
        setTheme('catppuccin');
        break;
      case 'dracula':
        setTheme('dracula');
        break;
      case 'high-contrast':
        setTheme('high-contrast');
        break;
      default:
        setTheme('catppuccin');
        break;
    }
  });
});
