/*
  Calcule a média da estudante, em seguida, com base na nota exiba as seguintes 
  frases:
    1. Se a nota for 0, mostre na tela: "Infelizmente você zerou a prova :( "
    2. Se a nota for entre 0.1 e 3, mostre na tela: 
      "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente!"
    3. Se a nota for entre 3.1 e 5.9, mostre na tela: 
      "Você obteve media {nota}! Falta pouco para a média."
    4. Se a nota for entre 6 e 7, mostre na tela: "Você está na média com {nota}"
    5. Se a nota for entre 7.1 e 9.9, mostre na tela: "Notão! Sua média é {nota}!"
    6. Se a nota for entre 10, mostre na tela: 
      "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"
*/

// Selecionando o botão pelo ID "btnSituacao"
const botaoMedia = document.getElementById("btnSituacao")

// Função que calcula a média e determina a situação da estudante
function calcularMedia() {
  // Obtendo os valores das notas dos campos de input e convertendo para números
  const nota1 = parseFloat(document.getElementById('nota1').value)
  const nota2 = parseFloat(document.getElementById('nota2').value)
  const nota3 = parseFloat(document.getElementById('nota3').value)
  const nota4 = parseFloat(document.getElementById('nota4').value)

  // Calculando a média das notas
  let media = (nota1 + nota2 + nota3 + nota4) / 4

  let mensagem = "" // Variável para armazenar a mensagem correspondente à situação da estudante

  // Verificando a média e definindo a mensagem com base nos critérios fornecidos
  if (media === 0) {
    mensagem = "Infelizmente você zerou a prova :( "
  } else if (media >= 0.1 && media <= 3) {
    mensagem = `Caramba, deu ruim, você obteve media ${media}! Estude mais e tente novamente!`
  } else if (media >= 3.1 && media <= 5.9) {
    mensagem = `Você obteve media ${media}! Falta pouco para a média`
  } else if (media >= 6 && media <= 7) {
    mensagem = `Você está na média com ${media}`
  } else if (media >= 7.1 && media <= 9.9) {
    mensagem = `Notão! Sua média é ${media}`
  } else if (media >= 10) {
    mensagem = "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"
  }

  // Criando um novo elemento <p> para exibir a mensagem da situação da estudante
  const situacaoAluna = document.createElement('p')
  const divMedias = document.getElementById("contentCalcMedias") // Selecionando o elemento onde a mensagem será exibida
  divMedias.appendChild(situacaoAluna) // Adicionando o elemento <p> à div selecionada
  situacaoAluna.innerText = mensagem // Definindo o texto do elemento <p> com a mensagem correspondente à situação
}

// Adicionando um ouvinte de evento de clique ao botão, que aciona a função calcularMedia quando clicado
botaoMedia.addEventListener('click', calcularMedia)
