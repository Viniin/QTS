function mascaraCpf(o,f){

    v_obj=o
    v_fun=f
    setTimeout('executaMascaraCpf()',1)

}

function executaMascaraCpf(){

    v_obj.value=v_fun(v_obj.value)

}

function cpf(v){

    //Remove tudo o que não é dígito
    v=v.replace(/\D/g,"")

    if (v.length <= 14) { //CPF

        //Coloca um ponto entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d)/,"$1.$2")

        //Coloca um ponto entre o sexto e o sétimo dígitos
        v=v.replace(/(\d{3})(\d)/,"$1.$2")

        //Coloca um hífen entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")

    } 

    return v
}