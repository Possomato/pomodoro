const displayMinutos = document.querySelector('.minutos')
const displaySegundos = document.querySelector('.segundos')
const botaoPlay = document.querySelector('.botaoPlay')
const botaoPause = document.querySelector('.botaoPause')
const botaoRelogio = document.querySelector('.botaoRelogio')
const botaoParar = document.querySelector('.botaoParar')
const botaoSomOn = document.querySelector('.botaoSomOn')
const botaoSomOff = document.querySelector('.botaoSomOff')

let minutosOriginais = Number(displayMinutos.textContent)
let minutos
let segundos

let cronometro

function formatNumber(number) {
  return number < 10 ? `0${number}` : `${number}`;
}

botaoPlay.addEventListener('click', () => {
  minutos = Number(displayMinutos.textContent);
  segundos = Number(displaySegundos.textContent);

  botaoPlay.classList.add('escondido')
  botaoPause.classList.remove('escondido')
  botaoRelogio.classList.add('escondido')
  botaoParar.classList.remove('escondido')

  cronometro = setInterval(() => {

    if (segundos == 0){
      minutos -= 1
      displayMinutos.textContent = formatNumber(minutos)
  
      segundos = 60
      displaySegundos.textContent = segundos
    }

    segundos -= 1;
    displaySegundos.textContent = formatNumber(segundos);

    if (minutos === 0 && segundos === 0){
      clearInterval(cronometro) // Para o cronômetro quando chegar a 0
      resetarBotes()
      displayMinutos.textContent = formatNumber(minutosOriginais)
    }
  }, 1000);
})

botaoPause.addEventListener('click', () => {
  botaoPlay.classList.remove('escondido')
  botaoPause.classList.add('escondido')

  clearInterval(cronometro)
})

botaoRelogio.addEventListener('click', () => {
  let novosMinutos = parseInt(prompt('Digite os minutos'))

  if (isNaN(novosMinutos)){
    alert('por favor digite apenas números')
  } else{
    minutos = novosMinutos
    minutosOriginais = novosMinutos
    displayMinutos.textContent = formatNumber(minutos)
  }
})

botaoParar.addEventListener('click', () => {
  resetarBotes()
  clearInterval(cronometro)
  segundos = 60
  displaySegundos.textContent = formatNumber(0)
  displayMinutos.textContent = formatNumber(minutosOriginais)
})

botaoSomOff.addEventListener('click', () => {
  botaoSomOff.classList.add('escondido')
  botaoSomOn.classList.remove('escondido')
})

botaoSomOn.addEventListener('click', () => {
  botaoSomOn.classList.add('escondido')
  botaoSomOff.classList.remove('escondido')
})

const resetarBotes = () => {
  botaoParar.classList.add('escondido')
  botaoRelogio.classList.remove('escondido')
  botaoPlay.classList.remove('escondido')
  botaoPause.classList.add('escondido')
}