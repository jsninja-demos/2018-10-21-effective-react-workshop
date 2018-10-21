import * as types from "./actionTypes";
import {
  loadPhotos as loadPhotosFromApi,
  loadAuthors as loadAuthorsFromApi
} from "../api/apiCore";

export function loadPhotos() {
  return async dispatch => {
    dispatch({ type: types.LOAD_PHOTOS_START });
    const data = await loadPhotosFromApi();
    dispatch({ type: types.LOAD_PHOTOS_SUCCESS, data });
  };
}

export function loadAuthors() {
  return async dispatch => {
    dispatch({ type: types.LOAD_AUTHORS_START });
    const data = await loadAuthorsFromApi();
    dispatch({ type: types.LOAD_AUTHORS_SUCCESS, data });
  };
}

export function updateLikes(photoId, value) {
  return {
    type: types.UPDATE_PHOTO_LIKES,
    id: photoId,
    likes: value
  };
}

export function updateRating(authorId, value) {
  return {
    type: types.UPDATE_AUTHOR_RATING,
    id: authorId,
    rating: value
  };
}

export function togglePhoto(id) {
  return {
    type: types.TOGGLE_PHOTO,
    id
  };
}
