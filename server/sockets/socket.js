const { io } = require('../server');

// Al conectarse un cliente
io.on('connection', (client) => {
    console.log(`Usuario conectado: `);

    // Enviar mensaje al cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    // Al desconectarse el cliente
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({ ok: true, mensaje: 'Todo salio bien!' });
        // } else { callback({ ok: false, mensaje: 'Todo salio mal!' }); }
    });

});