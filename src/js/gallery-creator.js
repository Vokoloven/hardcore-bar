import templateFunction from '../template/coctail-card.hbs';
import { getApiData } from './rendering-catalogue';

refsGallery = {
  formHeader: document.querySelector('.header__search-form'),
  cataloguePattern: document.querySelector('.catalogue-pattern'),
};

const getClassApiData = new getApiData();

refsGallery.formHeader.addEventListener('submit', getSearchByName);

function getSearchByName(e) {
  e.preventDefault();
  getClassApiData.value = e.currentTarget.elements.headerInput.value.trim();
  refsGallery.formHeader.reset();
  if (getClassApiData.value) {
    getClassApiData.key = 's';
    getSearchResultByName();
    refsGallery.cataloguePattern.innerHTML = '';
  }
}

async function getSearchResultByName() {
  const r = await getClassApiData.getParsedApiData();
  const data = r
    .map(result => {
      return templateFunction(result);
    })
    .join('');
  console.log(data);
  refsGallery.cataloguePattern.insertAdjacentHTML('beforeend', data);
}
