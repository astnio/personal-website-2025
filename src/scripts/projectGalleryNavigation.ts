document.addEventListener('astro:page-load', () => {
  const btnPrev = document.getElementById('btn-previous-img');
  const btnNext = document.getElementById('btn-next-img');
  const projectImagesElement: HTMLElement =
    document.querySelector('.images-wrapper')!;

  const projectImages = projectImagesElement.children;
  const transitionTimeSeconds = 0.69;
  const transitionDuration = `${transitionTimeSeconds}s`;
  const translateDistance = 102;

  let currentIndex = 0;

  function resetImageTransitionDuration(image: HTMLElement) {
    setTimeout(() => {
      image.style.transitionDuration = transitionDuration;
    }, transitionTimeSeconds);
  }

  function setLastImagePosition() {
    const lastImg = projectImages[projectImages.length - 1] as HTMLElement;

    lastImg.style.transitionDuration = '0s';
    lastImg.style.transform = `translateX(-${translateDistance}%)`;
    resetImageTransitionDuration(lastImg);
  }

  function initPositionImages() {
    for (let i = 0; i < projectImages.length - 1; i++) {
      const projectImage = projectImages[i] as HTMLElement;

      const position = (i - currentIndex) * translateDistance;
      projectImage.style.transform = `translateX(${position}%)`;

      projectImage.setAttribute(
        'data-active',
        i === currentIndex ? 'true' : 'false'
      );
    }

    setLastImagePosition();
  }

  function handleResetLoopOnRight() {
    const firstImage = projectImages[0] as HTMLElement;
    firstImage.style.transform = `translateX(${0}%)`;

    /*
    TODO:

    So this works so far when navigating from the first image to the
    last (moving to the left right away) and then back to the first
    image again (so immediately going left, then going right again).

    However, if you move left two times (going to the second to last image)
    this ends up breaking.

    It looks like the initial image gets moved to the back of the strip (all
    the way to the left) and then has to transition all the way back over again,
    however this ruins the seamlessness I am going for.

    Looks like I need to add yet another condition where I am on the second-to-last
    image and moving right (going to the last image). Once this condition is met I
    then should move the first image back to the first position on the right, as
    usual by first removing the transition duration time (setting it to 0) and moving
    it, then setting the time back to normal again.

    Once that is done, I still need to instantly move the rest of the strips over so
    they also do not all fly in at once and look weird.
    */
  }

  function handleResetLoopOnLeft() {
    const firstImage = projectImages[0] as HTMLElement;
    firstImage.style.transform = `translateX(${translateDistance}%)`;

    for (let i = 1; i < projectImages.length - 1; i++) {
      const projectImage = projectImages[i] as HTMLElement;

      projectImage.style.transitionDuration = '0s';

      const newPosition = (i - currentIndex) * translateDistance;
      projectImage.style.transform = `translateX(${newPosition}%)`;

      resetImageTransitionDuration(projectImage);
    }

    const lastImage = projectImages[projectImages.length - 1] as HTMLElement;
    lastImage.style.transform = `translateX(0%)`;
  }

  function handleMoveImages() {
    const lastImage = projectImages[projectImages.length - 1] as HTMLElement;

    if (currentIndex === 1) {
      lastImage.style.transitionDuration = '0s';
    }

    for (let i = 0; i < projectImages.length; i++) {
      const projectImage = projectImages[i] as HTMLElement;

      const position = (i - currentIndex) * translateDistance;
      projectImage.style.transform = `translateX(${position}%)`;

      projectImage.setAttribute(
        'data-active',
        i === currentIndex ? 'true' : 'false'
      );
    }

    resetImageTransitionDuration(lastImage);

    if (currentIndex === 0) {
      setLastImagePosition();
    }
  }

  function positionImages(direction: 'left' | 'right') {
    const onFirstImageMovingLeft =
      currentIndex === projectImages.length - 1 && direction === 'left';

    const onSecondToLastImageMovingLeft =
      currentIndex === projectImages.length - 2 && direction === 'left';

    const fromLastImageToFirstImage =
      currentIndex === 0 && direction === 'right';

    console.log(currentIndex);

    if (onFirstImageMovingLeft) {
      handleResetLoopOnLeft();
    } else if (onSecondToLastImageMovingLeft) {
      const firstImage = projectImages[0] as HTMLElement;
      firstImage.style.transitionDuration = '0s';
      handleMoveImages();
      resetImageTransitionDuration(firstImage);
    } else if (fromLastImageToFirstImage) {
      console.log('blorp');
      handleResetLoopOnRight();
    } else {
      handleMoveImages();
    }
  }

  function hideImages() {
    for (let i = 0; i < projectImages.length; i++) {
      const projectImage = projectImages[i] as HTMLElement;
      projectImage.style.visibility = 'hidden';
    }
  }

  function revealImages() {
    for (let i = 0; i < projectImages.length; i++) {
      const projectImage = projectImages[i] as HTMLElement;
      projectImage.style.visibility = 'visible';
    }
  }

  function disableTransitions() {
    for (let i = 0; i < projectImages.length; i++) {
      const projectImage = projectImages[i] as HTMLElement;
      projectImage.style.transitionDuration = '0s';
    }
  }

  function enableTransitions() {
    for (let i = 0; i < projectImages.length; i++) {
      const projectImage = projectImages[i] as HTMLElement;
      projectImage.style.transitionDuration = transitionDuration;
    }
  }

  function init() {
    (projectImages[0] as HTMLElement).style.zIndex = '1';
    disableTransitions();
    hideImages();
    initPositionImages();
    setTimeout(() => {
      enableTransitions();
      revealImages();
    }, transitionTimeSeconds);
  }

  function navImage(imageDirection: 'left' | 'right') {
    if (imageDirection === 'right') {
      currentIndex++;
      if (currentIndex >= projectImages.length) {
        currentIndex = 0;
      }
    } else {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = projectImages.length - 1;
      }
    }

    positionImages(imageDirection);
  }

  btnNext!.addEventListener('click', () => navImage('right'));
  btnPrev!.addEventListener('click', () => navImage('left'));

  init();
});
