const button = document.getElementById('bn');
const text = document.getElementById('text');
button.addEventListener('click', () => {
  if (text.classList.contains('anime')) {
    text.classList.add('anime1');
    setTimeout(() => { text.classList.remove('anime'); }, 200);
  } else {
    text.classList.add('anime');
    text.classList.remove('anime1');
  }
});
