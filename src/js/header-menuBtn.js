const refsMenu = {
  headerBtnMenu: document.querySelector('.header__button-menu'),
  headerMenu: document.querySelector('.header__menu'),
  menuIcon: document.querySelector('.header__icon-menu'),
  closeIcon: document.querySelector('.header__icon-menu--close'),
};
const favoriteMenuEl = document.querySelector('.header__favorite-box');

refsMenu.headerBtnMenu.addEventListener('click', onClickMenuButton);

function onClickMenuButton() {
  refsMenu.headerMenu.classList.toggle('header__menu--is-hidden');
  refsMenu.menuIcon.classList.toggle('header__icon-menu--is-hidden');
  refsMenu.closeIcon.classList.toggle('header__icon-menu--is-hidden');
  favoriteMenuEl.classList.add('header__favorite-box--is-hidden');
}
