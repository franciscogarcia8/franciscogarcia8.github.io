document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    // Cambiar fondo según la hora del día
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) {
        document.body.style.backgroundColor = '#dff9fb';
    } else {
        document.body.style.backgroundColor = '#2c3e50';
        document.body.style.color = '#ecf0f1';
    }

    // Resaltar la sección activa
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(nav => nav.classList.remove('nav-active'));
            link.classList.add('nav-active');
        });
    });

    // Validar formulario y mostrar mensaje
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        successMessage.style.display = 'block';
        form.reset();
    });
});
