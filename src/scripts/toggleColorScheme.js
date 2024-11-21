document.addEventListener('DOMContentLoaded', () => {
  const documentRoot = document.querySelector(':root');
  const lightToggle = document.getElementById('chk-light-toggle');
  const lightToggleLabel = document.getElementById('light-toggle-theme-label');

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
      lightToggleLabel.innerText = 'Light';
      lightToggle.checked = false;
    } else if (getSavedColorScheme() === 'light') {
      setColorScheme('dark');
      saveColorScheme('dark');
      lightToggleLabel.innerText = 'Dark';
      lightToggle.checked = true;
    }
  }

  lightToggle.addEventListener('change', toggleColorScheme);
});
