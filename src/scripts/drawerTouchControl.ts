document.addEventListener('astro:page-load', () => {
  const docBody = document.querySelector('body');

  function handleTouchStart(event: TouchEvent) {
    event.preventDefault();
    // log('touchStart');
    let x = event.changedTouches;
  }
});
