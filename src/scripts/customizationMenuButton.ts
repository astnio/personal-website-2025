document.addEventListener('astro:page-load', () => {
  const customizationButtons = document.querySelectorAll(
    '.btn-show-customization-options'
  );

  const customizationOverlays = document.querySelectorAll(
    '.customization-menu-overlay'
  );

  const customizationMenus = document.querySelectorAll('.customization-menu');

  const menuCloseButtons = document.querySelectorAll(
    '.btn-close-customization-menu'
  );

  let menusOpen: boolean = false;

  function closeMenus() {
    customizationOverlays.forEach((overlay) => {
      overlay.setAttribute('data-active', 'false');
    });

    customizationMenus.forEach((menu) => {
      menu.setAttribute('data-active', 'false');
    });

    menusOpen = false;
  }

  function openMenus() {
    customizationOverlays.forEach((overlay) => {
      overlay.setAttribute('data-active', 'true');
    });

    customizationMenus.forEach((menu) => {
      menu.setAttribute('data-active', 'true');
    });

    menusOpen = true;
  }

  function toggleMenus() {
    if (menusOpen) {
      closeMenus();
    } else if (!menusOpen) {
      openMenus();
    }
  }

  customizationButtons.forEach((button) => {
    button.addEventListener('click', toggleMenus);
  });

  customizationOverlays.forEach((overlay) => {
    overlay.addEventListener('click', closeMenus);
  });

  menuCloseButtons.forEach((button) => {
    button.addEventListener('click', closeMenus);
  });

  closeMenus();
});
