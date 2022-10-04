// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(SimpleLightbox);
console.log(galleryItems);

const galary = document.querySelector('.gallery');

const createGalary = collection => {
    return collection.map(({preview, original, description}) => {
        const addElements = `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>` ;
        galary.insertAdjacentHTML('beforeend', addElements);
    })
}

createGalary(galleryItems);


let galleryClick = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
});
