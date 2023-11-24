document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    alert(`Message sent! \n\n Name: ${name} \n Email: ${email} \n Message: ${message}`);
});