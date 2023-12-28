<?php
// Maneja la lógica de subir la noticia a la base de datos o almacenarla en el servidor

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $titulo = $_POST['titulo'];
    $descripcion = $_POST['descripcion'];

    // Subir la foto
    $foto = $_FILES['foto'];
    $nombreFoto = $foto['name'];
    $rutaFoto = 'uploads/' . $nombreFoto;

    move_uploaded_file($foto['tmp_name'], $rutaFoto);

    // Aquí puedes conectar con la base de datos y almacenar los datos

    // Responde con un mensaje de éxito (puedes ajustar según tus necesidades)
    echo 'Noticia subida con éxito';
} else {
    // Si no es una solicitud POST, responde con un mensaje de error
    http_response_code(405);
    echo 'Método no permitido';
}
?>