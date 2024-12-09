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

    let deltaY = 0;
    let deltaX = 0;

    let initTouchMoveDeltaY = 0;
    let initTouchMoveDeltaX = 0;

    let startTouchX: number = 0;
    let startTouchY: number = 0;

    let touchMovePositionX: number = 0;
    let touchMovePositionY: number = 0;
    let drawerTransformPercent: number = 0;

    let touchMoving: boolean = false;
    let touchStartRight: boolean = false;

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
      touchMovePositionX = 0;
      drawerTransformPercent = 0;
    }

    function getDrawerTransformPercent(normalizedDistance: number): number {
      return -100 + normalizedDistance;
    }

    function touchOpenDrawer() {
      drawerTransformPercent = normalizeRange(
        Math.abs(touchMovePositionX),
        window.innerWidth,
        0
      );

      drawerTransformPercent = getDrawerTransformPercent(
        drawerTransformPercent
      );

      navDrawer!.style.transform = `translateX(${drawerTransformPercent}%)`;
    }

    function touchMoveRight(): boolean {
      return touchMovePositionX >= direction.right;
    }

    const handleTouchStart = (event: TouchEvent): void => {
      navDrawer!.style.transitionDuration = '0.0s';

      const touch = event.changedTouches[0];

      startTouchX = touch.clientX;
      startTouchY = touch.clientY;
    };

    const handleTouchMove = (event: TouchEvent): void => {
      const touch = event.changedTouches[0];

      touchMovePositionX = touch.clientX - startTouchX;
      touchMovePositionY = touch.clientY - startTouchY;

      deltaX = Math.abs(touchMovePositionX);
      deltaY = Math.abs(touchMovePositionY);

      if (!touchMoving) {
        initTouchMoveDeltaX = deltaX;
        initTouchMoveDeltaY = deltaY;
      }

      touchStartRight = touchMoveRight();

      if (touchStartRight) {
        const drawerOpenMode =
          initTouchMoveDeltaX > initTouchMoveDeltaY && event.cancelable;

        if (drawerOpenMode) {
          event.preventDefault();
          touchOpenDrawer();
        }
      } else {
        closeDrawer();
      }

      touchMoving = true;
    };

    const handleTouchEnd = (event: TouchEvent): void => {
      navDrawer!.style.transitionDuration = navDrawerTransitionDuration;

      if (
        drawerTransformPercent !== 0 &&
        Math.abs(drawerTransformPercent) < Math.abs(openThreshold)
      ) {
        openDrawer();
      } else {
        closeDrawer();
      }

      // resetTouchValues();
      touchMoving = false;
    };

    document.addEventListener('touchstart', handleTouchStart, {
      passive: false,
    });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('touchcancel', (event) => {
      // resetTouchValues();
    });
  });
}
