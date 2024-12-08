export function initDrawerTouch() {
  document.addEventListener('astro:page-load', () => {
    const navDrawer = document.getElementById('nav-drawer') as HTMLElement;
    const navDrawerToggle = document.getElementById('btn-open-nav-drawer');

    const navDrawerTransitionDuration = '0.35s';
    const openThreshold: number = -75;
    const direction = {
      left: -1,
      right: 1,
    };

    let touchDirectionX = 0;

    let deltaY = 0;
    let deltaX = 0;

    let startTouchX: number = 0;
    let startTouchY: number = 0;
    // let prevTouchX: number = 0;

    let touchMoving: boolean = false;

    let totalTouchDistance: number = 0;
    let normalizedTouchDistance: number = 0;

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
    }

    function touchOpenDrawer() {
      const drawerTransform = (normalizedDistance: number): number => {
        return -100 + normalizedDistance;
      };

      normalizedTouchDistance = normalizeRange(
        Math.abs(totalTouchDistance),
        window.innerWidth,
        0
      );

      normalizedTouchDistance = drawerTransform(normalizedTouchDistance);

      navDrawer!.style.transform = `translateX(${normalizedTouchDistance}%)`;
    }

    function touchMoveRight(): boolean {
      return touchDirectionX >= direction.right;
    }

    document.addEventListener(
      'touchstart',
      (event) => {
        navDrawer!.style.transitionDuration = '0.0s';

        const touch = event.changedTouches[0];

        startTouchX = touch.clientX;
        startTouchY = touch.clientY;
      },
      { passive: false }
    );

    document.addEventListener(
      'touchmove',
      (event) => {
        const touch = event.changedTouches[0];

        totalTouchDistance = touch.clientX - startTouchX;

        if (!touchMoving) {
          deltaY = Math.abs(touch.clientY - startTouchY);
          deltaX = Math.abs(touch.clientX - startTouchX);
        }

        // prevTouchX = touch.clientX;

        touchDirectionX = touch.clientX - startTouchX;

        console.log(touchMoveRight());

        const userTouchOpenDrawer = deltaX > deltaY && event.cancelable;
        if (userTouchOpenDrawer) {
          event.preventDefault();
          touchOpenDrawer();
        } else {
          return;
        }
        touchMoving = true;
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
      touchMoving = false;
    });

    document.addEventListener('touchcancel', (event) => {
      resetTouchValues();
    });
  });
}
