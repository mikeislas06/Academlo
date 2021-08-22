//Vamos a sacar el correo de un texto y enviarle un mensaje de bienvenida

const text = 'Hola mi correo es miguel@academlo.com';

//Funcion que obtenga el correo
function getEmail(string) {
    const lastSpaceIndex = string.lastIndexOf(' ');
    const email = string.slice(lastSpaceIndex + 1);
    return email;
}

//Funcion que envie el mensaje
function sendMessage(email) {
    console.log('Enviamos un correo a ' + email);    
}

const e = getEmail(text);

sendMessage(e);