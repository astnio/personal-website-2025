document.addEventListener('astro:page-load', () => {
  const overlay = document.getElementById('overlay');
  const navDialog = document.getElementById('nav-dialog');
  const navLinks = document.querySelectorAll('.nav-link');

  function closeDialog() {
    navDialog!.setAttribute('data-active', 'false');
    overlay!.setAttribute('data-active', 'false');
    document.body.setAttribute('data-scroll-active', 'true');
  }

  overlay!.addEventListener('click', () => {
    closeDialog();
  });

  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', closeDialog);
  });

  /*
    This checks page height to detect scroll bar and adds margin to
    prevent page from shifting when scrollbar gets removed when the scroll-y
    is disabled when the drawer is enabled
    */
  function checkPageScrollHeight() {
    if (window.innerHeight < document.documentElement.scrollHeight) {
      document.body.setAttribute('data-page-height-scroll', 'true');
    } else {
      document.body.setAttribute('data-page-height-scroll', 'false');
    }
  }

  checkPageScrollHeight();
  window.addEventListener('resize', checkPageScrollHeight);
});
