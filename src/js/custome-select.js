const refs = {
  selectBtn: document.querySelector('.select__btn'),
  selectItem: document.querySelectorAll('.select__item'),
  selectBody: document.querySelector('.select__body'),
  selectBtnText: document.querySelector('.select__current'),
};

refs.selectBtn.addEventListener('click', () => {
  refs.selectBody.classList.toggle('is-hidden');
});

refs.selectBody.addEventListener('click', onItemClick);
function onItemClick(e) {
  let text = e.target.dataset.value;
  refs.selectBtnText.textContent = text;
  refs.selectBody.classList.add('is-hidden');

  console.log(text);
}
