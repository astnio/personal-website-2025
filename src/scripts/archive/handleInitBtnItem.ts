function initBtnItem() {
  const btnItems = document.querySelectorAll('.tab-content-item');

  let lastActiveButton = document.querySelector(
    '.tab-content-item[data-active="true"]'
  );

  btnItems.forEach((btnItem) => {
    btnItem.addEventListener('click', (e) => {
      const targetButton: HTMLElement = (e.target as HTMLElement).closest(
        '.tab-content-item'
      ) as HTMLElement;

      lastActiveButton!.setAttribute('data-active', 'false');
      targetButton.setAttribute('data-active', 'true');

      lastActiveButton = targetButton;
    });
  });
}

export default initBtnItem;
