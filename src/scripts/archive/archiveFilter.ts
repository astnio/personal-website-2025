import initShowMoreButtons from './handleBtnShowMore.ts';
import initBtnTabTitle from './handleBtnTabTitle.ts';
import initBtnItem from './handleInitBtnItem.ts';

function initPage() {
  document.addEventListener('astro:page-load', () => {
    initShowMoreButtons();
    initBtnTabTitle();
    initBtnItem();
  });
}

export default initPage;
