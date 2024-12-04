document.addEventListener('astro:page-load', () => {
  const documentBody = document.querySelector('body');
  const fontSelect = document.getElementById(
    'user-font-select'
  ) as HTMLInputElement;

  function initFont() {
    const userSavedFont = localStorage.getItem('font');

    if (!userSavedFont) {
      setFont('sans-serif');
    } else {
      setFont(userSavedFont);
    }
  }

  function setFont(font: string) {
    localStorage.setItem('font', font);
    fontSelect.value = font;
    documentBody!.setAttribute('data-font', font);
  }

  fontSelect!.addEventListener('change', () => {
    switch (fontSelect!.value) {
      case 'sans-serif':
        setFont('sans-serif');
        break;
      case 'serif':
        setFont('serif');
        break;
      case 'hyperlegible':
        setFont('hyperlegible');
        break;
      default:
        setFont('serif');
    }
  });

  initFont();
});
