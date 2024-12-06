import 'boxicons';
import initColorSchemeDetector from './colorSchemeDetector';
import initSavedTheme from './themeInit';
import { initDrawerTouch } from './drawerTouchControl';

initColorSchemeDetector();
initSavedTheme();
initDrawerTouch();

document.addEventListener('astro:page-load', () => {
  initSavedTheme();
  initColorSchemeDetector();
});
