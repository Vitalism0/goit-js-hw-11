import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  hideLoader,
  showLoader,
  clearGallery,
} from './js/render-functions';

export const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  showLoader();
  clearGallery();

  const query = e.target.elements['search-text'].value.trim();
  getImagesByQuery(query)
    .then(data => {
      createGallery(data.hits);
      if (data.hits.length === 0) {
        return iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#EF4040',
          messageColor: '#FAFAFB',
        });
      }
    })
    .catch(err => console.log(err))
    .finally(() => {
      hideLoader();
      form.reset();
    });
}
