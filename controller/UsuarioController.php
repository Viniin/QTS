<?php 

    // IMPORT DA CLASSE DO USUÁRIO

    require_once('../model/Usuario.php');

    //INSTACIAMENTO DO OBJETO

    $usuario = new Usuario($_GET['txtNome'], $_GET['txtCpf'], $_GET['txtRendimento']);

    //INSTACIAMENTO DO RESULTADO.PHP

    header("Location: ../view/resultado.php?"

        ."txtNome=".$usuario->getNomeUsuario()
        ."&txtCpf=".$usuario->getCpfUsuario()
        ."&txtRendimento=".$usuario->getRendimentoUsuario()
        ."&txtAliquota=".$usuario->getAliquotaUsuario()
        ."&txtImposto=".$usuario->getImpostoUsuario()

    );

?>