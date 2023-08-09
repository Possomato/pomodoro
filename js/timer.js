export default Timer = (displayMinutos, displaySegundos, controles, resetarBotes) => {
  let minutosOriginais = Number(displayMinutos.textContent);
  let minutos;
  let segundos;
  let cronometro;

  const startCronometro = () => {
    minutos = Number(displayMinutos.textContent);
    segundos = Number(displaySegundos.textContent);

    cronometro = setInterval(() => {
      if (segundos === 0) {
        minutos -= 1;
        displayMinutos.textContent = controles.formatNumber(minutos);

        segundos = 60;
        displaySegundos.textContent = segundos;
      }

      segundos -= 1;
      displaySegundos.textContent = controles.formatNumber(segundos);

      if (minutos === 0 && segundos === 0) {
        clearInterval(cronometro);
        resetarBotes();
        displayMinutos.textContent = controles.formatNumber(minutosOriginais);
      }
    }, 1000);
  };

  return {
    startCronometro,
  };
};
