const refsTheme = {
  body: document.querySelector('body'),
  themeBox: document.querySelector(
    'body > header > div > div.header__color-theme-box > div'
  ),
  themeBall: document.querySelector(
    'body > header > div > div.header__color-theme-box > div > div'
  ),
};

refsTheme.themeBox.addEventListener('click', changeThemeOnClick);

function changeThemeOnClick() {
  const settings = {
    settings: `refsTheme.themeBall.classList.toggle('ball-right')`,
  };
  localStorage.setItem('settings', JSON.stringify(settings));
}

const savedSettings = localStorage.getItem('settings');
