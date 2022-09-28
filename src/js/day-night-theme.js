const refsTheme = {
  body: document.querySelector('body'),
  themeBox: document.querySelector(
    'body > header > div > div.header__color-theme-box > div'
  ),
  themeBall: document.querySelector(
    'body > header > div > div.header__color-theme-box > div > div'
  ),
  searchInput: document.querySelector(
    'body > header > div > div.header__input-box > input'
  ),
  paragraphText: document.querySelectorAll('p'),

  headerText: document.querySelector('h1'),
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
  refsTheme.themeBall.style.backgroundColor = '#ffffff';
  refsTheme.themeBox.style.backgroundColor = '#fd5103';
  refsTheme.searchInput.style.backgroundColor = '#ffffff';
  for (let i = 0; i < refsTheme.paragraphText.length; i += 1) {
    refsTheme.paragraphText[i].style.color = '#202025';
  }
}

function nightTheme() {
  refsTheme.body.style.backgroundColor = '#202025';
  refsTheme.themeBall.style.backgroundColor = '#fd5103';
  refsTheme.themeBox.style.backgroundColor = '#ffffff';
  refsTheme.themeBox.style.borderColor = '#fd5103';
  refsTheme.searchInput.style.backgroundColor = '#202025';
  for (let i = 0; i < refsTheme.paragraphText.length; i += 1) {
    refsTheme.paragraphText[i].style.color = '#ffffff';
  }
}
