document.addEventListener('astro:page-load', () => {
  function initBtnShowMore() {
    const btnShowMore = document.getElementById('btn-show-more-tabs')!;
    const btnShowMoreLabel = document.getElementById(
      'btn-show-more-tabs-label'
    )!;

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

  function initBtnTabTitle() {
    const tabTitles = document.querySelectorAll('.tab-title-wrapper');

    let lastTabTitle: HTMLElement = tabTitles[0] as HTMLElement;

    tabTitles.forEach((tabTitle) => {
      tabTitle.addEventListener('click', (e) => {
        const tabTitleTarget: HTMLElement = (e.target! as HTMLElement).closest(
          '.tab-title-wrapper'
        )!;

        lastTabTitle!.setAttribute('data-active', 'false');
        tabTitleTarget!.setAttribute('data-active', 'true');

        const currentTabId = tabTitleTarget.getAttribute('data-tab-id');
        const lastTabId = lastTabTitle.getAttribute('data-tab-id');

        const currentTabContentElement = document.querySelector(
          `.tab-content-wrapper[data-tab-id=${currentTabId}]`
        );
        const lastTabContentElement = document.querySelector(
          `.tab-content-wrapper[data-tab-id=${lastTabId}]`
        );

        lastTabContentElement!.setAttribute('data-active', 'false');
        currentTabContentElement!.setAttribute('data-active', 'true');

        lastTabTitle = tabTitleTarget;
      });
    });
  }

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

  initBtnShowMore();
  initBtnTabTitle();
  initBtnItem();
});
