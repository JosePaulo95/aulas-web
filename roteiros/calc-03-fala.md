# Manipulação do DOM (site Idade de Bicho): roteiro de fala

Gerado das anotações escondidas do deck [calc-03-dom.html](../calc-03-dom.html) (tecla **N** no deck mostra as mesmas notas). Nada disto aparece pro aluno.

Site pra usar no navegador/DevTools: [calculadora-cachorro/index.html](../calculadora-cachorro/index.html) (`script.js` = como foi feito; `script-final.js` = com erro e histórico).

---

## Slide 1 — Mexendo no DOM

**ILUSTRAR NO NAVEGADOR**
- **Antes** de seguir pros slides: abrir `calculadora-cachorro/index.html` no navegador. Digitar uma idade e clicar em vários bichos.
- `F12` → Console (zoom com `Ctrl` + `+`). Digitar `document.title = 'Idade de Dragão'` → apontar a aba mudando.
- `document.querySelectorAll('button').length` → 6. “Ele contou os botões pra mim.”
- `document.querySelector('h1').textContent = '🐉 Qual a sua idade de dragão?'` → o título muda na hora.
- `F5` → tudo volta. “Por que voltou? Já já vocês vão saber.”

**FALAR**
- “Pra esse site ficar interativo, a gente precisa dominar algumas técnicas do JavaScript. Vamos ver como isso foi feito.”

**TEMPO**
- 0:00 → 2:00

---

## Slide 2 — O navegador transforma o HTML numa árvore

**COM ↓ (SÓ VOCÊ)**
- Cada ↓ desce um nível: `html` → `head` e `body` → `title` e `.caixa` → o que tem na caixa → os botões.

**FALAR**
- Quando o navegador lê o HTML, ele não guarda o texto: monta uma **árvore**. Cada tag vira um galho.
- Isso tem nome: **DOM**, Document Object Model. “Modelo de objetos do documento.”
- Pai e filho: quem está dentro é filho. O `h1` é filho da `.caixa`, que é filha do `body`.
- O JS de agora há pouco não mexeu no arquivo: mexeu **nessa árvore**. Por isso o F5 desfez tudo.

**ILUSTRAR NO NAVEGADOR**
- No site: `F12` → aba **Elements**. Abrir e fechar os triângulos: “é a mesma árvore, só que deitada”.
- Passar o mouse num nó do Elements: o navegador pinta o elemento na página.

**PERGUNTA**
- “Quem é o pai dos botões?” (a `div.botoes`)

**TEMPO**
- 2:00 → 3:30

---

## Slide 3 — Código: document

**COM ↓ (SÓ VOCÊ)**
- Passos: vazio → ↓ `console.log(document.title)` → ↓ `document.title = ...` (a aba em cima do navegador muda) → ↓ fundo rosa.

**FALAR**
- `document` é a raiz da árvore. Tudo começa nele.
- O ponto (`.`) é “de dentro de”: `document.title` é o título de dentro do documento.
- Lembram do `document.title` do começo? Agora sabem o que era.

**TEMPO**
- 3:30 → 4:30

---

## Slide 4 — Código: querySelector

**COM ↓ (SÓ VOCÊ)**
- Passos: pega o `h1` e mostra no console → ↓ pega o `#idade` → ↓ `.sumiu` (dá `null`).

**FALAR**
- Lembram do CSS? `h1` é tag, `.botoes` é classe, `#idade` é id. **É o mesmo seletor.**
- `querySelector` = “vai na árvore e me traz **o primeiro** que bate com isso”.
- `null` = não achei nada. Guardem essa palavra: é o erro mais comum.

**ILUSTRAR NO NAVEGADOR**
- No console do site: `document.querySelector('#idade')`. Passar o mouse no resultado: o campo acende na página.

**ERRO COMUM**
- Esquecer o `#` ou o ponto: `querySelector('idade')` procura uma tag `<idade>` e dá `null`.

**TEMPO**
- 4:30 → 6:00

---

## Slide 5 — Código: querySelectorAll

**COM ↓ (SÓ VOCÊ)**
- Passos: pega todos os botões → ↓ `.length` (6) → ↓ mostra a lista → ↓ `forEach` pinta todos de roxo.

**FALAR**
- Lembram do 6 do começo? Era isso. Com `All` volta uma **lista** (NodeList).
- Lista não tem `textContent`. Pra mexer em cada um, `forEach`: passa de um em um.
- Se não acha nada, não dá `null`: dá uma lista vazia, `length` 0.

**ERRO COMUM**
- `botoes.style.background = 'purple'` sem o `forEach`: dá erro, a lista não tem `style`.

**PAUSA E PRATICA**
- “Pausem e descubram no console quantos `p` a página tem.” (3, contando o resultado)

**TEMPO**
- 6:00 → 7:30

---

## Slide 6 — Código: textContent

**COM ↓ (SÓ VOCÊ)**
- Passos: lê o texto do `h1` → ↓ troca pra dragão → ↓ escreve no `#resultado` sem ninguém clicar.

**FALAR**
- Sem o `=`, **lê**. Com o `=`, **escreve**. É igual à variável.
- É exatamente o que o site faz quando aparece “Você tem 84 anos de cachorro!”: escreve no `#resultado`.

**ILUSTRAR NO NAVEGADOR**
- No site: escrever no resultado pelo console e dar `F5`. Voltou ao normal: o arquivo nunca mudou.

**TEMPO**
- 7:30 → 8:30

---

## Slide 7 — Código: .value

**COM ↓ (SÓ VOCÊ)**
- O campo já vem com **12**.
- Passos: pega o campo → ↓ `campo.value` → ↓ vezes 7 (84) → ↓ mais 7 (**127**!) → ↓ `Number()` (19).
- Depois: trocar o número no campo do slide não muda o console (o código já rodou). Isso é assunto de eventos.

**FALAR**
- `input` é diferente: o que a pessoa digitou fica no `.value`, não no `textContent`.
- Vezes funciona. Mais… 127?! Deixar eles tentarem explicar antes.
- O `.value` é sempre **texto**, mesmo com `type="number"`. Texto + número = juntar.
- `Number()` transforma o texto em número de verdade.

**ERRO COMUM**
- Usar `textContent` num `input` (vem vazio) ou `.value` num `p` (vem `undefined`).

**TEMPO**
- 8:30 → 10:00

---

## Slide 8 — Código: textContent × innerHTML

**COM ↓ (SÓ VOCÊ)**
- Passos: `textContent` com `<b>` (as tags aparecem escritas) → ↓ troca pra `innerHTML` (o 84 fica em negrito).

**FALAR**
- `textContent` põe o texto do jeito que está. `innerHTML` lê como HTML e cria tags de verdade.
- Imagina o campo do usuário indo direto pro `innerHTML`: ele escreveria HTML na sua página.
- Regra de bolso: **texto** → `textContent`. `innerHTML` só quando **você** escreveu o HTML.
- `innerHTML = ''` é útil: apaga tudo de dentro.

**PERGUNTA**
- “Pra mostrar o nome que a pessoa digitou, qual dos dois?” (textContent)

**TEMPO**
- 10:00 → 11:00

---

## Slide 9 — Código: classList

**COM ↓ (SÓ VOCÊ)**
- Passos: pega o campo → ↓ `add('erro')` (borda vermelha) → ↓ `body.classList.add('noite')` (página escura).
- As classes `.erro` e `.noite` já estão no `style.css`.

**FALAR**
- O CSS já sabe pintar de vermelho. O JS só decide **quando**: põe ou tira a classe.
- `add` põe, `remove` tira, `toggle` alterna (tem? tira. não tem? põe).
- Dá pra fazer `campo.style.borderColor = 'red'`, mas aí o visual mora no JS. Com classe, o CSS continua no CSS.
- A noite: **uma linha** de JS e a página toda muda. Guardem isso, é a aula de tema claro/escuro.

**ILUSTRAR NO NAVEGADOR**
- Elements aberto do lado do Console. Rodar `document.querySelector('#idade').classList.toggle('erro')` várias vezes e ver o `class="erro"` piscar na árvore.

**ERRO COMUM**
- `classList.add('.erro')` com ponto. O ponto é só no CSS.

**TEMPO**
- 11:00 → 12:30

---

## Slide 10 — Código: createElement + append

**COM ↓ (SÓ VOCÊ)**
- Passos: pega o `#historico` → ↓ **criar** (console mostra `<li></li>`, a página não muda) → ↓ **preencher** → ↓ **pendurar** com `append` (aparece!).

**FALAR**
- Até agora só mudamos o que já existia. Agora vamos **criar**: um histórico com os bichos testados.
- **1. criar**: o `li` nasce, mas fica na memória. Ninguém vê.
- **2. preencher**: coloca o texto nele.
- **3. pendurar**: `append` põe ele dentro do histórico. Só agora aparece.

**ILUSTRAR NO NAVEGADOR**
- Olhar o Elements no site: depois do `append` o `<li>` novo está lá dentro do `ul`.

**ERRO COMUM**
- Esquecer o passo 3. Criou, preencheu e “não aparece nada”: faltou o `append`.

**TEMPO**
- 12:30 → 14:00

---

## Slide 11 — Código: como o site foi feito

**COM ↓ (SÓ VOCÊ)**
- Começa no `index.html`: clicar num bicho → erro no console (`calcular is not defined`).
- Passos: ↓ `script.js` com a função vazia (clicar: nada) → ↓ pega campo e resultado → ↓ a conta (funciona!) → ↓ erro com campo vazio → ↓ histórico.
- Depois de cada passo, digitar uma idade e clicar num bicho.

**FALAR**
- “Agora sim: como esse site foi feito.” Cada botão chama `calcular('cachorro', 7, '🐕')`: o nome, o multiplicador e o emoji.
- Como o botão sabe que foi clicado (`onclick`)? Isso é a **próxima aula**. Hoje é o que acontece **depois** do clique.
- É tudo o que vimos hoje: `querySelector`, `.value`, `textContent`, `classList`, `createElement`.
- No erro: `return` = para aqui, não faz a conta.

**ILUSTRAR NO NAVEGADOR**
- Opcional: abrir o `calculadora-cachorro/script.js` no VS Code (vai até a conta) e digitar o erro e o histórico ao vivo. O gabarito está em `script-final.js`.

**TEMPO**
- 14:00 → 17:00

---

## Slide 12 — O JS pega, muda e cria

**FALAR**
- Passar rápido pelos 6 pontos, cada um é um slide de hoje.
- Desafio: não dar a resposta. (`if (anos > 100) resultado.classList.add('velhinho')`, e `remove` no `else`.)
- Bônus pra quem quiser: histórico com só os últimos 5 (`historico.children.length` e `historico.firstElementChild.remove()`).
- Gancho: “E o `onclick` lá no HTML? Tem um jeito melhor, e é com ele que a calculadora vai funcionar. Próxima aula: eventos.”

**TEMPO**
- 17:00 → 18:30

---
