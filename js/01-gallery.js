import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryElement(galleryItems);
listEl.insertAdjacentHTML('beforeend', galleryMarkup);
listEl.addEventListener('click', onImgClick);

function createGalleryElement(items) {
  return items
    .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
            </li>`
  })
  .join('');
}


  

function onImgClick(event) {
  event.preventDefault();

  const { target } = event;
  if (!target.nodeName === 'IMG') {
    return;
  }
    const instance = basicLightbox.create(`
      <img
        src="${target.dataset.source}"
      />
    `
    , {
          onShow: (instance) => {
            window.addEventListener('keydown', onEscKeyPress);
          },
          onClose: (instance) => {
            window.removeEventListener('keydown', onEscKeyPress);
          },
    }
    );
  instance.show()
  
  
}

function onEscKeyPress(e) {
  if (e.code !== "Escape") return;
  instance.close();
}



