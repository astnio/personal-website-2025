document.addEventListener('astro:page-load', () => {
  const btnPrev = document.getElementById('btn-previous-img');
  const btnNext = document.getElementById('btn-next-img');
  const projectImagesElement: HTMLElement =
    document.querySelector('.images-wrapper')!;

  const projectImages = projectImagesElement.children;

  let currentIndex = 0;

  function init() {
    projectImages[0]!.setAttribute('data-active', 'true');
  }

  function currentImageToFirst() {
    if (currentIndex >= projectImagesElement.children.length) {
      currentIndex = 0;
    }
  }

  function currentImageToLast() {
    if (currentIndex < 0) {
      currentIndex = projectImagesElement.children.length - 1;
    }
  }

  function navImage(isNextImage: boolean) {
    projectImages[currentIndex].setAttribute('data-active', 'false');

    if (isNextImage) {
      currentIndex++;
      currentImageToFirst();
    } else {
      currentIndex--;
      currentImageToLast();
    }

    projectImages[currentIndex].setAttribute('data-active', 'true');
  }

  btnNext!.addEventListener('click', () => navImage(true));
  btnPrev!.addEventListener('click', () => navImage(false));
  init();
});
