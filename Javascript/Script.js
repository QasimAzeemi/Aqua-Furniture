const BurgerMenubutton = document.getElementById('burger-menu-button');
const BurgerMenuActive = document.getElementById('burger-menu-items');
const BurgerMenuButtonIcon  = document.getElementById('burger-button-icon')

let isTransitioned = false;

BurgerMenubutton.addEventListener('click', () => {
  if (isTransitioned) {
    // Revert to the original state
    BurgerMenuActive.style.display = 'none'; // Or any other original property
    BurgerMenuButtonIcon.classList.remove('fa-xmark');
    BurgerMenuButtonIcon.classList.add('fa-bars');
  } else {
    // Apply the transition
    BurgerMenuActive.style.display = 'flex'; // Or any other desired property
    BurgerMenuButtonIcon.classList.remove('fa-bars');
    BurgerMenuButtonIcon.classList.add('fa-xmark');
  }

  // Toggle the transition state
  isTransitioned = !isTransitioned;
});