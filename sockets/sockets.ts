import { Socket }  from 'socket.io';
import socketIO from 'socket.io';


export const desconectar = ( cliente: Socket ) => {

    cliente.on('disconnect', () =>{
        console.log('Cliente Desconectado');
    });

   

}

//Escuchar Mensajes
export const mensaje = (cliente: Socket, io: socketIO.Server) => {

    cliente.on('mensaje', ( payload:{de:String, cuerpo:String}) =>{

            console.log('Mensaje recibido',payload);

            io.emit('mensaje-nuevo', payload);// Con io tengo la gestion de todos los sockets




    });

}