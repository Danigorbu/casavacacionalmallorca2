// Espera a que todo el contenido HTML de la página esté cargado antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA DEL MENÚ MÓVIL ---
    const mobileMenuButton = document.getElementById('mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

    // Si el botón de menú móvil existe, le añadimos un evento de clic.
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            // "toggle" añade la clase 'active' si no la tiene, y la quita si la tiene.
            // Esto nos permite mostrar u ocultar el menú con el CSS correspondiente.
            mainNav.classList.toggle('active');
        });
    }

    // --- LÓGICA DEL FORMULARIO DE BÚSQUEDA ---
    const searchForm = document.getElementById('search-form');

    // Si el formulario existe, le añadimos un evento para cuando el usuario intente enviarlo.
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            // Prevenimos el comportamiento por defecto del formulario (que es recargar la página).
            event.preventDefault(); 
            
            // Recogemos los valores de los campos del formulario.
            const destination = document.getElementById('destination').value;
            const arrival = document.getElementById('arrival').value;
            const departure = document.getElementById('departure').value;
            
            // Realizamos una validación muy simple.
            if (destination === '' || arrival === '' || departure === '') {
                alert('Por favor, completa los campos de destino y fechas.');
                return; // Detenemos la función si la validación falla.
            }

            // Si la validación es correcta, mostramos un mensaje con los datos.
            // En una web real, aquí se enviaría la información a un servidor.
            alert(`Búsqueda iniciada:\nDestino: ${destination}\nLlegada: ${arrival}\nSalida: ${departure}`);
            
            console.log('Formulario enviado (simulación)');
            // podrías redirigir a una página de resultados aquí:
            // window.location.href = `/resultados?destino=${destination}&llegada=${arrival}`;
        });
    }

});