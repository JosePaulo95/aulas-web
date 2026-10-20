// cada botão do HTML chama calcular('cachorro', 7, '🐕')
// (como o clique funciona: próxima aula!)

const campo = document.querySelector('#idade');
const resultado = document.querySelector('#resultado');

function calcular(animal, multiplicador, emoji) {
  const anos = campo.value * multiplicador;
  resultado.textContent =
    'Você tem ' + anos + ' anos de ' + animal + '! ' + emoji;
}

// tema claro/escuro: o botão liga e desliga a classe "escuro" no body
const botaoTema = document.querySelector('.tema');

function trocarTema() {
  document.body.classList.toggle('escuro');

  if (document.body.classList.contains('escuro')) {
    botaoTema.textContent = '☀️ Claro';
  } else {
    botaoTema.textContent = '🌙 Escuro';
  }
}
