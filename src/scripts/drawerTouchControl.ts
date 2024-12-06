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
    const navDrawer = document.getElementById('nav-drawer');
    const navDrawerToggle = document.getElementById('btn-open-nav-drawer');

    let prevPageX = 0;
    let currPageX = 0;
    let totalTouchDistance = 0;
    let movement = 0;

    let touchDirection = 0;

    function normalizeNumbers(val: number, max: number, min: number) {
      return Math.round(((val - min) / (max - min)) * 100);
    }

    function reverseNormalizeNumbers(val: number, min: number, max: number) {
      return Math.round(((val - max) / (min - max)) * 100);
    }

    function moveDrawer() {
      if (touchDirection >= 1) {
        movement = -reverseNormalizeNumbers(
          totalTouchDistance,
          window.innerWidth,
          0
        );

        console.log('Touch Move: ', movement);
        console.log('Nav Drawer Transform: ', navDrawer!.style.transform);

        if (movement >= -60) {
          console.log('HIT OPEN THRESHOLD!');
        }

        if (movement >= 0) {
          return;
        } else {
          navDrawer!.style.transform = `translateX(${movement}%)`;
        }
      }
    }

    document.addEventListener('touchstart', (event) => {
      const touch = event.changedTouches[0];
      currPageX = 0;
      movement = 0;
      totalTouchDistance = 0;
    });

    document.addEventListener('touchmove', (event) => {
      const touch = event.changedTouches[0];
      currPageX = touch.pageX;

      touchDirection = currPageX - prevPageX;
      let touchDistance = Math.abs(currPageX - prevPageX);

      console.log('Touch Direction: ', touchDirection);

      totalTouchDistance += touchDistance;

      moveDrawer();

      prevPageX = currPageX;
    });

    document.addEventListener('touchend', (event) => {
      const touch = event.changedTouches[0];

      if (movement >= -60) {
        navDrawer!.setAttribute('data-active', 'true');
        navDrawer!.style.transform = 'translateX(0%)';
        navDrawerToggle!.setAttribute('data-action', 'close');
        return;
      } else {
        navDrawer!.style.transform = `translateX(-100%)`;
      }

      currPageX = 0;
      movement = 0;
      totalTouchDistance = 0;
    });
  });
}
