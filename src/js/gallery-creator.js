import cocktailCard from '../template/cocktail-card.hbs';
import noFindAnyCocktail from '../template/not-found-cocktails.hbs';
import { getApiData } from './rendering-catalogue';
import { checkingScreenWidth } from './cheking-screen-width';
import modalCoctails from '../template/modal-cocktails.hbs';

refsGallery = {
  formHeader: document.querySelector('.header__search-form'),
  cataloguePattern: document.querySelector('.catalogue__pattern'),
  catalogueList: document.querySelector('.catalogue__list'),
};

const getClassApiData = new getApiData();

refsGallery.formHeader.addEventListener('submit', getSearchCocktailByName);

function getSearchCocktailByName(e) {
  e.preventDefault();
  getClassApiData.value = e.currentTarget.elements.headerInput.value.trim();
  refsGallery.formHeader.reset();
  if (getClassApiData.value) {
    getClassApiData.key = 's';
    getRenderingCocktailByName();
    refsGallery.catalogueList.innerHTML = '';
  }
}

getRenderingRandomCoctail();

async function getRenderingCocktailByName() {
  const r = await getClassApiData.getParsedApiData();

  ifNoFindAnyCocktails(r);
}

async function getRenderingRandomCoctail() {
  for (let i = 0; i < checkingScreenWidth; i += 1) {
    const r = await getClassApiData.getParsedApiDataRandom();
    getRenderingApi(r);
  }
}

function getRenderingApi(r) {
  const data = r
    .map(result => {
      return cocktailCard(result);
    })
    .join('');

  refsGallery.catalogueList.insertAdjacentHTML('beforeend', data);

  // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓Sergey↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  const openModalBtn = document.querySelector('[data-modal-open]');
  openModalBtn.addEventListener('click', toggleModals);
  // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑Sergey↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
}

function ifNoFindAnyCocktails(r) {
  if (r !== null) {
    getRenderingApi(r);
  } else {
    refsGallery.cataloguePattern.innerHTML = '';
    refsGallery.cataloguePattern.insertAdjacentHTML(
      'beforeend',
      noFindAnyCocktail()
    );
  }
}

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓Sergey↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

const refsModal = {
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

function CreateModal() {
  toggleModals();
  getRenderingModalByName();
}

async function getRenderingModalByName() {
  const array = await getClassApiData.getParsedModalApiData();
  getRenderingModalApi();
}

function getRenderingModalApi(array) {
  const info = array.map(result => {
    return modalCoctails(result);
  });
  refsModal.modal.insertAdjacentHTML('beforeend', info);
  refsModal.closeModalBtn.addEventListener('click', CreateModal);
}

function toggleModals() {
  document.body.classList.toggle('overflow');
  refsModal.modal.classList.toggle('is-hidden');
}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑Sergey↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
