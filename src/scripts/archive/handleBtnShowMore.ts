function initShowMoreButtons() {
  const allShowMoreButtons = document.querySelectorAll('.btn-show-more-tabs')!;

  function updateShowMoreBtn(showMoreButton: Element) {
    const btnShowMoreLabel = showMoreButton.querySelector(
      '.btn-show-more-tabs-label'
    )!;

    const showMoreEnabled =
      showMoreButton.getAttribute('data-show-more') === 'true';

    if (showMoreEnabled) {
      showMoreButton.setAttribute('data-show-more', 'false');
      btnShowMoreLabel!.textContent = 'Show More';
    } else {
      showMoreButton.setAttribute('data-show-more', 'true');
      btnShowMoreLabel!.textContent = 'Show Less';
    }
  }

  allShowMoreButtons!.forEach((btn) => {
    btn.addEventListener('click', () => {
      updateShowMoreBtn(btn);
    });
  });
}

export default initShowMoreButtons;
