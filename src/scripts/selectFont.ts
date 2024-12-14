document.addEventListener('astro:page-load', () => {
  const documentBody = document.querySelector('body');
  const fontSelects: NodeListOf<HTMLInputElement> =
    document.querySelectorAll('.user-font-select');

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
    fontSelects.forEach((fontSelect) => {
      fontSelect.value = font;
    });
    documentBody!.setAttribute('data-font', font);
  }

  fontSelects.forEach((fontSelect) => {
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
  });

  initFont();
});
