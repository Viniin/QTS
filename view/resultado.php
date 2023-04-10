<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="shortcut icon" href="./assets/img/qts.png" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/style.css">    
    <title>Imposto de Renda - Resultado</title>
</head>
<body>
    <div class="container">
        <div class="buttons">
            <h2 id="titulo" >Resultado do seu Imposto de Renda</h2>
                <form action="index.php" method="POST">
                    <label for="">Nome:</label>
                    <input type="text" name="txtNome" id="txtNome" readonly value="<?php echo($_GET['txtNome']);?>">

                    <label for="">CPF:</label>
                    <input type="text" name="txtCpf" id="txtCpf" readonly value="<?php echo($_GET['txtCpf']);?>">

                    <label for="">Rendimento:</label>
                    <input type="text" name="txtRendimento" id="txtRendimento" readonly value="<?php echo($_GET['txtRendimento']);?>">

                    <label for="">Aliquota:</label>
                    <input type="text" name="txtAliquota" id="txtAliquota" readonly value="<?php echo($_GET['txtAliquota']);?>">

                    <label for="">Imposto de renda:</label>
                    <input type="text" name="txtImposto" id="txtImposto" readonly value="<?php echo($_GET['txtImposto']);?>">

                    <button type="submit" >Voltar Para Formúlario
                </form> 
        </div>
    </div>
</body>
</html>