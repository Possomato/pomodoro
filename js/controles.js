export default function Controles({
  botaoParar,
  botaoRelogio,
  botaoPlay,
  botaoPause
}){
  const resetarBotes = () => {
    botaoParar.classList.add('escondido')
    botaoRelogio.classList.remove('escondido')
    botaoPlay.classList.remove('escondido')
    botaoPause.classList.add('escondido')
  }

  function formatNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

  return{
    resetarBotes,
    formatNumber
  }
}

