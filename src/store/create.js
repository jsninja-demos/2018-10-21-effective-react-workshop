import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getSocket } from "../api/apiCore";
import { updateLikes, updateRating } from "./actions";
import rootReducer from "./reducer";

const store = createStore(rootReducer, applyMiddleware(thunk));
/*
const socket = getSocket();
socket.addEventListener("message", e => {
  const message = JSON.parse(e.detail);
  if (message.type === "UPDATE_LIKES") {
    return store.dispatch(updateLikes(message.id, message.value));
  }

  if (message.type === "UPDATE_RATING") {
    return store.dispatch(updateRating(message.id, message.value));
  }
  console.warn("unsupported message", message);
});
*/
export default store;
