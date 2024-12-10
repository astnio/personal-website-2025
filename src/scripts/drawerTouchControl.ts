export function initDrawerTouch() {
  document.addEventListener('astro:page-load', () => {
    const navDrawer = document.getElementById('nav-drawer') as HTMLElement;
    const navDrawerToggle = document.getElementById('btn-open-nav-drawer');
    const overlay = document.getElementById('overlay');

    const navDrawerTransitionDuration = '0.15s';
    const openThreshold: number = 75;
    const closeThreshold: number = 25;

    let deltaY = 0;
    let deltaX = 0;

    let initTouchMoveDeltaY = 0;
    let initTouchMoveDeltaX = 0;

    let startTouchX: number = 0;
    let startTouchY: number = 0;

    let touchMovePositionX: number = 0;
    let touchMovePositionY: number = 0;

    let drawerTransformPercent: number = 100;
    let touchMoving: boolean = false;
    let isDrawerOpen: boolean = false;

    navDrawerToggle?.addEventListener('click', () => {
      if (isDrawerOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    function normalizeRange(val: number, max: number, min: number) {
      return Math.round(((val - min) / (max - min)) * 100);
    }

    function openDrawer() {
      overlay!.setAttribute('data-active', 'true');
      navDrawer!.setAttribute('data-active', 'true');
      navDrawer!.style.transform = 'translateX(0%)';
      navDrawerToggle!.setAttribute('data-action', 'close');
      drawerTransformPercent = 0;
      isDrawerOpen = true;
    }

    function closeDrawer() {
      overlay!.setAttribute('data-active', 'false');
      navDrawer!.setAttribute('data-active', 'false');
      navDrawer!.style.transform = 'translateX(100%)';
      navDrawerToggle!.setAttribute('data-action', 'open');
      drawerTransformPercent = 100;
      isDrawerOpen = false;
    }

    function getDrawerTransformPercent(
      normalizedDistance: number,
      isClosingGesture: boolean
    ): number {
      if (isClosingGesture) {
        return Math.min(100, Math.max(0, normalizedDistance));
      } else {
        return Math.min(100, Math.max(0, 100 - normalizedDistance));
      }
    }

    function updateDrawerPosition(moveX: number) {
      navDrawer!.style.transitionDuration = '0.0s';

      const normalizedDistance = normalizeRange(
        Math.abs(moveX),
        window.innerWidth,
        0
      );

      const isClosingGesture =
        (isDrawerOpen && moveX > 0) || (!isDrawerOpen && moveX > 0);
      drawerTransformPercent = getDrawerTransformPercent(
        normalizedDistance,
        isClosingGesture
      );

      navDrawer!.style.transform = `translateX(${drawerTransformPercent}%)`;
    }

    const handleTouchStart = (event: TouchEvent): void => {
      navDrawer!.style.transitionDuration = '0.0s';
      const touch = event.changedTouches[0];
      startTouchX = touch.clientX;
      startTouchY = touch.clientY;
      touchMoving = false;
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

      const isHorizontalMove = initTouchMoveDeltaX > initTouchMoveDeltaY;
      const isCorrectDirection = isDrawerOpen
        ? touchMovePositionX > 0
        : touchMovePositionX < 0;

      if (isHorizontalMove && isCorrectDirection && event.cancelable) {
        event.preventDefault();
        updateDrawerPosition(touchMovePositionX);
      }

      touchMoving = true;
    };

    const handleTouchEnd = (event: TouchEvent): void => {
      navDrawer!.style.transitionDuration = navDrawerTransitionDuration;

      if (isDrawerOpen) {
        if (drawerTransformPercent > closeThreshold) {
          closeDrawer();
        } else {
          openDrawer();
        }
      } else {
        if (drawerTransformPercent < openThreshold) {
          openDrawer();
        } else {
          closeDrawer();
        }
      }

      touchMoving = false;
    };

    document.addEventListener('touchstart', handleTouchStart, {
      passive: false,
    });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('touchcancel', (event) => {
      navDrawer!.style.transitionDuration = navDrawerTransitionDuration;
      if (isDrawerOpen) {
        openDrawer();
      } else {
        closeDrawer();
      }
      touchMoving = false;
    });
  });
}
