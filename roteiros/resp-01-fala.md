# Responsividade e mobile-first: roteiro de fala

Gerado das anotações do deck [resp-01-mobile-first.html](../resp-01-mobile-first.html) (tecla **N**). Nada disto aparece pro aluno. Setas **↓ / ↑** passam os estados dentro do slide; **→ / ←** mudam de slide. Tempo total: ~19 min.

---

## Slide 1 — O que é responsividade e mobile-first (0:00 → 1:30)

**FALA**
- Fala, pessoal! Olha esse site aqui do lado. Reparem: eu vou diminuindo a tela e ele **muda sozinho de jeito**.
- Isso se chama **responsividade**. E hoje vocês aprendem a fazer isso.
- Pergunta: quem aqui usa mais o celular do que o computador? Pois é. É por isso que isso importa.

**ILUSTRAR NO NAVEGADOR**
- Abrir `calculadora-cachorro/index.html`. **F12** → botão do celular (**Ctrl+Shift+M**) → arrastar a borda.

---

## Slide 2 — O mesmo site em qualquer tela (1:30 → 3:00)

**FALA**
- Três tamanhos de tela: celular (uns 360px), tablet (uns 768px) e computador (1280px ou mais).
- Responsivo **não** é "site pequeno". É um site que **muda de jeito** conforme o espaço que tem.
- E é o **mesmo HTML**. Nada de fazer um site pro celular e outro pro computador.
- Os números são só referência: o que importa é a **largura**, em pixels.
- Hoje vocês vão aprender 4 coisas: a linha mágica, as unidades, mobile-first e media query.

---

## Slide 3 — Largura fixa (3:00 → 4:30)

**COM ↓ (SÓ VOCÊ)**
- Começa com `width: 600px`. ↓ `width: 100%`. ↓ `max-width: 600px`. Depois de cada ↓ a tela anima sozinha.

**FALA**
- `width: 600px`: *(a tela diminui)* olha, não cabe. `px` é fixo: 600 é 600, mesmo que a tela tenha 320. Aparece barra de rolagem.
- *(↓)* `100%`: "ocupa tudo que o pai deixar". Cabe no celular... mas no computador fica **enorme**.
- *(↓)* `max-width`: "pode crescer até aqui, mas não passa". Cabe **e** para de crescer.
- Esse par, `width: 100%` + `max-width`, a gente usa o tempo todo.

**ERRO COMUM**
- Achar que `max-width` e `width` são a mesma coisa. Um é o desejo, o outro é o limite.

---

## Slide 4 — A linha mágica (4:30 → 6:00)

**COM ↓ (SÓ VOCÊ)**
- Começa sem a linha: celular da esquerda mostra a página de computador espremida. ↓ digita o `viewport` e o da direita fica certo.

**FALA**
- Olha o celular da esquerda: letrinha minúscula. Sem essa linha o celular **finge** que é um computador de 980px e encolhe tudo pra caber.
- *(↓)* Com a linha `viewport`: "use a largura **real** da tela". Agora sim o site fica do jeito certo, e o CSS responsivo passa a valer.
- É uma linha só, no `<head>`, em **todo** site. Pode copiar e colar sem medo.

**ERRO COMUM**
- Esquecer a linha e achar que o CSS não funciona no celular. No computador (F12) parece certo; no celular de verdade, não.

---

## Slide 5 — Unidades (6:00 → 7:30)

**FALA**
- Quatro unidades, uma ideia: ou é **fixo** (`px`) ou é **relativo** (todas as outras).
- Relativo a quê? `%` é relativo ao **pai**. `rem` é relativo à **letra da página** (16px, então 2rem = 32px). `vw` e `vh` são relativos à **tela** (v de *viewport*).
- `vh` é igual ao `vw`, só que pela altura.
- Não existe a melhor: cada uma serve pra uma coisa. Vamos ver as quatro na prática.

---

## Slide 6 — Unidades: largura (7:30 → 9:30)

**COM ↓ (SÓ VOCÊ)**
- `300px` → ↓ `50%` → ↓ `50vw` → ↓ `20rem` → ↓ `html { font-size: 24px }` (só a barra do `rem` cresce).
- A caixa tracejada é o **pai** (80% da tela). Por isso `50%` e `50vw` são diferentes.

**FALA**
- Reparem: a barra de `px` **não se mexe** e vaza pra fora.
- *(↓)* `%` acompanha o pai.
- *(↓)* `vw` acompanha a tela inteira, ignora o pai. Por isso é maior que a de `%`.
- *(↓)* `rem` parece fixo, mas é múltiplo da letra da página.
- *(↓)* Mudei o `html` pra 24px: só a barra de `rem` cresceu. Mudou o `html`, mudou tudo que usa `rem`.

**PAUSA E PRATICA**
- "Pausem: qual barra fica maior se o pai for 100% da tela? E qual não muda?" (`%` e `vw` igualam; `px` e `rem` não mudam)

---

## Slide 7 — Unidades: letra (9:30 → 10:30)

**COM ↓ (SÓ VOCÊ)**
- `24px` → ↓ `1.5rem` → ↓ `4vw` → ↓ `clamp(...)`.

**FALA**
- `24px` e *(↓)* `1.5rem` ficam **iguais**: 1,5 × 16 = 24. A diferença é que `rem` respeita quem aumentou a letra do navegador. Isso é acessibilidade.
- *(↓)* `4vw`: encolhe com a tela. Mas no celular fica minúscula e num monitor gigante, enorme. Sozinho é perigoso.
- *(↓)* `clamp(mínimo, ideal, máximo)`: "use o ideal, mas nunca menos que o mínimo nem mais que o máximo".

**DICA DO VIDEO**
- Pra iniciante: `rem` pra letra, `%` e `max-width` pras caixas. `clamp` fica de bônus.

---

## Slide 8 — Mobile-first (10:30 → 12:00)

**FALA**
- Os dois jeitos funcionam. Mas no mobile-first o **CSS de cima é o do celular**, e a tela grande só **acrescenta**.
- À esquerda, desktop-first: começa grande e o celular precisa **desfazer**. À direita, mobile-first: começa simples e só acrescenta.
- `min-width: 600px` = "de 600px **pra cima**". `max-width: 600px` = "de 600px **pra baixo**".
- Por que começar pelo celular? É a tela mais apertada: se funciona ali, no resto sobra espaço. E o código fica mais curto.
- Macete: mobile-first usa sempre `min-width`.

**PERGUNTA**
- "No mobile-first, o que vale entre 0 e 600px?" (só o CSS de cima, sem media query)

---

## Slide 9 — Media query: a ideia (12:00 → 12:45)

**FALA**
- Esquece o nome difícil. Media query é **uma pergunta com SE**: "se a tela for assim, usa esse CSS".
- Analogia: se estiver chovendo, leva guarda-chuva; se não, ignora. O navegador faz isso com a largura da tela.
- A pergunta: "a tela tem 500px ou mais?" Sim: usa o CSS de dentro. Não: ignora, como se não existisse.
- Ainda sem código. Só a ideia.

**PERGUNTA**
- "Num celular de 360px, a resposta é sim ou não?" (não)

---

## Slide 10 — Media query: como se escreve (12:45 → 14:00)

**COM ↓ (SÓ VOCÊ)**
- Cada ↓ acende uma peça: `@media` → `(min-width: 500px)` → as chaves.

**FALA**
- A pergunta tem 3 pedaços.
- *(↓)* `@media`: a palavra que avisa "vou fazer uma pergunta sobre a tela".
- *(↓)* `(min-width: 500px)`: **min** é mínimo. "A tela tem **no mínimo** 500px?" 500 ou mais, sim.
- *(↓)* As chaves: o que fica dentro só vale se a resposta for sim. Dentro cabe CSS normal.
- Reparem: **duas** chaves de fora (a pergunta) e **duas** de dentro (o `body`).

**ERRO COMUM**
- Esquecer a chave que fecha a media query (a última `}`).

---

## Slide 11 — Media query: cores (14:00 → 16:00)

**COM ↓ (SÓ VOCÊ)**
- `body` vermelho → ↓ pergunta **vazia** → ↓ fundo azul dentro → ↓ segunda pergunta (700px), verde.
- A tela cresce sozinha; o número no meio mostra a largura. Dá pra arrastar a barra "Tela".

**FALA**
- Sem media query: vermelho sempre. É o CSS "de base".
- *(↓)* A pergunta existe, mas está vazia. Nada acontece: não tem o que aplicar.
- *(↓)* Agora tem. Menos de 500px: ignora, vermelho. 500 ou mais: azul.
- *(↓)* Cada media query reconhece uma largura diferente. A de 700px vence a de 500px quando as duas são sim, porque vem **depois**.

**PAUSA E PRATICA**
- "Pausem: se eu mudar o 500px pra 300px, em que largura o fundo vira azul?"

---

## Slide 12 — Media query no site (16:00 → 17:30)

**COM ↓ (SÓ VOCÊ)**
- O básico (2 colunas) → ↓ a pergunta `(min-width: 600px)` com 3 colunas dentro.

**FALA**
- O CSS de fora vale pra **todas** as telas. A media query só entra quando a condição é verdadeira.
- *(↓)* Lê-se: "se a tela tiver 600px **ou mais**, aplique isso aqui".
- Olha a barra "Tela" passando dos 600px: a grade vira 3 colunas na hora.

**ILUSTRAR NO NAVEGADOR**
- No `calculadora-cachorro`: modo celular do F12, arrastar a largura. Em **Elements → Styles** a regra acende e apaga.

**ERRO COMUM**
- Esquecer o `{ }` de fora ou o de dentro. Dois níveis de chave.

---

## Slide 13 — Recap (17:30 → 19:00)

**FALA**
- Rapidinho, cada linha é um slide de hoje:
  - `<meta name="viewport">`: a linha mágica do `head`.
  - `%`, `rem`, `vw` se adaptam; `px` é fixo.
  - `width: 100%` + `max-width`: cabe e para de crescer.
  - Mobile-first: o CSS base é o do celular.
  - `@media (min-width: ...)`: acrescenta nas telas maiores.
- **Mini-desafio**: quando a tela passar de 900px, o fundo vira azul-marinho. Dica: um `@media (min-width: 900px)` com `body` dentro. Não vou dar a resposta.
- Testem no celular de verdade (ou no modo celular do F12) o site que vocês já fizeram.

**NÃO FALAR (resposta)**
- `@media (min-width: 900px) { body { background: #123f63; } }`
- Bônus: trocar 3 colunas por `repeat(auto-fit, minmax(100px, 1fr))` e ver o que acontece sem media query.
