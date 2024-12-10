document.addEventListener('astro:page-load', () => {
  const customizationButtons = document.querySelectorAll(
    '.btn-show-customization-options'
  );

  const customizationOverlays = document.querySelectorAll(
    '.customization-menu-overlay'
  );

  function handleOnClick(event: Event) {
    const btn = event.target as HTMLElement;
    const menuWrapper = btn.closest('.customization-menu-wrapper');
    const menu = menuWrapper!.querySelector('.customization-menu');

    menu?.setAttribute('data-active', 'true');

    customizationOverlays.forEach((overlay) => {
      overlay.setAttribute('data-active', 'true');
    });
  }

  customizationButtons.forEach((button) => {
    button.addEventListener('click', handleOnClick);
  });

  customizationOverlays.forEach((overlay) => {
    overlay.addEventListener('click', () => {
      customizationButtons.forEach((button) => {
        const menuWrapper = button.closest('.customization-menu-wrapper');
        const menu = menuWrapper!.querySelector('.customization-menu');

        menu?.setAttribute('data-active', 'false');
      });
      overlay.setAttribute('data-active', 'false');
    });
  });
});
