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

export default initBtnTabTitle;
