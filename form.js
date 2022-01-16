// contact form
const result = document.querySelector('.result');
const submitBtn = document.querySelector('.submit-btn');

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