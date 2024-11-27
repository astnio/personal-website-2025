import 'boxicons';
import initColorSchemeDetector from '../scripts/colorSchemeDetector';

initColorSchemeDetector();

document.addEventListener('astro:page-load', () => {
  initColorSchemeDetector();
});
