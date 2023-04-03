//todo lo que esta dentro de public es del lado del cliente
const socket = io();
//nos permite configuarr el socket del lado del cliente..

let user; //este user sera con el que el cliente se identificara para saber quien escribio el mensaje
const chatBox = document.getElementById("chatBox"); // donde se escribe el mensaje

Swal.fire ({
    title: "Identificate",
    text: "Ingresa el usuario para identificarte",
    input: "text", //se indica que el cliente debe escribir u texto para poder avanzar en esta alerta
    inputValidator: (value) => { //funcion de sweetalert
        return !value && "Necesitas escribir el usuario"; //esta validacion ocurre si el usuario decide dar en "continaur" sin haber colocado un nombre de usuario
    },
    allowOutsideClick: false, // no permite que se cliquee en otra parte
}).then (result => {
    user= result.value; // que al user se le asigne el valor que puso en la caja de seewtalert
})

//chatbox es la caja de texto
chatBox.addEventListener("keyup", event => { // keyup es cuando se escriba algo y se presiona una tecla
    if(event.key === "Enter"){ //cuando el usuario apriete enter
        if(chatBox.value.trim().length > 0){ //verifica que haya texto y haya algun caracter
            socket.emit("message", {user:user, message:chatBox.value}); //si hay algo escrito se crea este evento con el usuario y el mensaje y se lo envia al srvidor
            chatBox.value =""; //una vez emitido se deja en blanco el chatbox
        }
    }
})


//el cliente debe recibir ahora todos los menajes de los demas
socket.on('messagelogs', (data) => { //en el objeto data estamos recibiendo todos los mensajes actualizados (array)
    let log = document.getElementById("messageLogs");
    let messages = "";
    data.forEach(message => {
        messages += `${message.user} : ${message.message} <br>`;
        
    });
    log.innerHTML = messages;
})
