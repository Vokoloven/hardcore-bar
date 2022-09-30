const refsTheme = {
  body: document.querySelector('body'),
  themeBox: document.querySelector(
    'body > header > div.header__menu.header__menu--is-hidden > div'
  ),
  themeBall: document.querySelector(
    'body > header > div.header__menu.header__menu--is-hidden > div.header__color-theme-box.header__color-theme-box--menu > div > div'
  ),
  searchInput: document.querySelector('.header__input'),
  paragraphText: document.querySelectorAll('p'),

  headerTextPr: document.querySelector('h1'),
  headerTextSec: document.querySelectorAll('h2'),
  headerTextQua: document.querySelectorAll('h3'),
  textLight: document.querySelector(
    'body > header > div > div.header__color-theme-box > span.header__color-theme-box-text.header__color-theme-box-text--light'
  ),
  textDark: document.querySelector(
    'body > header > div > div.header__color-theme-box > span.header__color-theme-box-text.header__color-theme-box-text--dark'
  ),
};

refsTheme.themeBox.addEventListener('click', changeThemeOnClick);

function changeThemeOnClick() {
  const settings = {
    toddler: refsTheme.themeBall.classList.toggle('ball-right'),
    toddlerText: `refsTheme.themeBall.classList.toggle('ball-right')`,
  };
  nightTheme();
  localStorage.setItem('settings', JSON.stringify(settings));
  if (settings.toddler === false) {
    dayTheme();
  }
}

const getSettings = localStorage.getItem('settings');
const getParsedSettings = JSON.parse(getSettings);

if (getParsedSettings.toddler === true) {
  eval(getParsedSettings.toddlerText);
  nightTheme();
} else {
  dayTheme();
}

function dayTheme() {
  refsTheme.body.style.backgroundColor = '#ffffff';
  refsTheme.themeBall.style.backgroundColor = '#fd5103';
  refsTheme.themeBox.style.backgroundColor = '#ffffff';
  refsTheme.searchInput.style.backgroundColor = '#ffffff';
  refsTheme.themeBox.style.borderColor = '#fd5103';
  refsTheme.textLight.style.color = '#fd5103';
  refsTheme.textDark.style.color = '#202025';
}

function nightTheme() {
  refsTheme.body.style.backgroundColor = '#202025';
  refsTheme.themeBall.style.backgroundColor = '#ffffff';
  refsTheme.themeBox.style.backgroundColor = '#fd5103';
  refsTheme.themeBox.style.borderColor = '#ffffff';
  refsTheme.searchInput.style.backgroundColor = '#202025';
  refsTheme.textLight.style.color = '#ffffff';
  refsTheme.textDark.style.color = '#fd5103';
}
