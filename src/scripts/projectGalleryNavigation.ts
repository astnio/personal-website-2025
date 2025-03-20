document.addEventListener('astro:page-load', () => {
    const btnPrev = document.getElementById('btn-previous-img');
    const btnNext = document.getElementById('btn-next-img');

    const projectImages: HTMLElement =
      document.querySelector('.images-wrapper')!;

    let currentIndex = 0;

    projectImages.firstElementChild!.setAttribute('data-active', 'true');

    btnNext?.addEventListener('click', () => {
      projectImages.children[currentIndex].setAttribute('data-active', 'false');

      currentIndex++;

      if (currentIndex >= projectImages.children.length) {
        currentIndex = 0;
      }

      projectImages.children[currentIndex].setAttribute('data-active', 'true');
    });

    btnPrev?.addEventListener('click', () => {
      projectImages.children[currentIndex].setAttribute('data-active', 'false');

      currentIndex--;

      if (currentIndex < 0) {
        currentIndex = projectImages.children.length - 1;
      }

      projectImages.children[currentIndex].setAttribute('data-active', 'true');
    });
  });