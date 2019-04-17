function preventSubmit(event) {
  event.preventDefault();
}

window.addEventListener('load', () => {
  const form = document.getElementById('survey-form')

  form.addEventListener('submit', preventSubmit);
})