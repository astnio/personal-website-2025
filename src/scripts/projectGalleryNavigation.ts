document.addEventListener('astro:page-load', () => {
  const prevButton = document.getElementById('btn-previous-img');
  const nextButton = document.getElementById('btn-next-img');
  const imagesWrapper = document.querySelector('.images-wrapper');
  const allImages = Array.from(
    document.querySelectorAll('.project-image-wrapper')
  );

  const imagesCount = allImages.length;

  let currentIndex = 0;
  let isAnimating = false;

  function setupTransitions() {
    if (!imagesWrapper) return;

    allImages.forEach((image, index) => {
      const imageEl = image as HTMLElement;

      const isActive = index === 0;
      imageEl.setAttribute('data-active', isActive.toString());

      imageEl.style.transition = 'none';
      imageEl.style.opacity = isActive ? '1' : '0';

      imageEl.style.transform = isActive ? 'translateX(0)' : 'translateX(100%)';
      imageEl.style.zIndex = isActive ? '1' : '0';

      void imageEl.offsetWidth;

      imageEl.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    });
  }

  function updateImageDisplay(direction: 'next' | 'prev') {
    if (!imagesWrapper || allImages.length <= 1 || isAnimating) return;

    isAnimating = true;

    const previousActiveIndex =
      direction === 'next'
        ? (currentIndex - 1 + imagesCount) % imagesCount
        : (currentIndex + 1) % imagesCount;
    const previousActive = allImages[previousActiveIndex] as HTMLElement;

    const currentActive = allImages[currentIndex] as HTMLElement;

    previousActive.setAttribute('data-active', 'false');
    currentActive.setAttribute('data-active', 'true');

    previousActive.style.zIndex = '0';
    currentActive.style.zIndex = '1';

    currentActive.style.opacity = '0';
    currentActive.style.transform = `translateX(${direction === 'next' ? '100%' : '-100%'})`;

    void currentActive.offsetWidth;

    previousActive.style.transform = `translateX(${direction === 'next' ? '-100%' : '100%'})`;
    previousActive.style.opacity = '0';

    currentActive.style.transform = 'translateX(0)';
    currentActive.style.opacity = '1';

    setTimeout(() => {
      isAnimating = false;

      previousActive.style.transform = 'translateX(100%)';
    }, 500);
  }

  function goToNextImage() {
    if (allImages.length <= 1 || isAnimating) return;

    currentIndex = (currentIndex + 1) % imagesCount;
    updateImageDisplay('next');
  }

  function goToPreviousImage() {
    if (allImages.length <= 1 || isAnimating) return;

    currentIndex = (currentIndex - 1 + imagesCount) % imagesCount;
    updateImageDisplay('prev');
  }

  function initGallery() {
    if (allImages.length <= 1) return;

    setupTransitions();

    if (prevButton) {
      prevButton.addEventListener('click', goToPreviousImage);
    }

    if (nextButton) {
      nextButton.addEventListener('click', goToNextImage);
    }

    document.addEventListener('keydown', (event) => {
      const galleryWrapper = document.querySelector('.image-gallery-wrapper');
      if (!galleryWrapper) return;

      if (event.key === 'ArrowLeft') {
        goToPreviousImage();
      } else if (event.key === 'ArrowRight') {
        goToNextImage();
      }
    });
  }

  initGallery();
});

