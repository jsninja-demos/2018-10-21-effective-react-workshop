export const login = async () => {
  localStorage.setItem("token", "kek");
};

export const checkLogin = () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(localStorage.getItem("token") === "kek");
    }, 2000)
  );

export const logOut = () => localStorage.clear();
