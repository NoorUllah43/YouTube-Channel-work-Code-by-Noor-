// Optional: Add interactivity or dynamic effects here
// For example, you can make the rose rotate or change color on click

const rose = document.querySelector('.rose');

rose.addEventListener('click', () => {
    rose.style.transform = 'rotate(360deg)';
    rose.style.transition = 'transform 2s ease-in-out';
});