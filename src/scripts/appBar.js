document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('app-bar');

  let prevScrollPos = window.scrollY;

  window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
      navbar.style.transform = 'translateY(0%)';
    } else {
      navbar.style.transform = 'translateY(-100%)';
    }
    prevScrollPos = currentScrollPos;
  };
});
