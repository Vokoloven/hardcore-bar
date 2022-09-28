const refsMenu = {
  headerBtnMenu: document.querySelector('.header__button-menu'),
  headerMenu: document.querySelector('.header__menu'),
};

console.log(refsMenu);

refsMenu.headerBtnMenu.addEventListener('click', onClickMenuButton);

function onClickMenuButton() {
  console.log('hi');
  refsMenu.headerMenu.classList.toggle('header__menu--is-hidden');
}

console.log(refsMenu.headerBtnMenu);
