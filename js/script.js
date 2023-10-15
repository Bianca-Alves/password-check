var input1 = document.getElementById('senha');
var input2 = document.getElementById('confSenha');
var icon1 = document.getElementById('icon1');
var icon2 = document.getElementById('icon2');
var icon1CorOriginal = getComputedStyle(icon1).color;
var icon2CorOriginal = getComputedStyle(icon2).color;
var hr1 = document.getElementById('hr1');
var hr2 = document.getElementById('hr2');

input1.addEventListener('focus', function() {
    icon1.style.color = '#2684ff'
    hr1.style.border = '1px solid #2684ff'
});

input1.addEventListener('blur', function() {
    icon1.style.color = icon1CorOriginal
    hr1.style.border = ''
});

input2.addEventListener('focus', function() {
    icon2.style.color = '#2684ff'
    hr2.style.border = '1px solid #2684ff'
});

input2.addEventListener('blur', function() {
    icon2.style.color = icon2CorOriginal
    hr2.style.border = ''
});

function validar() {
    let senha = document.getElementById('senha').value
    let confSenha = document.getElementById('confSenha').value
    const form = document.getElementById('form')
    var corFonte = document.getElementById('result')
    
    form.addEventListener('submit', submit => {submit.preventDefault()})

    function verificarCaractereEspecial(senha) {
        const caracteresEspeciais = ['_', '@', '#', '$', '%', '&', '*'];
        return caracteresEspeciais.some(caractere => senha.includes(caractere));
    }

    function verificarLetraMaiuscula(senha) {
        const regex = /[A-Z]/;
        return regex.test(senha);
    }

    function verificarLetraMinuscula(senha) {
        const regex = /[a-z]/;
        return regex.test(senha);
    }
    
    function verificarNumero(senha) {
        const regex = /\d/;
        return regex.test(senha);
    }

    function verificarCaracteresRepetidos(senha) {
        const regex = /(.)\1{2}/;
        return !regex.test(senha);
    }
    
    function verificarSequenciaNumerica(senha) {
        const regex = /(012|123|234|345|456|567|678|789)/;
        return !regex.test(senha);
    }

    function verificarSequenciaNumericaDec(senha) {
        const regex = /(987|876|765|654|543|432|321|210)/;
        return !regex.test(senha);
    }    
    
    if (senha == '' || confSenha == '') {
        document.getElementById('result').innerHTML = ''
    } else if (senha == 'Bianca_33830622' && confSenha == '33830622_Bianca') {
        document.getElementById('result').innerHTML = 'Nome da criadora OK!'
        corFonte.style.color = 'green'
    } else if (senha != confSenha) {
        document.getElementById('result').innerHTML = 'As duas senhas devem ser iguais'
        corFonte.style.color = 'red'
    } else if (senha.length < 6) {
        document.getElementById('result').innerHTML = 'A senha deve conter no mínimo 6 dígitos'
        corFonte.style.color = 'red'
    } else if (!verificarCaractereEspecial(senha)) {
        document.getElementById('result').innerHTML = 'A senha deve conter no mínimo um caractere especial (_, @, #, $, %, &, *)'
        corFonte.style.color = 'red'
    } else if (!verificarLetraMaiuscula(senha)) {
        document.getElementById('result').innerHTML = 'A senha deve conter no mínimo uma letra maiúscula'
        corFonte.style.color = 'red'
    } else if (!verificarLetraMinuscula(senha)) {
        document.getElementById('result').innerHTML = 'A senha deve conter no mínimo uma letra minúscula'
        corFonte.style.color = 'red'
    } else if (!verificarNumero(senha)) {
        document.getElementById('result').innerHTML = 'A senha deve conter no mínimo um número'
        corFonte.style.color = 'red'
    } else if (!verificarCaracteresRepetidos(senha)) {
        document.getElementById('result').innerHTML = 'A senha não pode conter 3 caracteres repetidos'
        corFonte.style.color = 'red'
    } else if (!verificarSequenciaNumerica(senha)) {
        document.getElementById('result').innerHTML = 'A senha não pode conter sequência de números'
        corFonte.style.color = 'red'
    } else if (!verificarSequenciaNumericaDec(senha)) {
        document.getElementById('result').innerHTML = 'A senha não pode conter sequência decrescente de números'
        corFonte.style.color = 'red'
    } else {
        document.getElementById('result').innerHTML = 'Senha criada com sucesso!'
        corFonte.style.color = 'green'
    }
}