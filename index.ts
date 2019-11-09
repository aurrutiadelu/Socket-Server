
import Server from "./clases/server";
import { router } from './routes/router';
import bodyParser, { urlencoded } from 'body-parser';
import cors from 'cors';


 const server = new Server()



 //Antes de la rutas usar el body parser
 server.app.use( bodyParser.urlencoded({extended:true}));// middleware para coger datos de Post-Man
 server.app.use( bodyParser.json()); //middleware Curso de NodeJS

 //CORS llamar a mi backend server desde diferentes lugares fisicos
 server.app.use( cors({ origin:true, credentials:true })) //Cualquier persona acceda a mis servicios

 //Servicio de rutas
 server.app.use('/', router);

 server.start( () =>{
     console.log(`Servidor arrancado en el puerto ${server.port}`);
 })