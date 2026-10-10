import { formulario } from "../selectores";

type NotificacionType = {
    texto: string;
    tipo: 'success' | 'error' | ''
}

export default class Notificacion {

    notificacion : NotificacionType ={
        texto: '',
        tipo: ''
    }

    constructor({ texto, tipo } : NotificacionType) {
        this.notificacion.texto = texto;
        this.notificacion.tipo = tipo;

        this.mostrar();
    }

    mostrar() {
        const alerta = document.createElement('div');
        // Bootstrap: text-center, w-100, p-3, my-3, alert, text-uppercase, fw-bold, small
        alerta.classList.add('text-center', 'w-100', 'p-3', 'my-3', 'alert', 'text-uppercase', 'fw-bold', 'small');

        const alertaPrevia = document.querySelector('.alert');
        alertaPrevia?.remove();

        // Bootstrap: alert-danger para errores, alert-success para éxitos
        if (this.notificacion.tipo === 'error') {
            alerta.classList.add('alert-danger');
        } else {
            alerta.classList.add('alert-success');
        }

        alerta.textContent = this.notificacion.texto;

        formulario?.parentElement?.insertBefore(alerta, formulario);

        setTimeout(() => {
            alerta.remove();
        }, 2500);
    }
}