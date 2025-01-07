document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = window.location.pathname.includes('/views/') ? '..' : '.';
    
    fetch(`${baseUrl}/header.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            // Ajustar rutas de recursos después de cargar
            const logo = document.querySelector('.logo img');
            if (logo) {
                logo.src = `${baseUrl}/img/logo.png`;
            }
        });

    fetch(`${baseUrl}/footer.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
});