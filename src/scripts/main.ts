import initColorSchemeDetector from '@scripts/theme/initColorScheme';
import initSavedTheme from '@scripts/theme/initTheme';
import { initDrawerTouch } from './navDrawerTouchControl';

initColorSchemeDetector();
initSavedTheme();

initDrawerTouch();

document.addEventListener('astro:page-load', () => {
  initSavedTheme();
  initColorSchemeDetector();
});
