import { recebeUsuario } from "./recebeUsuario.js";

    document.addEventListener(
        'mouseover', () => {
            let usuario = recebeUsuario();
                carregarUsuario(usuario);
        }
    )

    function carregarUsuario(usuario) {

        document.getElementById('nome').value = usuario.nome;
        document.getElementById('cpf').value = usuario.cpf;
        document.getElementById('salario').value = usuario.salario;
        document.getElementById('aliquota').value = usuario.aliquota + '%';
        document.getElementById('imposto').value = 'R$' + usuario.imposto;
        
    }