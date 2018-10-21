import photosStub from "./stubs/photos";
import authorsStub from "./stubs/authors";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const login = async () => {
  localStorage.setItem("token", "kek");
};

export const checkLogin = async () => {
  await sleep(2000);
  return localStorage.getItem("token") === "kek";
};

export const loadPhotos = async () => {
  await sleep(~~(Math.random() * 5));
  return JSON.parse(JSON.stringify(photosStub));
};

export const loadAuthors = async () => {
  await sleep(~~(Math.random() * 5));
  return JSON.parse(JSON.stringify(authorsStub));
};

// faking websocket for demo
const socket = document.createElement("div");
function fakeMessage() {
  const messageType = Math.random() < 0.7 ? "UPDATE_LIKES" : "UPDATE_RATING";
  const id =
    messageType === "UPDATE_LIKES"
      ? ~~(10 * Math.random() + 1)
      : ~~(3 * Math.random() + 1);
  const value = ~~(Math.random() * 100);
  const message = { type: messageType, id, value };
  const event = new CustomEvent("message", {
    detail: JSON.stringify(message)
  });
  socket.dispatchEvent(event);
  setTimeout(fakeMessage, ~~(Math.random() * 1000));
}
setTimeout(fakeMessage, ~~(Math.random() * 1000));

export const getSocket = () => socket;

export const logOut = () => localStorage.clear();
