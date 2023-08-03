const scriptURL = 'https://script.google.com/macros/s/AKfycbzin3E26zYLR8PineQknF6GnqpfMXvyWb7b4iyQ3Ns-sr4_5AS7FsOIH5ViRTSqLuzJ/exec';

const form = document.forms['kamus'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((_response) => alert('Selesai'))
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error('Error', error.message));
});
