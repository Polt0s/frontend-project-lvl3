import onChange from 'on-change';
import {
  renderForm, renderChannel, renderPosts, renderModal,
} from './creatingRender.js';

const getWatchedState = (state, elements) => {
  const watchedState = onChange(state, (path) => {
    if (path === 'channel') {
      renderChannel(state, elements);
    } else if (path === 'posts') {
      renderPosts(state, elements);
    } else if (path === 'modal') {
      renderModal(state.posts.find(({ id }) => id === state.modal.id));
    } else {
      renderForm(state.form, elements);
    }
  });
  return watchedState;
};

export default getWatchedState;