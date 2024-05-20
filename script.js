const typingText = document.querySelector(".typing");
const words = ["Data Scientist", "Machine Learning Engineer", "Financial Engineer", "Quantitative Developer"];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let currentLetters = "";

function type() {
    if (wordIndex === words.length) {
        wordIndex = 0;
    }
    currentWord = words[wordIndex];
    currentLetters = currentWord.slice(0, ++letterIndex);

    typingText.textContent = currentLetters;
    if (currentLetters.length === currentWord.length) {
        wordIndex++;
        letterIndex = 0;
        setTimeout(type, 2000); // wait 2 seconds before starting to type the next word
    } else {
        setTimeout(type, 50); // type speed in milliseconds
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});
