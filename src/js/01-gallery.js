// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const boxGallery = document.querySelector('.gallery');
const markUpImage = createGalleryMarUp(galleryItems);

boxGallery.insertAdjacentHTML('beforeend', markUpImage);

function createGalleryMarUp(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"  />
</a>`;
    })
    .join('');
}
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
// gallery.on('show.simplelightbox', function () {});
