function calculaIdade(animal, fator, emoji) {
    const idade_usuario = document.querySelector("#idade").value
    const idade_final = fator*idade_usuario

    document.querySelector("#resultado").textContent =
    'Você tem ' + idade_final + ' anos de ' + animal + '! ' + emoji;
}
