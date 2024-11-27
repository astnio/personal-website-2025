document.addEventListener('DOMContentLoaded', () => {
  const documentRoot = document.querySelector(':root');
  const lightToggles: NodeListOf<HTMLInputElement> =
    document.querySelectorAll('.chk-light-toggle');
  const lightToggleLabels: NodeListOf<HTMLInputElement> =
    document.querySelectorAll('.light-toggle-theme-label');

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
    } else if (colorScheme === 'light') {
      documentRoot!.classList.add('light');
      documentRoot!.classList.remove('dark');
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
