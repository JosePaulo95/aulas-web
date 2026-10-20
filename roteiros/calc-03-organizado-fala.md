# Manipulação do DOM com JS: roteiro de fala

Gerado das anotações escondidas do deck [calc-03-dom-organizado.html](../calc-03-dom-organizado.html) (tecla **N** no deck mostra as mesmas notas). Nada disto aparece pro aluno.

Página de exemplo: "Meus jogos" (roda dentro do deck). O gancho do começo usa o site do bicho: [calculadora-cachorro/index.html](../calculadora-cachorro/index.html).

---

## Slide 1 — Manipulação do DOM com JS

**ILUSTRAR NO NAVEGADOR**
- **Antes** dos slides: abrir o site do bicho (`calculadora-cachorro/index.html`) e brincar com a turma.
- `F12` → Console: `document.querySelectorAll('button').length` (6) → `document.querySelector('h1').textContent = '🐉 ...'` → `F5` (tudo volta).

**FALAR**
- “Pra um site ficar interativo, a gente precisa dominar algumas técnicas do JavaScript.”
- Roteiro de hoje: relembrar funções, conhecer o `alert`, entender o DOM e ver os métodos, um grupo de cada vez.

**TEMPO**
- 0:00 → 1:30

---

## Slide 2 — function

**FALAR**
- Função é uma receita guardada: escrever a receita não faz o bolo. Só quando alguém **chama**.
- Hoje as funções são essenciais: é com elas que a página vai reagir ao clique.

**TEMPO**
- 1:30 → 2:00

---

## Slide 3 — Código: funções

**COM ↓ (SÓ VOCÊ)**
- Passos: cria a função (console vazio: ninguém chamou) → ↓ chama uma vez → ↓ chama de novo (aparece 2 vezes) → ↓ troca por uma função com parâmetro, chamada com dois nomes.

**FALAR**
- Escrevi a função e… nada. Ela só roda quando alguém chama, com os parênteses.
- Cada chamada roda tudo de novo.
- **Parâmetro** = a informação que a função recebe. O mesmo código serve pra Ana e pra Bia.

**ERRO COMUM**
- Chamar sem os parênteses (`dizerOi;`): não roda nada.

**TEMPO**
- 2:00 → 3:30

---

## Slide 4 — alert

**FALAR**
- A gente não precisa escrever o `alert`: o JavaScript já traz pronto. A gente só chama.
- Ele vai ajudar a mostrar o que cada método devolve.

**TEMPO**
- 3:30 → 3:50

---

## Slide 5 — Código: alert

**COM ↓ (SÓ VOCÊ)**
- Passos: `alert('Olá!')` (clicar OK) → ↓ com uma variável → ↓ uma função nossa que chama o `alert`.
- A cada ↓ a página recarrega e os alerts aparecem em fila: ir clicando OK.

**FALAR**
- Repara: a página **para** até alguém clicar OK.
- Dá pra juntar texto e variável com `+`.
- Função nossa chamando função pronta: é assim que tudo vai funcionar hoje.

**ILUSTRAR NO NAVEGADOR**
- Em qualquer site, no console: `alert('oi')`.

**TEMPO**
- 3:50 → 5:00

---

## Slide 6 — O navegador transforma o HTML numa árvore

**FALAR**
- Quando o navegador lê o HTML, ele monta uma **árvore**. Cada tag vira um galho. Isso é o **DOM** (Document Object Model).
- Quem está dentro é filho. Passar o mouse no `ul#lista`: pai é o `body`, filhos são os 3 `li`.
- O JS não mexe no arquivo: mexe nessa árvore. Por isso o F5 desfez tudo.

**ILUSTRAR NO NAVEGADOR**
- Em qualquer site: `F12` → aba **Elements**. “É a mesma árvore, só que deitada.”

**TEMPO**
- 5:00 → 6:00

---

## Slide 7 — document

**FALAR**
- `document` é a raiz da árvore. Quando o JS quer qualquer coisa da página, ele pede pro `document`.
- O ponto (`.`) é “de dentro de”: `document.querySelector` = o querySelector do documento.

**TEMPO**
- 6:00 → 6:30

---

## Slide 8 — Métodos pra manipular o DOM

**FALAR**
- O mapa da aula: 5 grupos. Primeiro a gente **pega** um elemento, depois **lê ou muda** ele, muda o **estilo**, faz reagir ao **clique** e, no fim, **cria** coisas novas.
- Sempre nessa ordem: sem pegar, não dá pra mudar.

**TEMPO**
- 6:30 → 7:30

---

## Slide 9 — querySelector

**FALAR**
- Lembram do CSS? `h1` é tag, `.jogo` é classe, `#lista` é id. **É o mesmo seletor.**

**TEMPO**
- 7:30 → 7:50

---

## Slide 10 — Código: querySelector

**COM ↓ (SÓ VOCÊ)**
- Começa no `index.html` da página de exemplo → ↓ pega o `h1` → ↓ `.jogo` (só o Minecraft) → ↓ `#lista` → ↓ `.sumiu` (`null`).
- Cada elemento mostrado no console pisca na página.

**FALAR**
- Essa é a página de exemplo: título, lista, dois campos, um botão e duas coisas escondidas (já já).
- Guarda numa variável (`const titulo`) pra usar depois.
- Tem 3 `.jogo`, mas veio só o **primeiro**.
- `null` = não achei nada. É o erro mais comum.

**ERRO COMUM**
- Esquecer o `#` ou o ponto: `querySelector('lista')` procura uma tag `<lista>`.

**TEMPO**
- 7:50 → 9:20

---

## Slide 11 — querySelectorAll

**FALAR**
- Mesmo seletor, mas volta uma **lista** (NodeList).

**TEMPO**
- 9:20 → 9:40

---

## Slide 12 — Código: querySelectorAll

**COM ↓ (SÓ VOCÊ)**
- Passos: pega todos os `.jogo` (os 3 piscam) → ↓ `alert(jogos.length)` (3) → ↓ `forEach` pinta todos de roxo.

**FALAR**
- `.length` = quantos achou.
- Lista não tem `style`. Pra mexer em cada um, `forEach`: passa de um em um.

**ERRO COMUM**
- `jogos.style.color = 'purple'` sem o `forEach`: dá erro.

**TEMPO**
- 9:40 → 11:00

---

## Slide 13 — textContent

**FALAR**
- Sem o `=`, **lê**. Com o `=`, **escreve**.

**TEMPO**
- 11:00 → 11:20

---

## Slide 14 — Código: textContent

**COM ↓ (SÓ VOCÊ)**
- Passos: `alert(titulo.textContent)` (lê) → ↓ troca o título → ↓ troca o primeiro jogo pra Zelda.

**FALAR**
- Ler: aparece no alert. Escrever: aparece na página.
- Juntou os dois grupos: `querySelector` pega, `textContent` muda.

**TEMPO**
- 11:20 → 12:20

---

## Slide 15 — innerHTML

**FALAR**
- Parecido com o `textContent`, mas o navegador **lê as tags**.

**TEMPO**
- 12:20 → 12:40

---

## Slide 16 — Código: textContent × innerHTML

**COM ↓ (SÓ VOCÊ)**
- Passos: `textContent` com `<b>` (as tags aparecem escritas) → ↓ troca pra `innerHTML` (negrito) → ↓ troca a lista inteira → ↓ `innerHTML = ''` (esvazia).

**FALAR**
- `textContent` põe o texto do jeito que está. `innerHTML` cria tags de verdade.
- `innerHTML = ''` troca o conteúdo por nada: apaga todos os filhos.
- Regra de bolso: texto do usuário → `textContent`. `innerHTML` só quando **você** escreveu o HTML.

**TEMPO**
- 12:40 → 14:00

---

## Slide 17 — value

**FALAR**
- Esse é muito importante: é assim que o JS sabe o que o usuário escreveu.
- `input` é diferente: o texto fica no `value`, não no `textContent`.

**TEMPO**
- 14:00 → 14:20

---

## Slide 18 — Código: .value

**COM ↓ (SÓ VOCÊ)**
- Os campos já vêm com **Ana** e **12**.
- Passos: `alert(nome.value)` → ↓ escreve outro nome no campo → ↓ `alert(idade.value + 7)` (**127**!) → ↓ `Number()` (19).

**FALAR**
- Ler e escrever, igual ao `textContent`.
- 12 + 7 = 127?! Deixar eles tentarem explicar antes.
- O `value` é sempre **texto**, mesmo com `type="number"`. `Number()` transforma em número.

**TEMPO**
- 14:20 → 15:40

---

## Slide 19 — classList

**FALAR**
- O CSS já sabe deixar bonito. O JS só decide **quando**.
- `toggle` é um interruptor: tem? tira. Não tem? põe.

**TEMPO**
- 15:40 → 16:00

---

## Slide 20 — Código: classList

**COM ↓ (SÓ VOCÊ)**
- Passos: mostra o `style.css` com `.destaque` e `.riscado` → ↓ `add('destaque')` no título → ↓ risca o primeiro jogo → ↓ `toggle` no título (tira de novo).

**FALAR**
- Dá pra fazer `titulo.style.background = 'yellow'`, mas aí o visual mora no JS. Com classe, o CSS fica no CSS.
- É assim que se faz modo escuro: uma linha e a página toda muda.

**ERRO COMUM**
- `classList.add('.destaque')` com ponto. O ponto é só no CSS.

**TEMPO**
- 16:00 → 17:20

---

## Slide 21 — onclick

**FALAR**
- Lembram das funções? Até agora a gente chamava no código. Com `onclick`, quem chama é o **clique**.
- É um atributo do HTML, igual `id` e `class`.

**TEMPO**
- 17:20 → 17:40

---

## Slide 22 — Código: onclick

**COM ↓ (SÓ VOCÊ)**
- Começa no `index.html` com o `onclick`. Clicar no botão: erro no console (`clicou is not defined`).
- Passos: ↓ função `clicou` com `alert` (clicar: aparece) → ↓ a função também muda o título.

**FALAR**
- O HTML chama a função, mas ninguém escreveu ela ainda.
- Cada clique = a função roda de novo.
- Junta tudo: no clique, `querySelector` pega e `textContent` muda.
- Na próxima aula tem um jeito mais organizado: `addEventListener`.

**ERRO COMUM**
- Nome diferente no HTML e no JS: “is not defined”.

**TEMPO**
- 17:40 → 19:00

---

## Slide 23 — Colocar HTML novo na página: 3 jeitos

**FALAR**
- Três jeitos de fazer aparecer algo novo. Os três usam o botão com `onclick`.
- **1**: quando a coisa é sempre a mesma (um aviso, um menu). **2**: rápido pra HTML pequeno que você escreveu. **3**: o mais “certinho”, bom pra listas que crescem.

**TEMPO**
- 19:00 → 19:40

---

## Slide 24 — Código: jeito 1 (display none)

**COM ↓ (SÓ VOCÊ)**
- Começa no `index.html`: o `<p id="segredo" class="escondido">` está lá, mas não aparece.
- Passos: ↓ `style.css` com `display: none` → ↓ no clique, `classList.remove` (clicar: aparece) → ↓ troca por `toggle` (some e volta).

**FALAR**
- `display: none` = “existe, mas não desenha”.
- Também dá com `segredo.style.display = 'block'`, mas com classe o CSS fica no CSS.

**TEMPO**
- 19:40 → 20:50

---

## Slide 25 — Código: jeito 2 (innerHTML)

**COM ↓ (SÓ VOCÊ)**
- Passos: pega a `#caixa` (vazia) → ↓ no clique, `innerHTML = ...` (clicar várias vezes: só um) → ↓ troca por `+=` (cada clique soma mais um).

**FALAR**
- O HTML não existia: o JS escreve ele como texto e o navegador transforma em tag.
- `=` troca tudo. `+=` soma no final.

**TEMPO**
- 20:50 → 21:50

---

## Slide 26 — Código: jeito 3 (createElement)

**COM ↓ (SÓ VOCÊ)**
- Passos: pega a lista e o campo → ↓ no clique, **cria** um `li` (console mostra `<li></li>`, a página não muda) → ↓ **preenche** com o nome digitado → ↓ **pendura** com `append`.
- Testar trocando o nome no campo e clicando de novo.

**FALAR**
- **1. criar**: nasce na memória. **2. preencher**. **3. pendurar**: só agora aparece.
- Junta quase tudo da aula: `querySelector`, `value`, `textContent`, `onclick`.

**ERRO COMUM**
- Esquecer o `append`: “não aparece nada”.

**TEMPO**
- 21:50 → 23:00

---

## Slide 27 — Cola

**FALAR**
- Os mesmos 5 grupos do começo, agora com o jeito de escrever. “Tirem print deste slide.”
- Mini-desafio: um botão “limpar” que esvazia a lista de jogos.
- Gancho: “na próxima aula, um jeito melhor que o `onclick`: `addEventListener`”.

**TEMPO**
- 23:00 → 24:00

---
