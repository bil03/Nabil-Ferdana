document.addEventListener('DOMContentLoaded', function () {
  const textElement = document.querySelector('.typing-text');
  const words = ['Full Stack Developer', 'Cloud Engineer', 'Web Enthusiast', 'Mobile Developer'];
  let wordIndex = 0;

  function typeText() {
    let currentWord = words[wordIndex];
    let charIndex = 0;
    textElement.textContent = ''; // Clear any text before starting

    function typeChar() {
      if (charIndex < currentWord.length) {
        textElement.textContent += currentWord[charIndex];
        charIndex++;
        setTimeout(typeChar, 150); // Kecepatan mengetik
      } else {
        setTimeout(removeText, 2000); // Tunggu 2 detik setelah teks selesai diketik
      }
    }

    function removeText() {
      if (charIndex > 0) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(removeText, 100); // Kecepatan menghapus
      } else {
        wordIndex = (wordIndex + 1) % words.length; // Ganti kata berikutnya
        setTimeout(typeText, 500); // Tunggu sebelum mulai mengetik lagi
      }
    }

    typeChar();
  }

  typeText();
});
