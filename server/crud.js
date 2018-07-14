var Usuario = require('./modelUsuarios.js') //Asignarle a la variable USUARIO el modelo del usuario

module.exports.crearUsuarioDemo = function(callback){ //Función para crear usuarios
  var arr = [{ email: 'ariel@mail.com', user: "ariel", password: "12345"}, { email: 'juan@mail.com', user: "juan", password: "00000"}]; //array con la información de los usuarios a insertar
  Usuario.insertMany(arr, function(error, docs) { //Utilizar la función insertMany para insertar varios registros en una sola consulta
    if (error){ //Acciones si existe un error
      if (error.code == 11000){ //Verificar si el nombre de usuario (PrimaryKey) del existe
         // callback("Ingrese los datos para poder iniciar la Agenda")
        callback("Utilice los siguientes datos: </br>usuario: ariel | password:12345 </br>usuario: juan | password:00000")  Mostrar mensaje
      }else{
        callback(error.message) //Mostrar mensaje de error
      }
    }else{
        callback(null, "El usuario 'ariel' y 'juan' se ha registrado correctamente.") //Mostrar mensaje del usuario guardado con exito
     // callback(null, "El usuario 'ariel' y 'juan' se ha registrado correctamente. </br>usuario: ariel | password:12345 </br >usuario: juan | password:00000") //Mostrar mensaje del usuario guardado con exito
    }
  });
}
