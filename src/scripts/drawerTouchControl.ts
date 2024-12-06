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

    const touchDirection = {
      left: -1,
      right: 1,
    };

    let startTouchX = 0;
    let prevTouchX = 0;
    let totalTouchDistance = 0;
    let normalizedTouchDistance = 0;
    let currTouchDirection = 0;
    const openThreshold = -60;

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

    function touchMoveLeft(): boolean {
      return currTouchDirection <= touchDirection.left;
    }

    function touchMoveRight(): boolean {
      return currTouchDirection >= touchDirection.right;
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

      console.log('Normalized Touch Distance: ', normalizedTouchDistance);

      if (navDrawer!.style.transform !== 'translateX(0%)') {
        navDrawer!.style.transform = `translateX(${normalizedTouchDistance}%)`;
      }

      if (touchMoveRight()) {
        //todo
      } else if (touchMoveLeft()) {
        //todo
      }
    }

    document.addEventListener('touchstart', (event) => {
      const touch = event.changedTouches[0];

      startTouchX = touch.clientX;
      prevTouchX = touch.clientX;
      resetTouchValues();
    });

    document.addEventListener('touchmove', (event) => {
      const touch = event.changedTouches[0];

      totalTouchDistance = touch.clientX - startTouchX;
      currTouchDirection = touch.clientX - prevTouchX;
      moveDrawer();
      prevTouchX = touch.clientX;
    });

    document.addEventListener('touchend', (event) => {
      resetTouchValues();

      const navDrawerTransformX = new DOMMatrix(
        window.getComputedStyle(navDrawer).transform
      ).e;

      const navDrawerTransformXPercent = normalizeRange(
        navDrawerTransformX,
        window.innerWidth,
        0
      );

      console.log(navDrawerTransformXPercent);

      if (navDrawerTransformXPercent >= openThreshold) {
        openDrawer();
      } else {
        closeDrawer();
      }
    });

    document.addEventListener('touchcancel', (event) => {
      resetTouchValues();
    });
  });
}
