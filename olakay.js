window.addEventListener("load", function() {
    let currentPage = window.location.href.split("/").pop();
    if (this.performance.navigation.type === this.performance.navigation.TYPE_RELOAD) {
        if (currentPage !== "index.html" && currentPage !== "") {
            this.location.href = "index.html";
        }
    }
});

// const form = document.getElementById('contactForm');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const message = document.getElementById('comment');
// const reply = document.getElementById('responseMessage');
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     if (!nameInput.value.trim() || !emailInput.value.trim() || !message.value.trim()) {
//         reply.style.color = 'red';
//         reply.textContent = "Please fill all the required field";
//     } else {
//         reply.style.color = 'green';
//         reply.textContent = "Thank you for contacting Olakay Solutions, we will get back to you as soon as possible";
//     }
// });
const form = document.getElementById('contactForm');
const inputs = form.querySelectorAll('input, textarea');
const message = document.getElementById('responseMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let allField = true;
    inputs.forEach(input => {
        const errorMsg = input.nextElementSibling;
        if (!input.value.trim()) {
            errorMsg.style.display = 'block';
            input.style.borderColor = 'red';
            allField = false;
        } else {
            errorMsg.style.display = 'none';
            input.style.borderColor = ''
        }
    });
    if (allField) {
        message.style.color = 'green';
        message.textContent = 'Thank you for contacting Olakay Solutions, we will get back to you as soon as possible';
        inputs.forEach(input => input.value = '');
    } else {
        message.textContent = '';
    }
});

document.addEventListener('DOMContentLoaded', function() {
            const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
            popoverTriggerList.map(function(popoverTriggerEl) {
                return new
                bootstrap.Popover(popoverTriggerEl)
            });
        });