
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom', 
    captionDelay: 250 
  });


gallery.next();

console.log(SimpleLightbox);


// document.querySelector(".gallery").addEventListener("click", function(event) {
//     event.preventDefault();
//     const bigImageSrc = event.target.getAttribute('data-source');
//     if (!Boolean(bigImageSrc)) {
//            return this;
//     }

//     console.log(bigImageSrc);

//     const instance = basicLightbox.create(`
//      <img src="${bigImageSrc}" >
//  `);
 
//  instance.show();
// });