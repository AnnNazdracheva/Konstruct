"use strict"


// display the header starting from the second block

function toggleVisibilityHeader() {
  const windHeight = document.documentElement.clientHeight;
  const scrollHeight = window.pageYOffset;
  const headerElement = document.querySelector(".header");
  const headerHeight = document.querySelector('.header').offsetHeight;
  if ((scrollHeight - (windHeight - headerHeight - 2)) > 0) {
    headerElement.classList.add('active');
  } else {
    headerElement.classList.remove('active');
  }
}
toggleVisibilityHeader();
document.addEventListener('scroll', toggleVisibilityHeader);

// Menu

document.addEventListener('click', documentActions);

function documentActions(e) {
  const targetElement = e.target;


  if (targetElement.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open');
  }

  if (targetElement.closest('[data-goto]')) {
    document.documentElement.classList.contains('menu-open') ?  
      document.documentElement.classList.remove('menu-open') : null;

    const goTo = targetElement.closest('[data-goto]').dataset.goto;
    const goToElement = document.querySelector(goTo);
    const headerHeight = document.querySelector('.header').offsetHeight;

    if(goToElement) {
      window.scrollTo({
        top: goToElement.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
    e.preventDefault();
  }
}