document.addEventListener('astro:page-load', () => {
  const customizationButtons = document.querySelectorAll('.btn-customize');

  const allCustomizeButtonsIcons = document.querySelectorAll(
    '.btn-customize-icon-wrapper'
  );

  const customizationOverlays = document.querySelectorAll(
    '.customization-menu-overlay'
  );

  const customizationMenus = document.querySelectorAll('.customization-menu');

  const menuCloseButtons = document.querySelectorAll(
    '.btn-close-customization-menu'
  );

  function menuIsOpen(): boolean {
    return Array.from(customizationMenus).some((menu) => {
      return menu.getAttribute('data-active') === 'true';
    });
  }

  function closeMenus() {
    customizationOverlays.forEach((overlay) => {
      overlay.setAttribute('data-active', 'false');
    });

    customizationMenus.forEach((menu) => {
      menu.setAttribute('data-active', 'false');
    });

    allCustomizeButtonsIcons!.forEach((buttonIcon) => {
      buttonIcon.setAttribute('data-active', 'false');
    });
  }

  function openMenus() {
    customizationOverlays.forEach((overlay) => {
      overlay.setAttribute('data-active', 'true');
    });

    customizationMenus.forEach((menu) => {
      menu.setAttribute('data-active', 'true');
    });

    allCustomizeButtonsIcons!.forEach((buttonIcon) => {
      buttonIcon.setAttribute('data-active', 'true');
    });
  }

  function toggleMenus() {
    if (menuIsOpen()) {
      closeMenus();
    } else if (!menuIsOpen()) {
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
