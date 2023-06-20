import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

let galleryEl = document.querySelector('.gallery');
  console.log(galleryEl)


function createGalleryElement(items) {

  let galleryElements = items.map(item => {
      let itemEl = document.createElement('li');
      itemEl.classList.add('gallery__item');

      let linkEl = document.createElement('a');
      linkEl.classList.add('gallery__link');
      linkEl.href = item.original;
      itemEl.appendChild(linkEl);
      
      let imgEl = document.createElement('img');
      imgEl.classList.add('gallery__image');
      imgEl.src = item.preview;
      imgEl.dataset.source = item.original;
      imgEl.alt = item.description;
      linkEl.appendChild(imgEl);
      

      return itemEl;
  });

  galleryEl.append(...galleryElements);

  return galleryEl;
}

function onGalleryItemClick(event) {
  let clickedItemEl = event.target.closest('.gallery-item');
  if (!clickedItemEl) {
      return;
  }
  let {url, description} = clickedItemEl.dataset;
  openModal(url, description);
}

function bindEvents(galleryEl) {
  galleryEl.addEventListener('click', onGalleryItemClick);
}

function initGallery(items) {
  let galleryEl = createGalleryElement(items);
  bindEvents(galleryEl);
}

initGallery(galleryItems);

galleryEl.addEventListener('click', (event) => {
  //let targetEl = event.target;
  // if ('closeModal' in targetEl.dataset) {
  //     closeModal();
  // }
});
