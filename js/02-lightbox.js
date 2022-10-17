import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);
galleryContainer.addEventListener('click', onGalleryPictureClick);

function createGalleryItemMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </div>
      `;
        })
        .join('');
};

function onGalleryPictureClick(event) {
  event.preventDefault();
      if (event.key === "Escape") {
      modalWindow.close();
    }
    const lightbox = new SimpleLightbox('.gallery a', { disableRightClick: true, });

    new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 })

};

  

    




