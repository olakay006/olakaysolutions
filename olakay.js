window.addEventListener("load", function() {
    let currentPage = window.location.href.split("/").pop();
    if (this.performance.navigation.type === this.performance.navigation.TYPE_RELOAD) {
        if (currentPage !== "index.html" && currentPage !== "") {
            this.location.href = "index.html";
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
            const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
            popoverTriggerList.map(function(popoverTriggerEl) {
                return new
                bootstrap.Popover(popoverTriggerEl)
            });
        });


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            console.log(entry.target)
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    })
}, {})
const todoElements = document.querySelectorAll(".cardAnimate")
todoElements.forEach(el => observer.observe(el));


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input, textarea');
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    
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
                input.style.borderColor = 'green';
            }
        });
        if (allField) {
            successModal.show();
            inputs.forEach(input => input.value = '');
        }
    });
});
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default page reload

    const name = document.getElementById("name").value;

    // Insert dynamic message
    document.getElementById("modalMessage").innerHTML =
      `Thank you ${name} for contacting Olakay Solutions, We will get back to you as soon as possible`;

    // Show modal
    var modal = new bootstrap.Modal(document.getElementById('modalMessage'));
    modal.show();

    // Reset the form afterwards
    document.getElementById("contactForm").reset();
  });