const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.close');
const overlay = document.querySelector('.promo__overlay');
const contactForm = document.getElementById('contact__form');
burger.addEventListener('click', openMenu);
closeButton.addEventListener('click', openMenu);
contactForm.addEventListener('submit', handleFormSubmit);
function openMenu() {
    if (menu.style.left === '0px') {
        menu.style.left = '-345px';
        overlay.style.display = 'none';
    } else {
        overlay.style.display = 'block';
        menu.style.left = '0px';
    }
}
document.getElementById('contact__form').addEventListener('submit', function(event) {
    event.preventDefault();
    handleFormSubmit(this);
});
function handleFormSubmit(form) {
    const name = contactForm.querySelector('#name').value;
    const email = contactForm.querySelector('#email').value;
    const message = contactForm.querySelector('#message').value;
    const errorDiv = document.getElementById('formError');
    errorDiv.innerText = '';
    if (!name || !email || !message) {
        errorDiv.innerText = 'Ошибка';
        return;
    }
    const formData = { name, email, message };
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        errorDiv.innerText = ''
        alert('Сообщение отправлено!');
        form.reset();
    })
    .catch((error) => {
        errorDiv.innerText = `Ошибка, ${error.message}`;
    });
}