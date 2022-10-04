// const { data } = require('infinite-scroll');

const catalogueListFavoriteCocktails = document.querySelector(
  'body > main > div.favorite-cocktails-page > section > div > ul'
);

// Створюємо масив, який забирає масив із локал сторедж або пустий
let favoriteCocktailsEl = JSON.parse(localStorage.savedCocktails || '[]');

const catalogueListRef = document.querySelector('.catalogue__list');

if (catalogueListRef) {
  catalogueListRef.addEventListener('mouseup', onClickBtn);
}

let randomCardsGallery = '';
let htmlCoctailCard = '';

function onClickBtn(e) {
  if (e.target.classList.contains('btn__transparent')) {
    let BtnToFavoriteCocktails = '';
    randomCardsGallery = catalogueListRef.children; // Отримуємо масив карток

    for (let i = 0; i < randomCardsGallery.length; i++) {
      BtnToFavoriteCocktails = randomCardsGallery[i]; // Визначаємо де кнопка

      BtnToFavoriteCocktails.addEventListener('click', allCocktailsMap); // Слухач по кліку

      e.target.childNodes[0].data = 'Remove'; // При натисканні на кнопку заміняємо слова
      function allCocktailsMap() {
        // Серіалізуємо в стрінгу
        htmlCoctailCard = new XMLSerializer().serializeToString(
          randomCardsGallery[i] // Масив об'єктів
        );
        // Перевірка якщо елемент не є в масиві
        if (!favoriteCocktailsEl.includes(htmlCoctailCard)) {
          favoriteCocktailsEl.push(htmlCoctailCard); // Пушим його в масив
          // Добавляєм його в розмітку
          catalogueListFavoriteCocktails.insertAdjacentHTML(
            //
            'beforeend',
            htmlCoctailCard
          );
        }
      }
      // Добавляєм масив в локальне сховище
      localStorage.setItem(
        'savedCocktails',
        JSON.stringify(favoriteCocktailsEl)
      );
    }
  }
}

//  Зберігаєм елементи в локальному сховищі при загрузці сторінки
const savedCocktailsDataLS = localStorage.getItem('savedCocktails');
const parsedCocktailsDataLS = JSON.parse(savedCocktailsDataLS).join('');

catalogueListFavoriteCocktails.insertAdjacentHTML(
  'beforeend',
  parsedCocktailsDataLS
);

//                          ----- Remove Button -----

const textBtnOnFav = document.querySelectorAll('.btn__transparent');
for (let c = 0; c < textBtnOnFav.length; c++) {
  textBtnOnFav[c].childNodes[0].data = 'Remove';
}

if (catalogueListFavoriteCocktails) {
  catalogueListFavoriteCocktails.addEventListener('click', onRemoveItemBtn);
}
let htmlRemoveCoctailCard = '';

function onRemoveItemBtn(e) {
  // Отримуємо доступ до картки яку необхідно видалити
  const cardToRemove = e.target.parentElement.parentElement.parentElement;

  if (e.target.classList.contains('btn__transparent')) {
    // Серіалізація до стрінги
    htmlRemoveCoctailCard = new XMLSerializer().serializeToString(cardToRemove);
    // Визначаємо індекс видаляємого елементу
    let indexForRemoveCocktailCard = favoriteCocktailsEl.indexOf(
      htmlRemoveCoctailCard
    );

    // Якщо масив включає видаляємий об'єкт видаляємо по індексу(Splice)
    if (favoriteCocktailsEl.includes(htmlRemoveCoctailCard)) {
      favoriteCocktailsEl.splice(indexForRemoveCocktailCard, 1);

      // Видаляємо картку з батьківського елементу
      cardToRemove.remove();
      // Видаляємо об'єкт з масиву в локальному сховищу
      localStorage.setItem(
        'savedCocktails',
        JSON.stringify(favoriteCocktailsEl)
      );
    }
  }
}
