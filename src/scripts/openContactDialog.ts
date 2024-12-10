document.addEventListener('astro:page-load', () => {
  const contactButtons = document.querySelectorAll('.btn-contact');
  const contactModal = document.getElementById(
    'contact-dialog'
  ) as HTMLDialogElement;

  contactButtons.forEach((btnContact) => {
    btnContact.addEventListener('click', () => {
      contactModal.showModal();
    });
  });
});
