const refs = {
  body: document.querySelector('body'),
  switchBtn: document.querySelector('.header__color-theme-box-switch'),
  switchBall: document.querySelector('.header__color-theme-box-switch-ball'),
  textLight: document.querySelector('.header__color-theme-box-text--light'),
  textDark: document.querySelector('.header__color-theme-box-text--dark'),
};

refs.switchBtn.addEventListener('click', inHeaderOnClickSwitchThemeButton);

console.log(refs);
refs.textLight.style.color = '#FD5103';

let onSwitchCuttonColorChange = 1;
function inHeaderOnClickSwitchThemeButton() {
  refs.switchBall.classList.add('ball-right');
  onSwitchCuttonColorChange += 1;

  if (onSwitchCuttonColorChange % 2) {
    refs.switchBall.classList.remove('ball-right');
  }
}
