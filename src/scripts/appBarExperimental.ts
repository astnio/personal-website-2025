document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('app-bar');

  const scrollActivationDistance = 150;
  const scrollBeginActivationDistance = 50;

  let totalScrollDistance = 0;
  let prevScrollPos = window.scrollY;
  let isScrollingDown = true;
  let wasScrollingDown = false;

  function normalizeNumbers(val: number, max: number, min: number) {
    return Math.round(((val - min) / (max - min)) * 100);
  }

  function hideAppBar() {
    // navbar.style.transform = 'translateY(-100%)';
    let revealProgressInverse = 0;

    let revealProgress = normalizeNumbers(
      totalScrollDistance,
      0,
      scrollActivationDistance
    );

    if (revealProgress > 0) {
      revealProgressInverse = Math.abs(revealProgress - 100);
      navbar.style.transform = `translateY(-${revealProgressInverse}%)`;
    } else if (revealProgress <= 0) {
      return;
    }

    console.log('Reveal Progress: ' + revealProgress);
    console.log('Inverse reveal progress: ' + -revealProgressInverse);
    console.log('----');
  }

  function revealAppBar() {
    // navbar.style.transform = 'translateY(0%)';
    // let revealProgress = normalizeNumbers(
    //   totalScrollDistance,
    //   0,
    //   scrollActivationDistance
    // );
    // console.log(revealProgress);
    // if (revealProgress >= 100) {
    //   totalScrollDistance = 100;
    //   revealProgress = 100;
    // } else {
    //   navbar.style.transform = `translateY(${revealProgress}%)`;
    // }
  }

  function updateScrollDireciton(scrollDir: number) {
    if (scrollDir > 0) {
      isScrollingDown = true;
    } else if (scrollDir < 0) {
      isScrollingDown = false;
    }

    if (isScrollingDown !== wasScrollingDown) {
      totalScrollDistance = 0;
    }

    wasScrollingDown = isScrollingDown;
  }

  function updateAppBar() {
    if (
      !isScrollingDown &&
      totalScrollDistance > scrollBeginActivationDistance
    ) {
      revealAppBar();
      // totalScrollDistance = 0;
    } else if (isScrollingDown) {
      hideAppBar();
      // totalScrollDistance = 0;
    }
  }

  function handleAppBarOnScroll() {
    let currentScrollPos = window.scrollY;
    let scrollDirection = currentScrollPos - prevScrollPos;
    let scrollDistance = Math.abs(scrollDirection);

    totalScrollDistance += scrollDistance;

    updateScrollDireciton(scrollDirection);
    updateAppBar();

    prevScrollPos = currentScrollPos;

    // let test = normalizeNumbers(
    //   totalScrollDistance,
    //   0,
    //   scrollActivationDistance
    // );
    // console.log(`Normalized standard: ${test}`);
    // console.log(`Normalized inverse: ${Math.abs(test - 100)}`);
  }

  window.addEventListener('scroll', handleAppBarOnScroll);
});
