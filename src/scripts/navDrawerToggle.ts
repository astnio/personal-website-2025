document.addEventListener('astro:page-load', () => {
  const navDrawer = document.getElementById('nav-drawer');
  const btnOpenMenu = document.getElementById('btn-open-nav-drawer');
  const overlay = document.getElementById('drawer-overlay');

  function openDrawer() {
    overlay!.setAttribute('data-active', 'true');
    navDrawer!.setAttribute('data-active', 'true');
    navDrawer!.style.transform = 'translateX(0%)';
    btnOpenMenu!.setAttribute('data-action', 'close');
    document.body.setAttribute('data-scroll-active', 'false');
  }

  function closeDrawer() {
    overlay!.setAttribute('data-active', 'false');
    navDrawer!.setAttribute('data-active', 'false');
    navDrawer!.style.transform = 'translateX(100%)';
    btnOpenMenu!.setAttribute('data-action', 'open');
    document.body.setAttribute('data-scroll-active', 'true');
  }

  function handleDrawer() {
    switch (navDrawer!.getAttribute('data-active')) {
      case 'true':
        closeDrawer();
        break;
      case 'false':
        openDrawer();
        break;
      default:
        openDrawer();
        break;
    }
  }

  btnOpenMenu?.addEventListener('click', handleDrawer);
});
