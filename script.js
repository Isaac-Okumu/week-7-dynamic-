// Slide-in cards on page load with staggered effect
window.addEventListener("load", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("active");
    }, index * 200); // stagger each card
  });
});

/* Function: Change background color dynamically */
function changeBackground() {
  const colors = ["#FFB6C1", "#87CEFA", "#90EE90", "#FFD700", "#FF6347"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  return randomColor; // return value for demonstration
}

/* Function: Show greeting alert */
function showGreeting(name) {
  alert(`Hello, ${name}! Welcome to Magic Cards Demo!`);
}

/* Function: Animate card creatively */
function animateCard(button) {
  const card = button.parentElement;

  // Add bouncing class and animation
  card.classList.add("bouncing");
  card.style.animation = "bounce 1s ease";

  // Add sparkles ✨ for fun
  const sparkle = document.createElement("div");
  sparkle.innerHTML = "✨";
  sparkle.className = "sparkle";
  card.appendChild(sparkle);

  // Position sparkles randomly
  sparkle.style.position = "absolute";
  sparkle.style.top = Math.random() * 80 + "%";
  sparkle.style.left = Math.random() * 80 + "%";
  sparkle.style.fontSize = "1.5rem";

  // Remove after animation ends
  card.addEventListener("animationend", () => {
    card.style.animation = "";
    card.classList.remove("bouncing");
    sparkle.remove();
  }, { once: true });
}


