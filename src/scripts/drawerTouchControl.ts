export function initDrawerTouch() {
  document.addEventListener('astro:page-load', () => {
    const navDrawer = document.getElementById('nav-drawer') as HTMLElement;
    const navDrawerToggle = document.getElementById('btn-open-nav-drawer');

    const navDrawerTransitionDuration = '0.35s';
    const openThreshold: number = -75;

    let deltaY = 0;
    let deltaX = 0;

    let startTouchX: number = 0;
    let startTouchY: number = 0;
    let prevTouchX: number = 0;

    let currentlyTouching: boolean = false;

    let totalTouchDistance: number = 0;
    let normalizedTouchDistance: number = 0;
    let currTouchDirection: number = 0;

    function normalizeRange(val: number, max: number, min: number) {
      return Math.round(((val - min) / (max - min)) * 100);
    }

    function openDrawer() {
      navDrawer!.setAttribute('data-active', 'true');
      navDrawer!.style.transform = 'translateX(0%)';
      navDrawerToggle!.setAttribute('data-action', 'close');
    }

    function closeDrawer() {
      navDrawer!.setAttribute('data-active', 'false');
      navDrawer!.style.transform = 'translateX(-100%)';
      navDrawerToggle!.setAttribute('data-action', 'open');
    }

    function resetTouchValues() {
      totalTouchDistance = 0;
      normalizedTouchDistance = 0;
      currTouchDirection = 0;
    }

    function drawerTransform(normalizedDistance: number): number {
      return -100 + normalizedDistance;
    }

    function touchOpenDrawer() {
      normalizedTouchDistance = normalizeRange(
        Math.abs(totalTouchDistance),
        window.innerWidth,
        0
      );

      normalizedTouchDistance = drawerTransform(normalizedTouchDistance);

      navDrawer!.style.transform = `translateX(${normalizedTouchDistance}%)`;
    }

    document.addEventListener(
      'touchstart',
      (event) => {
        navDrawer!.style.transitionDuration = '0.0s';

        const touch = event.changedTouches[0];

        startTouchX = touch.clientX;
        startTouchY = touch.clientY;

        prevTouchX = touch.clientX;
        resetTouchValues();
      },
      { passive: false }
    );

    document.addEventListener(
      'touchmove',
      (event) => {
        const touch = event.changedTouches[0];

        totalTouchDistance = touch.clientX - startTouchX;
        currTouchDirection = touch.clientX - prevTouchX;

        if (!currentlyTouching) {
          deltaY = Math.abs(touch.clientY - startTouchY);
          deltaX = Math.abs(touch.clientX - startTouchX);
        }

        const userTouchOpenDrawer = deltaX > deltaY && event.cancelable;
        if (userTouchOpenDrawer) {
          event.preventDefault();
          touchOpenDrawer();
        } else {
          return;
        }
        currentlyTouching = true;

        prevTouchX = touch.clientX;
      },
      { passive: false }
    );

    document.addEventListener('touchend', (event) => {
      navDrawer!.style.transitionDuration = navDrawerTransitionDuration;

      if (
        normalizedTouchDistance !== 0 &&
        Math.abs(normalizedTouchDistance) < Math.abs(openThreshold)
      ) {
        openDrawer();
      } else {
        closeDrawer();
      }

      resetTouchValues();
      currentlyTouching = false;
    });

    document.addEventListener('touchcancel', (event) => {
      resetTouchValues();
    });
  });
}
