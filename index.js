const testVar = "Hello, world!";

const articleHearts = document.querySelectorAll(".like-glyph");
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isRandomFailure = Math.random() < 0.2; 
            if (isRandomFailure) {
                reject("Random server error. Try again.");
            } else {
                resolve("Pretend remote server notified of action!");
            }
        }, 300);
    });
}

articleHearts.forEach(heart => {
    heart.addEventListener("click", () => {
        mimicServerCall()
            .then(() => {
                if (heart.textContent === "♡") {
                    heart.textContent = "❤️";
                    heart.classList.add("activated-heart"); 
                } else {
                    heart.textContent = "♡"; 
                    heart.classList.remove("activated-heart");
                }
            })
            .catch(error => {
                alert(error); 
            });
    });
});
