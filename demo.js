// Step 1: Select all the like glyphs (hearts)
const articleHearts = document.querySelectorAll(".like-glyph");

// Step 2: Simulate a server call (mock API)
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isRandomFailure = Math.random() < 0.2; // 20% chance of failure
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Step 3: Add event listeners to toggle heart on click
articleHearts.forEach(heart => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (heart.textContent === "♡") {
          heart.textContent = "❤️"; // Turn heart red
        } else {
          heart.textContent = "♡"; // Turn heart back to normal
        }
      })
      .catch(error => {
        alert(error); // Show an error if the "server" fails
      });
  });
});

// Fix for the "testVar is not defined" error
const testVar = "Hello, world!"; 

// Export testVar if needed for tests
module.exports = { testVar };
