document.addEventListener('astro:page-load', () => {
  const navDrawer = document.getElementById('nav-drawer');
  const btnOpenMenu = document.getElementById('btn-open-nav-drawer');
  const overlay = document.getElementById('overlay');

  function openDrawer() {
    overlay!.setAttribute('data-active', 'true');
    navDrawer!.setAttribute('data-active', 'true');
    document.body.setAttribute('data-scroll-active', 'false');
  }

  btnOpenMenu?.addEventListener('click', openDrawer);
});
