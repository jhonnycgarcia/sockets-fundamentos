var socket = io();

// Los ON son para escuchar información
// Los EMIT son para emitir o enviar informacion 

// Al conectarse al servidor desde el frontend
socket.on('connect', function() {
    console.log('Conectado al servidor (frontend)');
});

// Al desconectarse del servidor
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Enviar informacion al servidor (canal = enviarMensaje)
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo!'
}, function(res) {
    console.log('Respuesta server: ', res);
});

// Escuchar canal (enviarMensaje)
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});