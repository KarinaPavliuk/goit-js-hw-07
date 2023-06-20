import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

let listEl = document.querySelector('.gallery');

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
      imgEl.alt = item.description;
      linkEl.appendChild(imgEl);

      return itemEl;
  });

  listEl.append(...galleryElements);

  return listEl;
}

createGalleryElement(galleryItems);

let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt',
captionDelay: 250 });