const navLoginBtn = document.getElementById("nav-auth-signin");
const navRegisterBtn = document.getElementById("nav-auth-signup");

const showLoginLink = document.getElementById("show-login");
const showRegisterLink = document.getElementById("show-register");

const loginPage = document.getElementById("login-page");
const registerPage = document.getElementById("register-page");

// Function to handle the form switch
const switchToForm = (showPage, hidePage) => {
  // Add 'hidden' to the page we want to hide
  hidePage.classList.add("hidden");
  // Remove 'hidden' from the page we want to show
  showPage.classList.remove("hidden");
};

// 1. Navigation Bar Buttons
navLoginBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Stop the default anchor jump
  switchToForm(loginPage, registerPage);
});

navRegisterBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Stop the default anchor jump
  switchToForm(registerPage, loginPage);
});

// 2. Links inside the Auth Box
showLoginLink.addEventListener("click", (e) => {
  e.preventDefault(); // Stop the default anchor jump
  switchToForm(loginPage, registerPage);
});

showRegisterLink.addEventListener("click", (e) => {
  e.preventDefault(); // Stop the default anchor jump
  switchToForm(registerPage, loginPage);
});
