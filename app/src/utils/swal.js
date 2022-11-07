import Swal from "sweetalert2"

const swalProps = {
    width: "400px",
    timer: 10000,
    timerProgressBar: true,
    confirmButtonText: 'Aceptar'
}

export const swalRegisterFalse = () => {
    Swal.fire({
        title: 'El nombre de usuario ya esta registrado',
        text: 'Por favor, ingrese un nombre de usuario distinto',
        ...swalProps
    })
}

export const swalRegisterSuccess = () => {
    Swal.fire({
        title: 'El usuario se creo correctamente',
        ...swalProps
    })
}

export const swalLoginFailure = () => {
    Swal.fire({
        title: 'Usuario y/o contraseña invalida',
        text: 'Por favor, ingrese un usuario y/o contraseña validos',
        ...swalProps
    })
}

export const swalTokenMissing = () => {
    Swal.fire({
        title: 'Token invalido',
        text: 'Cierre e inicie sesión nuevamente',
        ...swalProps
    })
}