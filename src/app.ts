import './style.css'
import { horaInput, emailInput, fechaInput, phoneInput, mascotaInput, sintomasInput, formularioInput, propietarioInput, formulario } from "./selectores"
import { enviarFormulario ,llenarFormulario } from "./funciones";


formularioInput?.addEventListener('change', llenarFormulario);
propietarioInput?.addEventListener('change', llenarFormulario);
emailInput?.addEventListener('change', llenarFormulario);
mascotaInput?.addEventListener('change', llenarFormulario);
phoneInput?.addEventListener('change', llenarFormulario);
fechaInput?.addEventListener('change', llenarFormulario);
horaInput?.addEventListener('change', llenarFormulario);
sintomasInput?.addEventListener('change', llenarFormulario);

formulario?.addEventListener('submit', enviarFormulario);