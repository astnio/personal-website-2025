export function initDrawerTouch() {
  document.addEventListener('astro:page-load', () => {
    /*** TESTING  ***/

    // document.addEventListener('touchstart', (event) => {
    //   [...event.changedTouches].forEach((touch) => {
    //     const dot = document.createElement('div');

    //     dot.classList.add('touch-dot');
    //     dot.style.top = `${touch.pageY}px`;
    //     dot.style.left = `${touch.pageX}px`;
    //     dot.id = touch.identifier.toString();

    //     document.body.append(dot);
    //   });
    // });

    // document.addEventListener('touchmove', (event) => {
    //   [...event.changedTouches].forEach((touch) => {
    //     const dot = document.getElementById(touch.identifier.toString());

    //     dot!.style.top = `${touch.pageY}px`;
    //     dot!.style.left = `${touch.pageX}px`;
    //   });
    // });

    // document.addEventListener('touchend', (event) => {
    //   [...event.changedTouches].forEach((touch) => {
    //     const dot = document.getElementById(touch.identifier.toString());

    //     dot!.remove();
    //   });
    // });

    /*** Actual Logic  ***/
    const navDrawer = document.getElementById('nav-drawer') as HTMLElement;
    const navDrawerToggle = document.getElementById('btn-open-nav-drawer');

    const navDrawerTransitionDuration = '0.35s';

    const touchDirection = {
      left: -1,
      right: 1,
    };

    let startTouchDirection = {
      initiated: false,
      direction: 0,
    };

    let deltaY = 0;
    let deltaX = 0;

    let startTouchX: number = 0;
    let startTouchY: number = 0;
    let prevTouchX: number = 0;

    let currentlyTouching: boolean = false;

    let totalTouchDistance: number = 0;
    let normalizedTouchDistance: number = 0;
    let currTouchDirection: number = 0;
    const openThreshold: number = -75;

    function normalizeRange(val: number, max: number, min: number) {
      return Math.round(((val - min) / (max - min)) * 100);
    }

    function openDrawer() {
      navDrawer!.setAttribute('data-active', 'true');
      navDrawer!.style.transform = 'translateX(0%)';
      navDrawerToggle!.setAttribute('data-action', 'close');
    }

    function closeDrawer() {
      console.log('closing lol');
      navDrawer!.setAttribute('data-active', 'false');
      navDrawer!.style.transform = 'translateX(-100%)';
      navDrawerToggle!.setAttribute('data-action', 'open');
    }

    function resetTouchValues() {
      totalTouchDistance = 0;
      normalizedTouchDistance = 0;
      currTouchDirection = 0;
      startTouchDirection.initiated = false;
    }

    function touchMoveLeft(): boolean {
      return currTouchDirection <= touchDirection.left;
    }

    function touchMoveRight(): boolean {
      return currTouchDirection >= touchDirection.right;
    }

    function startTouchLeft(): boolean {
      return startTouchDirection.direction <= touchDirection.left;
    }

    function startTouchRight(): boolean {
      return startTouchDirection.direction >= touchDirection.right;
    }

    function drawerTransform(normalizedDistance: number): number {
      return -100 + normalizedDistance;
    }

    function moveDrawer() {
      normalizedTouchDistance = normalizeRange(
        Math.abs(totalTouchDistance),
        window.innerWidth,
        0
      );

      normalizedTouchDistance = drawerTransform(normalizedTouchDistance);

      if (touchDirection.right) {
        navDrawer!.style.transform = `translateX(${normalizedTouchDistance}%)`;
      }
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

        if (!currentlyTouching) {
          deltaY = Math.abs(touch.clientY - startTouchY);
          deltaX = Math.abs(touch.clientX - startTouchX);
        }

        totalTouchDistance = touch.clientX - startTouchX;
        currTouchDirection = touch.clientX - prevTouchX;

        if (!startTouchDirection.initiated) {
          startTouchDirection.direction = currTouchDirection;
        }

        startTouchDirection.initiated = true;

        if (deltaX > deltaY && event.cancelable) {
          // No page scrolling, can open drawer
          event.preventDefault();
          moveDrawer();
        } else {
          // Cannot open drawer, allowed page scrolling
          return;
        }

        prevTouchX = touch.clientX;

        currentlyTouching = true;
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
