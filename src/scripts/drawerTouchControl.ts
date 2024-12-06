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

    const touchDirection = {
      left: -1,
      right: 1,
    };

    // let prevPageX = 0;
    // let currPageX = 0;

    let prevTouchX = 0;
    let currTouchX = 0;

    let totalTouchDistance = 0;
    let movement = 0;

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

    function touchMoveLeft(): boolean {
      return currTouchDirection <= touchDirection.left;
    }

    function touchMoveRight(): boolean {
      return currTouchDirection >= touchDirection.right;
    }

    // function moveDrawer() {
    //   if (touchMoveLeft()) {
    //     movement = -normalizeNumbers(totalTouchDistance, window.innerWidth, 0);

    //     if (movement >= openThreshold) {
    //       console.log('HIT OPEN THRESHOLD!');
    //     }

    //     if (movement >= 0) {
    //       return;
    //     } else {
    //       navDrawer!.style.transform = `translateX(${movement}%)`;
    //     }
    //   } else if (touchMoveRight()) {
    //     //todo
    //   }
    // }

    function moveDrawer() {
      console.log('Total Touch Distance: ', totalTouchDistance);

      let normalizedTouchDistance = normalizeRange(
        totalTouchDistance,
        window.innerWidth,
        0
      );

      console.log('Normalized Touch Distance: ', normalizedTouchDistance);

      if (touchMoveRight()) {
        console.log('moved right');
        //todo
      } else if (touchMoveLeft()) {
        console.log('moved left');
        //todo
      }
    }

    document.addEventListener('touchstart', (event) => {
      const touch = event.changedTouches[0];
      // currPageX = 0;
      // movement = 0;
      // totalTouchDistance = 0;
    });

    document.addEventListener('touchmove', (event) => {
      // const touch = event.changedTouches[0];
      // currPageX = touch.pageX;
      // currTouchDirection = currPageX - prevPageX;
      // // let touchDistance = Math.abs(currPageX - prevPageX);
      // let touchDistance = currTouchDirection;
      // console.log('Touch Direction: ', currTouchDirection);
      // totalTouchDistance += touchDistance;
      // moveDrawer();
      // prevPageX = currPageX;

      const touch = event.changedTouches[0];

      currTouchX = touch.pageX;

      currTouchDirection = currTouchX - prevTouchX;

      let currTouchDistance = Math.abs(currTouchDirection);

      totalTouchDistance += currTouchDirection;

      moveDrawer();

      prevTouchX = currTouchX;
    });

    document.addEventListener('touchend', (event) => {
      // const touch = event.changedTouches[0];
      // if (movement <= -60) {
      //   openDrawer();
      // } else {
      //   closeDrawer();
      //   currPageX = 0;
      //   movement = 0;
      //   totalTouchDistance = 0;
      // }

      totalTouchDistance = 0;
    });
  });
}
