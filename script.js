// Función para manejar la reserva de consolas
function reserveConsole(consoleName) {
    // Obtener la fecha y las horas de reserva para la consola seleccionada
    const date = document.getElementById(`${consoleName.toLowerCase().replace(' ', '-')}-date`).value;
    const hours = document.getElementById(`${consoleName.toLowerCase().replace(' ', '-')}-hours`).value;

    // Validación de entrada
    if (!date || !hours || hours <= 0) {
        alert('Por favor, selecciona una fecha válida y un número de horas mayor a 0.');
        return;
    }

    // Mostrar el mensaje de éxito
    alert(`¡Has reservado la consola ${consoleName} con éxito!\nFecha: ${date}\nHoras: ${hours}`);
    
    // Limpiar los campos después de la reserva
    document.getElementById(`${consoleName.toLowerCase().replace(' ', '-')}-date`).value = '';
    document.getElementById(`${consoleName.toLowerCase().replace(' ', '-')}-hours`).value = '';
}

// Para que las funciones de reserva sean dinámicas para cada consola
document.querySelectorAll('.console-card button').forEach(button => {
    button.addEventListener('click', (event) => {
        const consoleName = event.target.previousElementSibling.previousElementSibling.textContent.trim();
        reserveConsole(consoleName);
    });
});
