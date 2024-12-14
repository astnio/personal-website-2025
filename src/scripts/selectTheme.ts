document.addEventListener('astro:page-load', () => {
  const themeSelects: NodeListOf<HTMLInputElement> = document.querySelectorAll(
    '.color-theme-select'
  );

  const docRoot = document.querySelector(':root');

  function setTheme(themeName: string) {
    localStorage.setItem('theme', themeName);
    themeSelects.forEach((themeSelect) => {
      themeSelect.value = themeName;
    });
    docRoot!.setAttribute('data-theme', themeName);
  }

  // function getTheme() {
  //   return localStorage.getItem('theme');
  // }

  themeSelects.forEach((themeSelect) => {
    themeSelect.addEventListener('change', () => {
      switch (themeSelect.value) {
        case 'catppuccin':
          setTheme('catppuccin');
          break;
        case 'test':
          setTheme('test');
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
});
