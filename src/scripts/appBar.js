document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('app-bar');
  let prevScrollPos = window.scrollY;
  const navbarHeight = navbar.scrollHeight;

  window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
      navbar.style.top = '0';
    } else {
      navbar.style.top = String(-navbarHeight + 'px');
    }
    prevScrollPos = currentScrollPos;
  };
});
