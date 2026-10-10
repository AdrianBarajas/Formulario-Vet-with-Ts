import { citaObj } from "./variables";
import { horaInput, emailInput, fechaInput, phoneInput, mascotaInput, sintomasInput, formularioInput, propietarioInput, formulario } from "./selectores"
import AdminCitas from "./classes/AdminCitas";
import Notificacion from "./classes/Notification";
import type { Cita } from "./classes/types";

let editando :boolean = false;

export function enviarFormulario(e: SubmitEvent) {
    e.preventDefault();
    const citas = new AdminCitas();

    if (Object.values(citaObj).some(prop => prop.trim() === '')) {
        console.log(citaObj)
        new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        });
        return;
    }

    if (editando) {
        citas.editar({ ...citaObj });
        new Notificacion({
            texto: 'Paciente editado con exito',
            tipo: 'success'
        });
    } else {
        citas.agregar(citaObj);
        new Notificacion({
            texto: 'Paciente registrado con exito',
            tipo: 'success'
        });
    }
    formulario?.reset();
    reiniciarObjetoCita();
    if(formularioInput !== null){
        formularioInput.textContent = 'Crear Cita';
    }
    editando = false;

}

export function llenarFormulario(e:Event) {
    const target = e.target as HTMLInputElement;
    citaObj[target.name] = target.value;
}

export function reiniciarObjetoCita() {
    //citaObj.mascota = '';
    //citaObj.propietario = '';
    //citaObj.email = '';
    //citaObj.telefono = '';
    //citaObj.fecha = '';
    //citaObj.sintomas = '';

    Object.assign(citaObj, {
        id: generarId(),
        mascota: '',
        propietario: '',
        email: '',
        telefono: '',
        hora: '',
        fecha: '',
        sintomas: ''
    })
}

export function cargarEdicion(cita:Cita) {
    Object.assign(citaObj, cita);

    mascotaInput.value = cita.mascota;
    propietarioInput.value = cita.propietario;
    emailInput.value = cita.email;
    phoneInput.value = cita.telefono;
    fechaInput.value = cita.fecha;
    horaInput.value = cita.hora;
    sintomasInput.value = cita.sintomas;

    editando = true;

    formularioInput.textContent = 'Guardar Cambios';
}

export function generarId() {
    return Math.random().toString(36).substring(2) + Date.now();
}