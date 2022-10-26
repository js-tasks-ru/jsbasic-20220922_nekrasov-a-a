function toggleText() {
  let button = document.querySelector(".toggle-text-button");
  let divText = document.querySelector("#text");

  button.addEventListener('click', () => {
    divText.toggleAttribute('hidden');
  });

}
