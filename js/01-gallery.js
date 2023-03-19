import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

// 2.Реализация делегирования на div.gallery и получение url большого изображения.

// 3.Подключение скрипта и стилей библиотеки модального окна basicLightbox.Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.

// 4.Открытие модального окна по клику на элементе галереи.Для этого ознакомься с документацией и примерами.

// 5.Замена значения атрибута src элемента <img img > в модальном окне перед открытием.Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

// console.log(galleryItems);

// -----------------------------------------------------------
// const gallery = document.querySelector(".gallery");
// const galleryMarkup = createGalleryItems(galleryItems);
// gallery.insertAdjacentHTML("beforeend", galleryMarkup);

// // console.log(createGalleryItems(galleryItems));

// gallery.addEventListener("click", onGalleryClick);

// function createGalleryItems(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
//          <div class="gallery__item">
//              <a class="gallery__link" href="${original}">
//                  <img
//                     class="gallery__image"
//                     src="${preview}"
//                     data-source="${original}"
//                     alt="${description}"
//                 />
//             </a>
//         </div>`;
//     })
//     .join("");
// }

// function onGalleryClick(evt) {
//   evt.preventDefault();
//   if (evt.target.nodeName !== "IMG") {
//     return;
//   }

//   const selectedImage = evt.target.getAttribute("data-source");
//   console.log(evt.target);
//   const instance = basicLightbox.create(`
//     <img src="${selectedImage}" width="800" height="600">
// `);

//   instance.show();
//   gallery.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") {
//       instance.close();
//     }
//   });
// }
// ----------------------------------------------
// {/* <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>; */}
// const galleryList = document.querySelector(".gallery");
// const galleryMarkup = createGalleryList(galleryItems);
// galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
// galleryList.addEventListener("click", onClick);

// function createGalleryList(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`;
//     })
//     .join("");
// }

// function onClick(e) {
//   e.preventDefault();
//   if (e.target.nodeName !== "IMG") {
//     return;
//   }
//   const selectImage = e.target.dataset.source;
//   // console.log(selectImage);

//   const instance = basicLightbox.create(`
//     <img src="${selectImage}" width="800" height="600">
// `);

//   instance.show();
//   galleryList.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") {
//       instance.close();
//     }
//   });
// }
const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);
gallery.addEventListener("click", onClick);
function createGalMarkup(galleryItems) {
  return galleryItems
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
</li>`;
    })
    .join("");
}

function onClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const selectImg = e.target.dataset.source;
  console.log(selectImg);

  const instance = basicLightbox.create(`
    <img src="${selectImg}" width="800" height="600">
`);

  instance.show();

  gallery.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
}
