document.addEventListener('astro:page-load', () => {
  const btnPrev = document.getElementById('btn-previous-img');
  const btnNext = document.getElementById('btn-next-img');
  const projectImagesElement: HTMLElement =
    document.querySelector('.images-wrapper')!;

  const projectImages = projectImagesElement.children;
  const transitionDuration = '0.69s';
  const translateDistance = 102;

  let currentIndex = 0;

  function positionImagesAsStrip() {
    for (let i = 0; i < projectImages.length; i++) {
      const projectImage = projectImages[i] as HTMLElement;

      const position = (i - currentIndex) * translateDistance;
      projectImage.style.transform = `translateX(${position}%)`;

      projectImage.setAttribute(
        'data-active',
        i === currentIndex ? 'true' : 'false'
      );
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
    positionImagesAsStrip();
    revealImages();
    enableTransitions();
  }

  function navImage(isNextImage: boolean) {
    if (isNextImage) {
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

    positionImagesAsStrip();
  }

  btnNext!.addEventListener('click', () => navImage(true));
  btnPrev!.addEventListener('click', () => navImage(false));

  init();
});
