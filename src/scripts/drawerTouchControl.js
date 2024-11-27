document.addEventListener('astro:page-load', () => {
  const docBody = document.querySelector('body');

  function handleTouchStart(event) {
    event.preventDefault();
    log('touchStart');
    let x = event.changedTouches;
  }
});
