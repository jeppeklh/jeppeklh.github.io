const roles = [
  "Datamatikerstuderende",
  "Fullstack Udvikler",
  "AI & Machine Learning Entusiast",
  "Brugercentreret Designer"
];

let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;
const typeElement = document.getElementById("typewriter");

function typeWriter() {
  const fullText = roles[index];

  if (isDeleting) {
    currentText = fullText.substring(0, charIndex--);
  } else {
    currentText = fullText.substring(0, charIndex++);
  }

  typeElement.textContent = currentText;

  let delay = isDeleting ? 60 : 100;

  if (!isDeleting && currentText === fullText) {
    delay = 1000;
    isDeleting = true;
  } else if (isDeleting && currentText === '') {
    isDeleting = false;
    index = (index + 1) % roles.length;
    delay = 300;
  }

  setTimeout(typeWriter, delay);
}

document.addEventListener("DOMContentLoaded", typeWriter);

// for clicking on kompetence card
 document.querySelectorAll('.tech-flip').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });