function toggleMenu() {
  const menuItems = document.getElementById('menu-items');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  menuItems.classList.toggle('open');
  hamburgerMenu.classList.toggle('open');
}

function isMobile() {
  return window.innerWidth <= 640;
}

document.querySelectorAll('.menu-items a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    toggleMenu();

    if (isMobile()) {
      openPage(event.target.href);
    } else {
      window.location.href = event.target.href;
    }
  });
});
