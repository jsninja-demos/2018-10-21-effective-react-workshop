import {
  TOGGLE_PHOTO,
  UPDATE_PHOTO_LIKES,
  LOAD_PHOTOS_START,
  LOAD_PHOTOS_SUCCESS
} from "../actionTypes";

const initialState = {
  loading: false,
  data: [],
  selected: []
};

export default function photosReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PHOTOS_START:
      return { ...state, loading: true };
    case LOAD_PHOTOS_SUCCESS:
      return { ...state, data: action.data };
    case TOGGLE_PHOTO:
      if (state.selected.includes(action.id)) {
        return {
          ...state,
          selected: state.selected.filter(id => id !== action.id)
        };
      } else {
        return { ...state, selected: [...state.selected, action.id] };
      }
    case UPDATE_PHOTO_LIKES:
      const entry = state.data.find(({ id }) => id === action.id);
      if (!entry) {
        return state;
      }
      const newEntry = { ...entry, likes: action.likes };
      const newData = [...state.data.filter(item => item !== entry), newEntry];
      return { ...state, data: newData };

    default:
      return state;
  }
}
