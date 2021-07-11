const input = document.querySelector('input');


input.addEventListener('change', (event) => {
    const message = document.querySelector('.alert')
    message.classList.remove('d-none')
  });