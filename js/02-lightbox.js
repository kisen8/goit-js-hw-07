import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);

// console.log(createGalleryItems(galleryItems));

// gallery.addEventListener("click", onGalleryClick);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
         <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    })
    .join("");
}
console.log(galleryItems);
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
