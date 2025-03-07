document.addEventListener('astro:page-load', () => {
  const documentRoot = document.querySelector(':root');
  const lightToggles: NodeListOf<HTMLInputElement> = document.querySelectorAll(
    '.chk-light-switch-toggle'
  );
  const lightToggleLabels: NodeListOf<HTMLInputElement> =
    document.querySelectorAll('.light-switch-label');
  const blogBgImageLight = document.querySelector('.blog-bg-img-light');
  const blogBgImageDark = document.querySelector('.blog-bg-img-dark');

  function pageHasBlogBgImage() {
    if (blogBgImageDark && blogBgImageLight) return true;
    else return false;
  }

  function getSavedColorScheme() {
    return localStorage.getItem('colorScheme');
  }

  function saveColorScheme(colorScheme: 'light' | 'dark') {
    localStorage.setItem('colorScheme', colorScheme);
  }

  function setColorScheme(colorScheme: 'light' | 'dark') {
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

  function toggleColorScheme() {
    if (getSavedColorScheme() === 'dark') {
      setColorScheme('light');
      saveColorScheme('light');
      lightToggles.forEach((toggle) => {
        toggle.checked = false;
      });

      lightToggleLabels.forEach((toggleLabel: HTMLInputElement) => {
        toggleLabel.innerText = 'Light';
      });
    } else if (getSavedColorScheme() === 'light') {
      setColorScheme('dark');
      saveColorScheme('dark');
      lightToggles.forEach((toggle) => {
        toggle.checked = true;
      });

      lightToggleLabels.forEach((toggleLabel) => {
        toggleLabel.innerText = 'Dark';
      });
    }
  }

  lightToggles.forEach((toggle) => {
    toggle.addEventListener('change', toggleColorScheme);
  });
});
