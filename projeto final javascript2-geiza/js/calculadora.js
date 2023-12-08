/* 
1. Crie variáveis que capturem os valores que a usuária inserir e manipule-os nas funções 
2. Exibir o resultado na tela
*/

const botaoSubtrair = document.getElementById("subtrair")

// Função para subtrair
function somar() {
    //obtendo os valores dos campos de entrada
 const numero1= parseFloat(document.querySelector("#numero1Soma").value)
 const numero2= parseFloat(document.querySelector("#numero2Soma").value)
//calculando 
 const total = numero1 + numero2;
document.querySelector(".resultado").setAttribute("id","resultadoSoma")
// Criando um novo elemento strong para exibir o resultado
 const paragarafo = document.getElementById("resultadoSoma")
 const resultado = document.createElement('strong')
 paragarafo.appendChild(resultado)
 resultado.innerText = total

}


// Função para subtrair
function subtrair() {
    //obtendo os valores dos campos de entrada   
    const numero1= parseFloat(document.querySelector("#numero1Sub").value)
    const numero2= parseFloat(document.querySelector("#numero2Sub").value)
 //calculando a subtração   
    const total = numero1 - numero2
// Criando um novo elemento strong para exibir o resultado
    // Exibindo o resultado na página
    const paragarafo = document.getElementById("resultadoSub")
    const resultado = document.createElement('strong')
    paragarafo.appendChild(resultado)
    resultado.innerText = total
    
}
// Função para multiplicar
function multiplicar() {
 // Obtendo os valores dos campos de entrada
 const numero1 = parseFloat(document.querySelector("#numero1Mult").value)
 const numero2 = parseFloat(document.querySelector("#numero2Mult").value)

 // Calculando a multiplicação
 const total = numero1 * numero2

 // Criando um novo elemento strong para exibir o resultado
 // Exibindo o resultado na página
 const paragrafo = document.getElementById("resultadoMult")
 const resultado = document.createElement('strong')
 paragrafo.appendChild(resultado)
 resultado.innerText = total
}
   

// Função para dividir
function dividir() {
    // Obtendo os valores dos campos de entrada
    const numero1 = parseFloat(document.querySelector("#numero1Div").value);
    const numero2 = parseFloat(document.querySelector("#numero2Div").value);

    // Verificando se o divisor é zero
    if (numero2 === 0) {
        // Exibindo mensagem de erro se o divisor for zero
        document.getElementById("resultadoDiv").textContent = 'Não é possível dividir por zero!';
    } else {
        // Calculando a divisão se o divisor for diferente de zero
        const resultado = numero1 / numero2;

        // Exibindo o resultado na página
        const resultadoElemento = document.getElementById("resultadoDiv");
        resultadoElemento.textContent = 'Resultado: ' + resultado;

        // Criando um novo elemento strong para exibir o resultado
        const paragrafo = document.getElementById("resultadoDiv");
        const resultadoParagrafo = document.createElement('strong');
        paragrafo.appendChild(resultadoParagrafo);
        resultadoParagrafo.innerText = resultado;
    }
}



botaoSubtrair.addEventListener('click', subtrair)
// botaoMultiplicar.addEventListener('click', multiplicar)
