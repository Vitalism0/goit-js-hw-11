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

  const query = e.target.elements['search-text'].value.trim();
  if (!query) {
    iziToast.show({
      message: 'Please type something in search!',
      position: 'topRight',
      backgroundColor: '#EF4040',
      messageColor: '#FAFAFB',
    });
    return;
  }

  showLoader();
  clearGallery();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        return iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#EF4040',
          messageColor: '#FAFAFB',
        });
      }
      createGallery(data.hits);
    })
    .catch(err => {
      iziToast.show({
        message: err.message || 'Something goes wrong',
        position: 'topRight',
        backgroundColor: '#EF4040',
        messageColor: '#FAFAFB',
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
}
