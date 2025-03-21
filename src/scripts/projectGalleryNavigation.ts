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
    for (let i = 0; i < projectImages.length; i++) {
      const projectImage = projectImages[i] as HTMLElement;

      const position = (i - currentIndex) * translateDistance;
      projectImage.style.transform = `translateX(${position}%)`;

      projectImage.setAttribute(
        'data-active',
        i === currentIndex ? 'true' : 'false'
      );
    }

    if (currentIndex === 0) {
      setLastImagePosition();
    }
  }

  function positionImages(direction: 'left' | 'right') {
    const onFirstImageMovingLeft =
      currentIndex === projectImages.length - 1 && direction === 'left';

    const onSecondToLastImageMovingLeft =
      currentIndex === projectImages.length - 2 && direction === 'left';

    if (onFirstImageMovingLeft) {
      handleResetLoopOnLeft();
    } else if (onSecondToLastImageMovingLeft) {
      const firstImage = projectImages[0] as HTMLElement;
      firstImage.style.transitionDuration = '0s';
      handleMoveImages();
      resetImageTransitionDuration(firstImage);
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
