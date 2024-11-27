document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('app-bar');

  let prevScrollPos = window.scrollY;

  const scrollActivationHeight = 150;

  let totalScrollDistance = 0;
  let userIsScrollingDown = true;
  let userWasScrollingDown = false;

  function hideAppBar() {
    navbar.style.transform = 'translateY(-100%)';
  }

  function revealAppBar() {
    navbar.style.transform = 'translateY(0%)';
  }

  function updateScrollDireciton(currScrollDir) {
    if (currScrollDir > 0) {
      userIsScrollingDown = true;
    } else if (currScrollDir < 0) {
      userIsScrollingDown = false;
    }

    if (userIsScrollingDown !== userWasScrollingDown) {
      totalScrollDistance = 0;
    }

    userWasScrollingDown = userIsScrollingDown;
  }

  function handleAppBarOnScroll() {
    let currentScrollPos = window.scrollY;

    let currentScrollDirection = currentScrollPos - prevScrollPos;
    let currentScrollDistance = Math.abs(currentScrollPos - prevScrollPos);

    totalScrollDistance = totalScrollDistance + currentScrollDistance;

    updateScrollDireciton(currentScrollDirection);

    if (!userIsScrollingDown && totalScrollDistance > scrollActivationHeight) {
      revealAppBar();
      totalScrollDistance = 0;
    } else if (
      userIsScrollingDown &&
      totalScrollDistance > scrollActivationHeight
    ) {
      hideAppBar();
      totalScrollDistance = 0;
    }

    prevScrollPos = currentScrollPos;
  }

  window.addEventListener('scroll', handleAppBarOnScroll);
});
