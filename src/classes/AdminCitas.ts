import { contenedorCitas } from "../selectores";
import { cargarEdicion } from "../funciones";
import type { Cita } from "./types";


export default class AdminCitas {

    citas:Cita[]

    constructor() {
        this.citas = [];
    }

    agregar(cita:Cita) {

        this.citas = [...this.citas, { ...cita }];
        this.mostrar();
    }

    editar(citaActualizada:Cita) {
        this.citas = this.citas.map(cita => citaActualizada.id == cita.id ? citaActualizada : cita);
        this.mostrar();
    }

    eliminar(id:Cita['id']) {
        this.citas = this.citas.filter(cita => cita.id !== id);
        this.mostrar();
    }

    mostrar() {
        while (contenedorCitas?.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }

        if (this.citas.length == 0 && contenedorCitas) {
            contenedorCitas.innerHTML = `<p> No hay pacientes </p>`;
            return;
        }

        this.citas.forEach(cita => {
            // Contenedor de la cita
            const divCita = document.createElement('div');
            // Bootstrap: mx-5, my-4 (máx es 5), bg-white, shadow, p-4, rounded-3
            divCita.classList.add('mx-5', 'my-4', 'bg-white', 'shadow', 'p-4', 'rounded-3');

            const paciente = document.createElement('p');
            // Bootstrap: fw-normal, mb-2, text-secondary, text-transform-none
            paciente.classList.add('fw-normal', 'mb-2', 'text-secondary', 'text-transform-none');
            paciente.innerHTML = `<span class="font-bold text-uppercase">Mascota: </span> ${cita.mascota}`;

            const propietario = document.createElement('p');
            propietario.classList.add('fw-normal', 'mb-2', 'text-secondary', 'text-transform-none');
            propietario.innerHTML = `<span class="fw-bold text-uppercase">Propietario: </span> ${cita.propietario}`;

            const email = document.createElement('p');
            email.classList.add('fw-normal', 'mb-2', 'text-secondary', 'text-transform-none');
            email.innerHTML = `<span class="fw-bold text-uppercase">E-mail: </span> ${cita.email}`;

            const fecha = document.createElement('p');
            fecha.classList.add('fw-normal', 'mb-2', 'text-secondary', 'text-transform-none');
            fecha.innerHTML = `<span class="fw-bold text-uppercase">Fecha: </span> ${cita.fecha}`;


            const hora = document.createElement('p');
            hora.classList.add('fw-normal', 'mb-2', 'text-secondary', 'text-transform-none');
            hora.innerHTML = `<span class="fw-bold text-uppercase">Hora: </span> ${cita.hora}`;


            const telefono = document.createElement('p');
            telefono.classList.add('fw-normal', 'mb-2', 'text-secondary', 'text-transform-none');
            telefono.innerHTML = `<span class="fw-bold text-uppercase">Teléfono: </span> ${cita.telefono}`;

            const sintomas = document.createElement('p');
            sintomas.classList.add('fw-normal', 'mb-2', 'text-secondary', 'text-transform-none');
            sintomas.innerHTML = `<span class="fw-bold text-uppercase">Síntomas: </span> ${cita.sintomas}`;

            // --- BOTÓN EDITAR ---
            const btnEditar = document.createElement('button');
            // Bootstrap: btn, btn-primary (azul/indigo), text-uppercase, fw-bold, d-flex, align-items-center
            btnEditar.classList.add('btn', 'btn-primary', 'px-4', 'py-2', 'text-uppercase', 'fw-bold', 'd-flex', 'align-items-center');
            // Bootstrap para el icono: me-2 (margin-end para separar del texto). Eliminamos clases de Tailwind del SVG.
            btnEditar.innerHTML = 'Editar <svg fill="none" style="width: 1.25rem; height: 1.25rem;" class="ms-2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';
            const clone = structuredClone(cita);
            btnEditar.onclick = () => cargarEdicion(clone);
            // --- BOTÓN ELIMINAR ---
            const btnEliminar = document.createElement('button');
            // Bootstrap: btn, btn-danger (rojo)
            btnEliminar.classList.add('btn', 'btn-danger', 'px-4', 'py-2', 'text-uppercase', 'fw-bold', 'd-flex', 'align-items-center');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" style="width: 1.25rem; height: 1.25rem;" class="ms-2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
            btnEliminar.onclick = () => this.eliminar(cita.id);
            // --- CONTENEDOR DE BOTONES ---
            const contenedorBotones = document.createElement('div'); // 'div' en minúsculas por buena práctica
            // Bootstrap: d-flex, justify-content-between, mt-4 (máximo en Bootstrap es 5)
            contenedorBotones.classList.add('d-flex', 'justify-content-between', 'mt-4');
            contenedorBotones.appendChild(btnEditar);
            contenedorBotones.appendChild(btnEliminar);

            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(hora);
            divCita.appendChild(telefono);
            divCita.appendChild(sintomas);
            divCita.appendChild(contenedorBotones);
            contenedorCitas?.appendChild(divCita);
        });
    }
}