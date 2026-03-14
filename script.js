document.querySelectorAll('.navbar__list-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.navbar__list-item.active').classList.remove('active');
    item.classList.add('active');
  });
});

document.querySelectorAll('.price__content-button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.price__content-button.button-secondary').classList.remove('button-secondary');
    button.classList.add('button-secondary');
  });
});
