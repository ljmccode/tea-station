// setup nav
const navBtn = document.getElementById('nav-btn');
const navbar = document.getElementById('navbar');
const navClose = document.getElementById('nav-close');
const result = document.querySelector('.result');
const submitBtn = document.querySelector('.submit-btn');
// show nav
navBtn.addEventListener('click', () => {
  navbar.classList.add('showNav');
});
// close nav
navClose.addEventListener('click', () => {
  navbar.classList.remove('showNav');
});
// show result
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  result.style.opacity = 1;
  hideResult();
});

const hideResult = () => {
  setTimeout(() => {
    result.style.opacity = 0;
  }, 3000);
};

//setup date
const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear());

