let words = document.querySelectorAll(".word");

// Process each word to split it into letters
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";

    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words.forEach(word => word.style.opacity = "0"); // Hide all words initially
words[currentWordIndex].style.opacity = "1"; // Show the first word

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    // Hide current word letters
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.classList.remove("in");
            letter.classList.add("behind");
        }, 340 + i * 80);
    });

    // Show next word letters
    setTimeout(() => {
        words.forEach(word => word.style.opacity = "0"); // Hide all words
        nextWord.style.opacity = "1"; // Show the next word

        Array.from(nextWord.children).forEach((letter, i) => {
            setTimeout(() => {
                letter.classList.remove("behind");
                letter.classList.add("in");
            }, 340 + i * 80);
        });
    }, 340 + currentWord.children.length * 80);

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);
