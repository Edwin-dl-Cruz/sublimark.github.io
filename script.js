function registrarUsuario(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de los campos de entrada
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var contraseña = document.getElementById('contraseña').value;
    var confirmarContraseña = document.getElementById('confirmar-contraseña').value;

    // Validar que las contraseñas coincidan
    if (contraseña !== confirmarContraseña) {
        swal({
            title:'ERROR',
            text:'Las contraseñas no coinciden. Por favor, inténtalo nuevamente.',
            icon:'error'
        })
        document.getElementById('contraseña').value = "";
        document.getElementById('confirmar-contraseña').value = "";
        return;
    }else{
        swal({
            title:'Registro correcto',
            icon:'success'
        })
    }

    // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor para su procesamiento o almacenamiento en una base de datos

    // Ejemplo de impresión de los datos en la consola del navegador
    console.log("Nombre:", nombre);
    console.log("Correo electrónico:", correo);
    console.log("Contraseña:", contraseña);
    console.log("Confirmar contraseña:", confirmarContraseña);

    // Limpiar los campos del formulario después de registrar al usuario
    document.getElementById('nombre').value = "";
    document.getElementById('correo').value = "";
    document.getElementById('contraseña').value = "";
    document.getElementById('confirmar-contraseña').value = "";

}

  

