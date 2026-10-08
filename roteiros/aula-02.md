# Aula 2 — Algoritmos com funções, listas e estruturas de dados básicas

**Ementa:** desenvolvimento de algoritmos com funções, listas e estruturas de dados básicas para resolução de problemas computacionais com JavaScript
**Duração alvo:** ~18-20 min

---

## Slide 1 — Título

**Texto no slide:**
- Tag: `AULA 02`
- Título: "Algoritmos com funções e listas"
- Subtítulo: "Funções • Arrays • Resolução de problemas"

**Fala:**
> Bem-vindos de volta! Na aula passada a gente aprendeu a guardar valores e tomar decisões. Hoje vamos aprender a organizar código em blocos reutilizáveis e a trabalhar com várias informações de uma vez.

---

## Slide 2 — Recap rápido

**Texto no slide:**
- Variáveis guardam valores
- Operadores comparam e calculam
- `if/else` toma decisões

**Fala:**
> Relembrando rapidinho: variáveis guardam valores, operadores fazem contas e comparações, e o `if/else` deixa o programa escolher caminhos. Hoje a gente constrói em cima disso.

---

## Slide 3 — O que é um algoritmo?

**Texto no slide:**
- "Uma sequência de passos pra resolver um problema"
- Exemplo: tutorial de um jogo, passo a passo de uma montagem de móvel

**Fala:**
> Um algoritmo é basicamente uma receita pra resolver um problema — uma sequência de passos bem definida. Isso já apareceu na aula passada, mas hoje a gente vai formalizar isso em blocos de código que dá pra reaproveitar quantas vezes quiser.

---

## Slide 4 — Funções

**Texto no slide:**
- "Um bloco de instruções com nome, que você pode chamar quando quiser"
- Código:
  ```
  function saudacao(nome) {
    console.log("Olá, " + nome + "!");
  }

  saudacao("Ana");
  ```

**Fala:**
> Uma função é um bloco de código que você empacota com um nome. Em vez de escrever a mesma coisa toda vez, você escreve uma vez dentro da função e depois só "chama" ela — passando a informação que muda, como o nome da pessoa, entre parênteses.

**Ação em tela:** digitar a função no console, depois chamá-la com nomes diferentes: `saudacao("Ana")`, `saudacao("Pedro")`.

---

## Slide 5 — Listas (arrays)

**Texto no slide:**
- "Uma caixinha organizada com várias posições"
- Código: `let notas = [8, 6, 9, 10];`
- `notas[0]` → `8`

**Fala:**
> E se eu precisar guardar várias informações do mesmo tipo, tipo as notas de um aluno em quatro provas? Aí eu uso um array, que é uma lista organizada por posição. A primeira posição é a posição zero — isso é importante, o JavaScript sempre começa contando do zero.

**Ação em tela:** criar `let notas = [8, 6, 9, 10];` no console, acessar `notas[0]`, `notas[1]`, mostrar `notas.length`.

---

## Slide 6 — Juntando função + array

**Texto no slide:**
- Problema: "Qual a maior nota da turma?"
- Código:
  ```
  function maiorNota(notas) {
    let maior = notas[0];
    for (let i = 1; i < notas.length; i++) {
      if (notas[i] > maior) {
        maior = notas[i];
      }
    }
    return maior;
  }
  ```

**Fala:**
> Agora vem a parte legal: juntar os dois. Vamos resolver um problema real — descobrir a maior nota de uma lista. A função começa assumindo que a primeira nota é a maior, e depois percorre o resto da lista com um `for`, comparando cada nota. Se encontrar uma maior, ela atualiza o valor guardado.

**Ação em tela:** digitar a função linha por linha no console, chamar com `maiorNota(notas)` e mostrar o resultado. Se der tempo, trocar os valores do array e rodar de novo.

---

## Slide 7 — Mini-desafio

**Texto no slide:**
- "Sua vez!"
- 1. Crie um array com 5 números
- 2. Escreva uma função que soma todos os valores da lista

**Fala:**
> Sua vez de praticar. Cria um array com 5 números, do jeito que você quiser. Depois, escreve uma função que percorre essa lista e soma todos os valores, retornando o total. Pausa aqui, tenta resolver, e depois volta pra conferir.

---

## Slide 8 — Recap

**Texto no slide:**
- ✔ Algoritmo = sequência de passos
- ✔ Funções empacotam código reutilizável
- ✔ Arrays guardam listas de valores (posição começa em 0)
- ✔ Dá pra combinar função + array pra resolver problemas
- Próxima aula: prática guiada de lógica de programação

**Fala:**
> Recapitulando: um algoritmo é uma sequência de passos, funções empacotam código pra reaproveitar, e arrays guardam listas de valores — sempre lembrando que a contagem começa do zero. Na próxima aula, a gente vai praticar tudo isso junto, resolvendo exercícios guiados. Até lá!
