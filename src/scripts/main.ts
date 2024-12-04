import 'boxicons';
import initColorSchemeDetector from './colorSchemeDetector';
import initSavedTheme from './themeInit';

initColorSchemeDetector();
initSavedTheme();

document.addEventListener('astro:page-load', () => {
  initColorSchemeDetector();
});
