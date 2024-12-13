document.addEventListener('astro:page-load', () => {
  const contactButtons = document.querySelectorAll('.btn-contact');
  const contactModal = document.getElementById(
    'contact-dialog'
  ) as HTMLDialogElement;
  const contactForm = document.getElementById('contact-form');

  const animationBufferMs = -5;
  const animationDurationMs = 500 + animationBufferMs;

  function setFadeIn() {
    contactModal.classList.remove('dialog-fade-out', 'backdrop-fade-out');
    contactModal.classList.add('dialog-fade-in', 'backdrop-fade-in');
  }

  function setFadeOut() {
    contactModal.classList.remove('dialog-fade-in', 'backdrop-fade-in');
    contactModal.classList.add('dialog-fade-out', 'backdrop-fade-out');
  }

  function openModal() {
    setFadeIn();
    contactModal.showModal();
  }

  // function closeModal() {
  //   setFadeOut();
  //   contactModal.close();
  // }

  function timeoutClose() {
    setFadeOut();
    setTimeout(() => {
      contactModal.close();
    }, animationDurationMs);
  }

  contactModal.addEventListener('close', setFadeOut);

  contactModal.addEventListener('click', (event) => {
    const modalDimensions = contactModal.getBoundingClientRect();

    if (
      event.clientX < modalDimensions.left ||
      event.clientX > modalDimensions.right ||
      event.clientY < modalDimensions.top ||
      event.clientY > modalDimensions.bottom
    ) {
      timeoutClose();
    }
  });

  contactButtons.forEach((btnContact) => {
    btnContact.addEventListener('click', openModal);
  });

  contactForm!.addEventListener('submit', (event) => {
    event.preventDefault();
    timeoutClose();
  });
});
