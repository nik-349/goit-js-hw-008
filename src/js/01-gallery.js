import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import template from '../tamplates/gallary-handlebars.hbs';
import 'simplelightbox/dist/simple-lightbox.min.css';

const ref = {
    galaryListHtml: document.querySelector('.gallery'),
    gallaryImageLigthBox: document.querySelector('body')
}
ref.gallaryImageLigthBox.addEventListener('click', tupImG)


function gallaryFunHtml(gal) {
    return gal.map(e => {
        return template(e)
    }).join('')
}
ref.galaryListHtml.insertAdjacentHTML('beforeend', gallaryFunHtml(galleryItems));

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
function tupImG(e) {
  
  if (e.target.nodeName === 'IMG') {
    e.preventDefault()
        
  }
}
