import initColorSchemeDetector from './initColorScheme';
import initSavedTheme from './initTheme';
import { initDrawerTouch } from './navDrawerTouchControl';

initColorSchemeDetector();
initSavedTheme();

initDrawerTouch();

document.addEventListener('astro:page-load', () => {
  initSavedTheme();
  initColorSchemeDetector();
});
