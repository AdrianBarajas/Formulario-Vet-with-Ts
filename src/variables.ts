import { generarId } from "./funciones";
import type { Cita } from "./classes/types";





const citaObj: Cita = {
    id: generarId(),
    mascota: '',
    propietario: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

export {
    citaObj
}