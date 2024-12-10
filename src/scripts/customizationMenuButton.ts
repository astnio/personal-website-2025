document.addEventListener('astro:page-load', () => {
  const customizationButtons = document.querySelectorAll(
    '.btn-show-customization-options'
  );

  function handleOnClick(event: Event) {
    const btn = event.target as HTMLElement;
    const menuWrapper = btn.closest('.customization-menu-wrapper');
    const menu = menuWrapper!.querySelector('.customization-menu');

    menu?.setAttribute('data-active', 'true');
  }

  customizationButtons.forEach((button) => {
    button.addEventListener('click', handleOnClick);
  });
});
