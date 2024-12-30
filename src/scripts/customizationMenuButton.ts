document.addEventListener('astro:page-load', () => {
  const customizationButtons = document.querySelectorAll(
    '.btn-show-customization-options'
  );

  const customizationButtonsIcons = document.querySelectorAll(
    '.btn-show-customization-options-icon'
  );

  const customizationOverlays = document.querySelectorAll(
    '.customization-menu-overlay'
  );

  const customizationMenus = document.querySelectorAll('.customization-menu');

  const menuCloseButtons = document.querySelectorAll(
    '.btn-close-customization-menu'
  );

  const iconClosedClass = 'bx bxs-palette';
  const iconOpenedlass = 'bx bx-palette';

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

    customizationButtonsIcons!.forEach((icon) => {
      icon.className = `btn-show-customization-options-icon ${iconClosedClass}`;
    });
  }

  function openMenus() {
    customizationOverlays.forEach((overlay) => {
      overlay.setAttribute('data-active', 'true');
    });

    customizationMenus.forEach((menu) => {
      menu.setAttribute('data-active', 'true');
    });

    customizationButtonsIcons!.forEach((icon) => {
      icon.className = `btn-show-customization-options-icon ${iconOpenedlass}`;
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
