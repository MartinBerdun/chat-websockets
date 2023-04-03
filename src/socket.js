import { Server } from "socket.io";

const socket = {};
let messages = []

socket.connect = function (httpServer) {
    socket.io = new Server (httpServer)

    
    let {io} = socket; // sacamos el io porque es la que contiene la conf del serviodr de sockets(es una desestructuracion)

    //el io hace referencia a todo el serviodr completo de sockets
    //el socket hace refrencia a un cliente en especifico

    io.on ("connection", (socket) => {
    console.log(`${socket.id} connected`)
    
        socket.on("message", (data) => {
        messages.push(data) //cada vez que reciba un mensaje
        io.emit("messagelogs", messages) //usando io le encio a todos los clientes conectados.. se muestra en todo servidor
        });
    })   

    // del lado del servidor para saber cuando un cliente se conecta... tambien tengo que configurarlo del lado del cliente
    

};


export default socket;