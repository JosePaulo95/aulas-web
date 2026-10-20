# CSS: variáveis para tema claro/escuro: roteiro de fala

Gerado das anotações escondidas do deck [tema-01-variaveis-css.html](../tema-01-variaveis-css.html) (tecla **N** no deck mostra as mesmas notas). Nada disto aparece pro aluno.

Site pra usar no navegador: [calculadora-cachorro/index.html](../calculadora-cachorro/index.html) (já com as variáveis e o botão 🌙/☀️).

---

## Slide 1 — Variáveis para tema claro/escuro

**ILUSTRAR NO NAVEGADOR**
- Abrir `calculadora-cachorro/index.html` e clicar no **🌙 Escuro** no canto. Clicar de novo.

**FALAR**
- “Modo escuro do WhatsApp, do Discord, do YouTube: o site inteiro troca de cor com um clique. Como?”
- Hoje: variáveis no CSS e um botão que troca o tema.

**TEMPO**
- 0:00 → 1:00

---

## Slide 2 — Um clique e o site inteiro muda de cor

**FALAR**
- Clicar no botão do canto algumas vezes. Fundo, caixa, texto e botões trocam todos juntos.
- “Vocês acham que eu escrevi o CSS duas vezes? Não. Vamos ver o truque.”

**TEMPO**
- 1:00 → 2:00

---

## Slide 3 — Código: o problema (a mesma cor em vários lugares)

**COM ↓ (SÓ VOCÊ)**
- Começa com as cores do site (só a parte de cor do `style.css`).
- Passos: ↓ troca o laranja do campo pra roxo → ↓ troca o laranja do botão (pronto, o laranja sumiu de 2 lugares) → ↓ troca o marrom do título… e ainda falta o do resultado.

**FALAR**
- O laranja aparece em 2 lugares, o marrom em 2. Quero o site roxo: tenho que caçar cada um.
- Aqui são 4. Num site de verdade, 50. Esqueci um? Fica uma parte laranja perdida.
- “E se a cor tivesse um **nome**, e eu trocasse só num lugar?”

**TEMPO**
- 2:00 → 3:30

---

## Slide 4 — var(--cor)

**FALAR**
- Igual variável no JS: um nome guardando um valor.
- **Criar**: começa com dois tracinhos, `--laranja`. **Usar**: `var(--laranja)`.
- `:root` = a página toda. Variável criada ali vale em qualquer lugar do site.

**ERRO COMUM**
- Esquecer os `--` ou escrever `--laranja` sem o `var()` na hora de usar.

**TEMPO**
- 3:30 → 4:30

---

## Slide 5 — Código: criando e usando variáveis

**COM ↓ (SÓ VOCÊ)**
- Passos: as cores soltas → ↓ cria `--laranja` e `--marrom` no `:root` (nada muda) → ↓ troca as cores por `var()` (nada muda!) → ↓ muda só o valor do `--laranja` pra roxo → ↓ o `--marrom` pra azul.

**FALAR**
- Criar as variáveis não muda nada: ninguém usou ainda.
- Trocar por `var()` também não muda nada na tela: é o mesmo laranja, só que agora com nome.
- Agora o truque: **uma linha** muda e todos os lugares mudam juntos.

**TEMPO**
- 4:30 → 6:30

---

## Slide 6 — Código: nomes pela função

**COM ↓ (SÓ VOCÊ)**
- Passos: o CSS com nomes de cor (`--laranja`) → ↓ troca pelos nomes do que a cor **faz** (`--botao`, `--destaque`) e acrescenta fundo, caixa e texto.

**FALAR**
- Se o `--laranja` virar roxo, o nome fica mentindo.
- Melhor dar nome pela **função**: `--fundo`, `--caixa`, `--texto`, `--destaque`, `--botao`. Aí o valor pode ser qualquer cor.
- Isso é o que deixa o tema escuro fácil: o que muda é o valor, o nome continua.

**TEMPO**
- 6:30 → 8:00

---

## Slide 7 — body.escuro

**FALAR**
- O `:root` diz as cores normais. A classe `.escuro` diz: “quando eu estiver aqui, essas variáveis valem outra coisa”.
- Nenhuma regra de `background` ou `color` muda. Só os valores.

**TEMPO**
- 8:00 → 8:30

---

## Slide 8 — Código: o tema escuro

**COM ↓ (SÓ VOCÊ)**
- Passos: o CSS com os nomes por função → ↓ acrescenta o bloco `body.escuro` (nada muda: o body ainda não tem a classe) → ↓ `index.html` com `<body class="escuro">` (tudo escurece).

**FALAR**
- Escrevi o tema escuro e… nada. Igual função: precisa alguém “chamar”.
- Pôs a classe no `body`: as variáveis mudam de valor e o site todo segue.
- Mas ninguém vai abrir o HTML pra trocar o tema. Quem põe e tira a classe tem que ser… o JS.

**ERRO COMUM**
- Pôr a classe `escuro` num elemento e o bloco de CSS em outro (`.caixa.escuro` × `body.escuro`): não acontece nada.

**TEMPO**
- 8:30 → 10:00

---

## Slide 9 — classList.toggle

**FALAR**
- Lembram da aula de DOM? `toggle` é o interruptor: tem a classe? tira. Não tem? põe.
- `document.body` = o `body` da página, sem precisar de `querySelector`.

**TEMPO**
- 10:00 → 10:30

---

## Slide 10 — Código: o botão de tema

**COM ↓ (SÓ VOCÊ)**
- Começa no `index.html` com o botão do tema. Clicar: erro no console (a função não existe).
- Passos: ↓ `script.js` com `trocarTema` e o `toggle` (clicar: troca!) → ↓ o texto do botão muda (🌙 / ☀️) → ↓ `style.css` com `transition` (a troca fica suave).
- Clicar várias vezes depois de cada passo.

**FALAR**
- Uma linha de JS e o site todo muda: o CSS faz o trabalho pesado.
- `contains` pergunta “tem a classe?”. Se está escuro, o botão oferece o claro, e vice-versa.
- `transition` = “quando essa propriedade mudar, muda devagar”.

**ILUSTRAR NO NAVEGADOR**
- No site de verdade, `F12` → Elements: clicar no botão e ver o `class="escuro"` aparecer e sumir no `body`.

**TEMPO**
- 10:30 → 13:00

---

## Slide 11 — Cores com nome, tema com um clique

**FALAR**
- Passar rápido pelos 6 pontos.
- Desafio: não dar a resposta. (`body.robotic { --fundo: #123f63; --botao: #16a89c; ... }` e um botão com `document.body.classList.toggle('robotic')`.)
- Curiosidade: dá pra seguir o tema do sistema com `@media (prefers-color-scheme: dark)`. E lembrar a escolha da pessoa (`localStorage`) fica pra um módulo futuro.

**TEMPO**
- 13:00 → 14:30

---
