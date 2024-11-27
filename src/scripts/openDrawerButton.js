document.addEventListener('astro:page-load', () => {
  console.log('heyyy');
  const navDrawer = document.getElementById('nav-drawer');
  const drawerOverlay = document.getElementById('overlay');
  const btnOpenMenu = document.getElementById('btn-open-nav-drawer');
  const overlay = document.getElementById('overlay');

  function openDrawer() {
    overlay.setAttribute('data-active', 'true');
    navDrawer?.setAttribute('data-active', 'true');
    drawerOverlay?.setAttribute('data-active', 'true');
    document.body.setAttribute('data-scroll-active', 'false');
  }

  btnOpenMenu?.addEventListener('click', openDrawer);
});
