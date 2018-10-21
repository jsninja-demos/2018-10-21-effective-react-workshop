import {
  LOAD_AUTHORS_START,
  LOAD_AUTHORS_SUCCESS,
  UPDATE_AUTHOR_RATING
} from "../actionTypes";

const initialState = {
  loading: false,
  data: []
};

export default function authorsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_AUTHORS_START:
      return { ...state, loading: true };
    case LOAD_AUTHORS_SUCCESS:
      return { ...state, data: action.data };

    case UPDATE_AUTHOR_RATING:
      console.log(action);
      const entry = state.data.find(({ id }) => id === action.id);
      if (!entry) {
        return state;
      }
      const newEntry = { ...entry, rating: action.rating };
      const newData = [...state.data.filter(item => item !== entry), newEntry];
      return { ...state, data: newData };

    default:
      return state;
  }
}
