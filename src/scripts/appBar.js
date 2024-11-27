document.addEventListener('astro:page-load', () => {
  const navbar = document.getElementById('app-bar');

  const scrollActivationDistance = 150;

  let totalScrollDistance = 0;
  let prevScrollPos = window.scrollY;
  let isScrollingDown = true;
  let wasScrollingDown = false;

  function hideAppBar() {
    navbar.style.transform = 'translateY(-100%)';
  }

  function revealAppBar() {
    navbar.style.transform = 'translateY(0%)';
  }

  function updateScrollDireciton(scrollDir) {
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
    if (!isScrollingDown && totalScrollDistance > scrollActivationDistance) {
      revealAppBar();
      totalScrollDistance = 0;
    } else if (
      isScrollingDown &&
      totalScrollDistance > scrollActivationDistance
    ) {
      hideAppBar();
      totalScrollDistance = 0;
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
  }

  window.addEventListener('scroll', handleAppBarOnScroll);
});
