import { Usuario } from "./usuario.js";

export function recebeUsuario() {
    
    const urlParams = new URLSearchParams(window.location.search);

    return objetoUsuario (urlParams.get('nome'), urlParams.get('cpf'), urlParams.get('salario')

    )
}

function objetoUsuario(nome, cpf, salario) {

    return new Usuario (nome, cpf, salario);
    
}