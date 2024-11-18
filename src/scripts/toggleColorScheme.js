document.addEventListener('DOMContentLoaded', () => {
  const documentRoot = document.querySelector(':root');
  const lightToggle = document.getElementById('btn-light-toggle');

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
    console.log('click');
    if (getSavedColorScheme() === 'dark') {
      setColorScheme('light');
      saveColorScheme('light');
    } else if (getSavedColorScheme() === 'light') {
      setColorScheme('dark');
      saveColorScheme('dark');
    }
  }

  lightToggle.addEventListener('click', toggleColorScheme);
});
