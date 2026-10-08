# Aula 1 — Fundamentos de lógica de programação com JavaScript

**Ementa:** variáveis, operadores e estruturas básicas de controle
**Duração alvo:** ~18 min

---

## Slide 1 — Título

**Texto no slide:**
- Tag: `AULA 01`
- Título: "Fundamentos de lógica de programação com JS"
- Subtítulo: "Variáveis • Operadores • Estruturas de controle"

**Fala (roteiro de narração):**
> Oi, pessoal! Bem-vindos à primeira aula da nossa trilha de programação. Hoje a gente vai dar o primeiro passo de verdade: entender o que é programar e como o computador "pensa" em passos.

---

## Slide 2 — O que é programar?

**Texto no slide:**
- Card 1: "Passo a passo" — como uma receita de bolo
- Card 2: "O computador só faz o que você manda" — não adivinha, não interpreta "mais ou menos"
- Card 3: "Ordem importa" — trocar a ordem dos passos muda o resultado

**Fala:**
> Programar é dar instruções, uma de cada vez, numa ordem específica. É tipo uma receita: se você inverter "assar" com "misturar os ingredientes", o bolo não sai. Com o computador é a mesma coisa — e ele é bem mais "chato" que a gente, porque não adivinha o que você quis dizer. Se você escrever algo com erro de sintaxe, ele simplesmente não entende.

---

## Slide 3 — Onde a gente escreve código hoje

**Texto no slide:**
- Opção 1: Console do navegador (F12 → aba Console)
- Opção 2: Editor online (replit.com ou playcode.io)
- Nota: "Sem instalar nada!"

**Fala:**
> Pra essa trilha, a gente não precisa instalar nenhum programa. Duas opções: primeiro, o console do próprio navegador — aperta F12, vai na aba "Console", e já dá pra digitar código JavaScript ali. Segundo, se você quiser algo que salva o que você escreveu, dá pra usar um editor online, tipo o replit ou o playcode. Eu vou usar o console agora, ao vivo, pra vocês verem.

**Ação em tela:** abrir o DevTools no navegador, mostrar a aba Console.

---

## Slide 4 — Variáveis

**Texto no slide:**
- "Uma caixinha com nome, que guarda um valor"
- Código: `let idade = 16;`
- Código: `let nome = "Ana";`

**Fala:**
> Toda vez que você precisa guardar uma informação pra usar depois, você cria uma variável. Pensa numa caixinha com etiqueta: você escreve o nome da caixinha, `idade`, e coloca um valor dentro, `16`. Da próxima vez que eu falar `idade`, o JavaScript sabe que eu tô falando desse valor guardado.

**Ação em tela:** digitar `let idade = 16;` e `let nome = "Ana";` no console, mostrar o retorno.

---

## Slide 5 — Operadores

**Texto no slide:**
- Aritméticos: `+  -  *  /`
- Comparação: `==  >  <  >=`
- Exemplo: `idade > 18` → `false`

**Fala:**
> Com as variáveis criadas, a gente pode fazer contas — os operadores aritméticos são os mesmos da matemática: soma, subtração, multiplicação, divisão. Mas também tem os operadores de comparação, que perguntam "isso é igual a aquilo?", "isso é maior que aquilo?" — e a resposta é sempre `true` ou `false`.

**Ação em tela:** digitar `idade + 4`, depois `idade > 18` no console, mostrar os resultados.

---

## Slide 6 — Estruturas de controle: if / else

**Texto no slide:**
- "Se chover, levo guarda-chuva. Se não, não levo."
- Código:
  ```
  if (idade >= 18) {
    console.log("Maior de idade");
  } else {
    console.log("Menor de idade");
  }
  ```

**Fala:**
> Agora a parte mais poderosa: fazer o programa tomar decisões. O `if` funciona exatamente como a gente pensa no dia a dia — "se isso for verdade, faça aquilo; senão, faça outra coisa". Aqui, se a idade for maior ou igual a 18, o console mostra "Maior de idade"; senão, mostra "Menor de idade".

**Ação em tela:** digitar o bloco `if/else` no console com a variável `idade` criada antes, trocar o valor de `idade` e rodar de novo pra mostrar os dois caminhos.

---

## Slide 7 — Mini-desafio

**Texto no slide:**
- "Sua vez!"
- 1. Crie uma variável com sua idade
- 2. Crie um `if/else` que mostra se você pode tirar carteira de motorista (18+)

**Fala:**
> Agora é sua vez. Abre o console aí e cria uma variável com a sua idade. Depois, escreve um `if/else` que mostra no console se você já pode tirar carteira de motorista ou não. Pausa o vídeo, tenta, e depois continua pra ver a resposta.

---

## Slide 8 — Recap

**Texto no slide:**
- ✔ Programar = dar instruções em ordem
- ✔ Variáveis guardam valores
- ✔ Operadores fazem contas e comparações
- ✔ `if/else` toma decisões
- Próxima aula: funções, listas e algoritmos

**Fala:**
> Recapitulando: hoje a gente viu que programar é dar instruções passo a passo, que variáveis guardam valores, que operadores fazem contas e comparações, e que o `if/else` deixa o programa tomar decisões. Na próxima aula, a gente vai aprender a organizar código em funções e trabalhar com listas de valores. Até lá!
