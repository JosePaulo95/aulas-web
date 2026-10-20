# Métodos do DOM (um método por vez): roteiro de fala

Gerado das anotações escondidas do deck [calc-03-dom-metodos.html](../calc-03-dom-metodos.html) (tecla **N** no deck mostra as mesmas notas). Nada disto aparece pro aluno.

Página de exemplo: "Meus jogos" (roda dentro do deck). O gancho do começo usa o site do bicho: [calculadora-cachorro/index.html](../calculadora-cachorro/index.html).

---

## Slide 1 — Mexendo no DOM

**ILUSTRAR NO NAVEGADOR**
- **Antes** dos slides: abrir o site do bicho (`calculadora-cachorro/index.html`) e brincar com a turma.
- `F12` → Console (zoom com `Ctrl` + `+`): `document.title = 'Idade de Dragão'` (a aba muda) → `document.querySelectorAll('button').length` (6) → `document.querySelector('h1').textContent = '🐉 ...'` → `F5` (tudo volta).

**FALAR**
- “Pra um site ficar interativo, a gente precisa dominar algumas técnicas do JavaScript. Hoje: um método de cada vez.”
- A página da direita é só um exemplo simples pra testar os métodos.

**TEMPO**
- 0:00 → 2:00

---

## Slide 2 — O navegador transforma o HTML numa árvore

**FALAR**
- Quando o navegador lê o HTML, ele não guarda o texto: monta uma **árvore**. Cada tag vira um galho.
- Isso tem nome: **DOM**, Document Object Model. “Modelo de objetos do documento.”
- Pai e filho: quem está dentro é filho. Passar o mouse no `ul#lista`: pai é o `body`, filhos são os `li`.
- O JS do começo não mexeu no arquivo: mexeu **nessa árvore**. Por isso o F5 desfez tudo.

**ILUSTRAR NO NAVEGADOR**
- Em qualquer site: `F12` → aba **Elements**. Abrir e fechar os triângulos: “é a mesma árvore, só que deitada”.
- Passar o mouse num nó do Elements: o navegador pinta o elemento na página.

**PERGUNTA**
- “Quem é o pai dos `li`?” (o `ul#lista`)

**TEMPO**
- 2:00 → 3:30

---

## Slide 3 — document

**FALAR**
- `document` é a raiz da árvore. Todo método de hoje começa nele.
- O ponto (`.`) é “de dentro de”: `document.title` é o título de dentro do documento.

**TEMPO**
- 3:30 → 4:00

---

## Slide 4 — Código: document

**COM ↓ (SÓ VOCÊ)**
- Começa no `index.html` da página de exemplo → ↓ `script.js` com `console.log(document.title)` → ↓ troca o título (a aba muda) → ↓ fundo rosa.

**FALAR**
- Essa é a página que vamos usar: um título, uma lista, dois campos, um botão e duas coisas escondidas (já já).
- `console.log` mostra o valor no console: é o nosso “espião”.
- Lembram do `document.title` do começo? Agora sabem o que era.

**TEMPO**
- 4:00 → 5:00

---

## Slide 5 — querySelector

**FALAR**
- Lembram do CSS? `h1` é tag, `.jogo` é classe, `#lista` é id. **É o mesmo seletor.**
- “Vai na árvore e me traz o primeiro que bate com isso.”

**TEMPO**
- 5:00 → 5:30

---

## Slide 6 — Código: querySelector

**COM ↓ (SÓ VOCÊ)**
- Passos: pega o `h1` → ↓ `.jogo` (só o Minecraft, o primeiro) → ↓ `#lista` → ↓ `.sumiu` (`null`).
- Cada elemento mostrado no console pisca na página.

**FALAR**
- Guarda numa variável (`const titulo`) pra usar depois.
- Tem 3 `.jogo`, mas veio só um: o **primeiro**.
- `null` = não achei nada. Guardem essa palavra: é o erro mais comum.

**ILUSTRAR NO NAVEGADOR**
- Em qualquer site, no console: `document.querySelector('h1')`. Passar o mouse no resultado: o elemento acende na página.

**ERRO COMUM**
- Esquecer o `#` ou o ponto: `querySelector('lista')` procura uma tag `<lista>` e dá `null`.

**TEMPO**
- 5:30 → 7:00

---

## Slide 7 — querySelectorAll

**FALAR**
- Mesmo seletor, mas volta uma **lista** (NodeList). Mesmo se achar um só.

**TEMPO**
- 7:00 → 7:20

---

## Slide 8 — Código: querySelectorAll

**COM ↓ (SÓ VOCÊ)**
- Passos: pega todos os `.jogo` (os 3 piscam) → ↓ `.length` (3) → ↓ `[0]` → ↓ `forEach` pinta todos de roxo.

**FALAR**
- `.length` = quantos achou. `[0]` = o primeiro (a contagem começa no zero).
- Lista não tem `style` nem `textContent`. Pra mexer em cada um, `forEach`: passa de um em um.
- Se não acha nada, não dá `null`: dá uma lista vazia, `length` 0.

**ERRO COMUM**
- `jogos.style.color = 'purple'` sem o `forEach`: dá erro.

**PAUSA E PRATICA**
- “Pausem e descubram no console quantos `input` a página tem.” (2)

**TEMPO**
- 7:20 → 8:50

---

## Slide 9 — textContent

**FALAR**
- Não é método, é uma **propriedade**: não tem parênteses. A gente lê ou escreve.
- Sem o `=`, **lê**. Com o `=`, **escreve**.

**TEMPO**
- 8:50 → 9:10

---

## Slide 10 — Código: textContent

**COM ↓ (SÓ VOCÊ)**
- Passos: lê o texto do `h1` → ↓ troca o título → ↓ troca o primeiro jogo pra Zelda.

**FALAR**
- Ler: aparece no console. Escrever: aparece na página.
- Junta tudo: `querySelector` pega, `textContent` muda.

**ILUSTRAR NO NAVEGADOR**
- Em qualquer site: trocar o texto de um título pelo console e dar `F5`. Voltou: o arquivo nunca mudou.

**TEMPO**
- 9:10 → 10:10

---

## Slide 11 — innerHTML

**FALAR**
- Parecido com o `textContent`, mas o navegador **lê as tags**.

**TEMPO**
- 10:10 → 10:30

---

## Slide 12 — Código: textContent × innerHTML

**COM ↓ (SÓ VOCÊ)**
- Passos: `textContent` com `<b>` (as tags aparecem escritas) → ↓ troca pra `innerHTML` (negrito) → ↓ lê o `innerHTML` da lista → ↓ troca a lista inteira → ↓ `innerHTML = ''` (esvazia).

**FALAR**
- `textContent` põe o texto do jeito que está. `innerHTML` cria tags de verdade.
- Ler o `innerHTML` da lista devolve os `<li>` como texto.
- `innerHTML = ''`: troca o conteúdo por nada. Apaga todos os filhos.
- Regra de bolso: texto do usuário → `textContent`. `innerHTML` só quando **você** escreveu o HTML.

**PERGUNTA**
- “Pra mostrar o nome que a pessoa digitou, qual dos dois?” (textContent)

**TEMPO**
- 10:30 → 12:00

---

## Slide 13 — .value

**FALAR**
- `input` é diferente: o que foi digitado fica no `.value`, não no `textContent`.

**TEMPO**
- 12:00 → 12:20

---

## Slide 14 — Código: .value

**COM ↓ (SÓ VOCÊ)**
- Os campos já vêm com **Ana** e **12**.
- Passos: lê o nome → ↓ escreve outro nome no campo → ↓ idade + 7 (**127**!) → ↓ `Number()` (19).

**FALAR**
- Ler e escrever, igual ao `textContent`.
- 12 + 7 = 127?! Deixar eles tentarem explicar antes.
- O `.value` é sempre **texto**, mesmo com `type="number"`. Texto + número = juntar.
- `Number()` transforma o texto em número de verdade.

**ERRO COMUM**
- `textContent` num `input` (vem vazio) ou `.value` num `p` (vem `undefined`).

**TEMPO**
- 12:20 → 13:40

---

## Slide 15 — classList

**FALAR**
- O CSS já sabe deixar bonito. O JS só decide **quando**: põe ou tira a classe.
- `toggle` é um interruptor: tem? tira. Não tem? põe.

**TEMPO**
- 13:40 → 14:00

---

## Slide 16 — Código: classList

**COM ↓ (SÓ VOCÊ)**
- Passos: mostra o `style.css` com `.destaque` e `.riscado` → ↓ `add('destaque')` no título → ↓ risca o primeiro jogo → ↓ `toggle` no título (tira de novo).

**FALAR**
- Dá pra fazer `titulo.style.background = 'yellow'`, mas aí o visual mora no JS. Com classe, o CSS continua no CSS.
- É assim que se faz modo escuro: uma linha de JS e a página toda muda.

**ILUSTRAR NO NAVEGADOR**
- Elements aberto do lado do Console: rodar `toggle` várias vezes e ver o `class` piscar na árvore.

**ERRO COMUM**
- `classList.add('.destaque')` com ponto. O ponto é só no CSS.

**TEMPO**
- 14:00 → 15:20

---

## Slide 17 — onclick

**FALAR**
- Até agora o código rodava sozinho, quando a página abria. Com `onclick`, ele espera o **clique**.
- É um atributo do HTML, igual `id` e `class`. Dentro dele vai o nome da função.

**TEMPO**
- 15:20 → 15:40

---

## Slide 18 — Código: onclick

**COM ↓ (SÓ VOCÊ)**
- Começa no `index.html` com o `onclick` no botão. Clicar no botão: erro no console (`clicou is not defined`).
- Passos: ↓ `script.js` com a função `clicou` e um `console.log` (clicar: aparece no console) → ↓ a função muda o título (clicar: muda na página).

**FALAR**
- O erro diz que a função não existe ainda. O HTML chama, mas ninguém escreveu ela.
- Cada clique = a função roda de novo.
- Agora junta tudo: no clique, `querySelector` pega e `textContent` muda.
- Na próxima aula tem um jeito mais organizado: `addEventListener`.

**ERRO COMUM**
- Nome diferente no HTML e no JS (`clicou()` × `Clicou`): “is not defined”.

**TEMPO**
- 15:40 → 17:00

---

## Slide 19 — 3 jeitos

**FALAR**
- Três jeitos de fazer aparecer algo novo. Os três funcionam; cada um serve melhor pra uma coisa.
- **1**: quando a coisa é sempre a mesma (um aviso, um menu). **2**: rápido pra HTML pequeno que você escreveu. **3**: o mais “certinho”, bom pra listas que crescem.
- Os três vão usar o botão com `onclick`.

**TEMPO**
- 17:00 → 17:40

---

## Slide 20 — Código: jeito 1 (display none)

**COM ↓ (SÓ VOCÊ)**
- Começa no `index.html`: o `<p id="segredo" class="escondido">` está lá, mas não aparece.
- Passos: ↓ `style.css` com `display: none` → ↓ `script.js`: no clique, `classList.remove('escondido')` (clicar: aparece) → ↓ troca por `toggle` (clicar várias vezes: some e volta).

**FALAR**
- `display: none` = “existe, mas não desenha”. Ele está na árvore, só não aparece.
- O JS tira a classe e o elemento aparece. Com `toggle` vira um botão de mostrar/esconder.
- Também dá com `segredo.style.display = 'block'`, mas com classe o CSS fica no CSS.

**ILUSTRAR NO NAVEGADOR**
- No Elements, mostrar que o `p#segredo` está lá mesmo escondido.

**TEMPO**
- 17:40 → 19:00

---

## Slide 21 — Código: jeito 2 (innerHTML)

**COM ↓ (SÓ VOCÊ)**
- Passos: pega a `#caixa` (vazia) → ↓ no clique, `innerHTML = '...'` (clicar várias vezes: aparece um só) → ↓ troca por `+=` (cada clique soma mais um).

**FALAR**
- Aqui o HTML não existia: o JS escreve ele como texto e o navegador transforma em tag.
- `=` troca tudo que tinha. `+=` soma no final.

**ERRO COMUM**
- Usar `=` querendo somar: só fica o último.

**TEMPO**
- 19:00 → 20:00

---

## Slide 22 — Código: jeito 3 (createElement)

**COM ↓ (SÓ VOCÊ)**
- Passos: pega a `#lista` → ↓ no clique, **cria** um `li` (console mostra `<li></li>`, a página não muda) → ↓ **preenche** com o nome digitado → ↓ **pendura** com `append` (clicar: entra na lista).
- Testar trocando o nome no campo e clicando de novo.

**FALAR**
- **1. criar**: o elemento nasce, mas fica na memória. **2. preencher**. **3. pendurar**: só agora aparece.
- Junta quase tudo da aula: `querySelector`, `.value`, `textContent`, `onclick`.
- Por que não `innerHTML` aqui? O texto vem do usuário: com `textContent` ninguém injeta HTML.

**ERRO COMUM**
- Esquecer o `append`: criou, preencheu e “não aparece nada”.

**TEMPO**
- 20:00 → 21:30

---

## Slide 23 — Os métodos de hoje

**FALAR**
- Recapitular coluna por coluna. “Tirem print deste slide.”
- Mini-desafio: um botão “limpar” que esvazia a lista de jogos (`innerHTML = ''`).
- Gancho: “na próxima aula, um jeito melhor que o `onclick`: eventos com `addEventListener`”.

**TEMPO**
- 21:30 → 22:30

---
