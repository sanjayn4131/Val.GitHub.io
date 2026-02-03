// Handle the Valentine website interactions

// Grab elements from the DOM
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const result = document.getElementById('result');
const buttonsContainer = document.querySelector('.buttons');

// When the Yes button is clicked
yesBtn.addEventListener('click', () => {
  // Show the result section
  result.classList.remove('hidden');
  // Hide the buttons so they don't clutter the page anymore
  buttonsContainer.style.display = 'none';
  // Hide the home GIF so that only the hugging GIF is visible
  const homeGif = document.getElementById('homeGif');
  if (homeGif) {
    homeGif.style.display = 'none';
  }
});

// When the mouse enters the No button, move it to a random position
noBtn.addEventListener('mouseenter', () => {
  // Calculate random positions within the viewport for the button
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  // Make it fixed so it can move anywhere on screen
  noBtn.style.position = 'fixed';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

// Prevent default click behaviour on No button just in case
noBtn.addEventListener('click', (e) => {
  e.preventDefault();
});