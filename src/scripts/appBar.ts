document.addEventListener('astro:page-load', () => {
  const navbar = document.getElementById('app-bar');
  const drawerToggle = document.getElementById(
    'btn-open-nav-drawer'
  );
  const searchInput = document.getElementById('search-input-main');
  const blogNavWrapper = document.querySelector(
    '.blog-nav-wrapper'
  ) as HTMLElement;

  const scrollActivationDistance = 150;

  let totalScrollDistance = 0;
  let prevScrollPos = window.scrollY;
  let isScrollingDown = true;
  let wasScrollingDown = false;

  function hideAppBar() {
    navbar!.style.transform = 'translateY(-100%)';
    drawerToggle!.style.transform = 'translateY(-100%)';
    searchInput!.style.transform = 'translateY(-100%)';

    if (blogNavWrapper) {
      blogNavWrapper!.setAttribute('data-appbar-revealed', 'false');
    }
  }

  function revealAppBar() {
    navbar!.style.transform = 'translateY(0%)';
    drawerToggle!.style.transform = 'translateY(0%)';
    searchInput!.style.transform = 'translateY(0%)';

    if (blogNavWrapper) {
      blogNavWrapper!.setAttribute('data-appbar-revealed', 'true');
    }
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

    if (currentScrollPos <= 1) {
      revealAppBar();
    }
  }

  window.addEventListener('scroll', handleAppBarOnScroll);
});
