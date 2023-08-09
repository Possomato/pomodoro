import Controles from "./controles.JS"

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

const configControles = {
  botaoParar,
  botaoRelogio,
  botaoPlay,
  botaoPause
}
const controles = Controles(configControles)

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
      displayMinutos.textContent = controles.formatNumber(minutos)
  
      segundos = 60
      displaySegundos.textContent = segundos
    }

    segundos -= 1;
    displaySegundos.textContent = controles.formatNumber(segundos);

    if (minutos === 0 && segundos === 0){
      clearInterval(cronometro) // Para o cronômetro quando chegar a 0
      resetarBotes()
      displayMinutos.textContent = controles.formatNumber(minutosOriginais)
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
    displayMinutos.textContent = controles.formatNumber(minutos)
  }
})

botaoParar.addEventListener('click', () => {
  controles.resetarBotes()
  clearInterval(cronometro)
  segundos = 60
  displaySegundos.textContent = controles.formatNumber(0)
  displayMinutos.textContent = controles.formatNumber(minutosOriginais)
})

botaoSomOff.addEventListener('click', () => {
  botaoSomOff.classList.add('escondido')
  botaoSomOn.classList.remove('escondido')
})

botaoSomOn.addEventListener('click', () => {
  botaoSomOn.classList.add('escondido')
  botaoSomOff.classList.remove('escondido')
})

