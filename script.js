const button = document.querySelector(".theme-toggle-button");
const sunMoonContainer = document.querySelector(`.sun-moon-container`);

button.addEventListener(`click`, () => {
  document.body.classList.toggle(`dark`);
  const currentRotation = parseInt(
    getComputedStyle(sunMoonContainer).getPropertyValue(`--rotation`)
  );
  sunMoonContainer.style.setProperty(`--rotation`, currentRotation + 180);
});
