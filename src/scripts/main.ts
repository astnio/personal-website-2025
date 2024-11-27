import 'boxicons';
import initColorSchemeDetector from './colorSchemeDetector';

initColorSchemeDetector();

document.addEventListener('astro:page-load', () => {
  initColorSchemeDetector();
});
