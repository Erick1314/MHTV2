function subirNoticia() {
    const form = document.getElementById('noticiaForm');
    const formData = new FormData(form);

    // Realizar la solicitud AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'snoti.php', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Aquí puedes manejar la respuesta del servidor si es necesario
            console.log('Noticia subida con éxito');
        }
    };

    // Enviar los datos al servidor
    xhr.send(formData);
}