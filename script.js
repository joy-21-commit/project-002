const navLoginBtn = document.getElementById("nav-auth-signin");
const navRegisterBtn = document.getElementById("nav-auth-signup");

const showLogin = document.getElementById("show-login");
const showRegister = document.getElementById("show-register");

const loginPage = document.getElementById("login-page");
const registerPage = document.getElementById("register-page");

navLoginBtn.addEventListener("click", () => {
  loginPage.style.display = "block";
  registerPage.style.display = "none";
});

navRegisterBtn.addEventListener("click", () => {
  loginPage.style.display = "none";
  registerPage.style.display = "block";
});

showLogin.addEventListener("click", () => {
  loginPage.style.display = "block";
  registerPage.style.display = "none";
});

showRegister.addEventListener("click", () => {
  registerPage.style.display = "block";
  loginPage.style.display = "none";
});
