document.addEventListener('astro:page-load', () => {
  const navDialog = document.getElementById('nav-dialog');
  const btnOpenNavDialog = document.getElementById('btn-open-nav-dialog');
  const overlay = document.getElementById('overlay');

  function openDialog() {
    overlay!.setAttribute('data-active', 'true');
    navDialog!.setAttribute('data-active', 'true');
    document.body.setAttribute('data-scroll-active', 'false');
  }

  btnOpenNavDialog?.addEventListener('click', openDialog);
});
