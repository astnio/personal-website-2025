function initBtnShowMore() {
  const btnShowMore = document.getElementById('btn-show-more-tabs')!;
  const btnShowMoreLabel = document.getElementById('btn-show-more-tabs-label')!;

  function updateShowMoreBtn() {
    const showMoreEnabled =
      btnShowMore.getAttribute('data-show-more') === 'true';

    if (showMoreEnabled) {
      btnShowMore.setAttribute('data-show-more', 'false');
      btnShowMoreLabel!.textContent = 'Show More';
    } else {
      btnShowMore.setAttribute('data-show-more', 'true');
      btnShowMoreLabel!.textContent = 'Show Less';
    }
  }

  btnShowMore!.addEventListener('click', () => {
    updateShowMoreBtn();
  });
}

export default initBtnShowMore;