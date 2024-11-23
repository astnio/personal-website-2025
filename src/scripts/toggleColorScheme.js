document.addEventListener('DOMContentLoaded', () => {
  const documentRoot = document.querySelector(':root');
  const lightToggles = document.querySelectorAll('.chk-light-toggle');
  const lightToggleLabels = document.querySelectorAll(
    '.light-toggle-theme-label'
  );

  function getSavedColorScheme() {
    return localStorage.getItem('colorScheme');
  }

  function saveColorScheme(colorScheme) {
    localStorage.setItem('colorScheme', colorScheme);
  }

  function setColorScheme(colorScheme) {
    documentRoot.setAttribute('data-color-scheme', colorScheme);
  }

  function toggleColorScheme() {
    if (getSavedColorScheme() === 'dark') {
      setColorScheme('light');
      saveColorScheme('light');
      lightToggles.forEach((toggle) => {
        toggle.checked = false;
      });

      lightToggleLabels.forEach((toggleLabel) => {
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
