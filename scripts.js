const typewriterText = document.querySelector('.typewriter-text');
const cursor = document.querySelector('.cursor');
const textArray = ["Arnau Argullós"];
let arrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[arrayIndex].length) {
        typewriterText.textContent += textArray[arrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 150);
    } else {
        cursor.style.display = 'none';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    type();
});

const skillLevels = document.querySelectorAll('.skill-level');

window.addEventListener('load', () => {
    skillLevels.forEach(skill => {
        const level = skill.getAttribute('data-level');
        skill.style.width = level;
    });
});
