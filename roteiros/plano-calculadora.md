# Plano — Bloco "Calculadora" (HTML/CSS → JS → responsivo → tema)

## Ideia central
**Um projeto só atravessando todos os vídeos**: cada aula adiciona uma camada na mesma calculadora.
O aluno sempre vê *pra que* serve o conceito novo, e o projeto final é juntar tudo + publicar.

```
V1 HTML/CSS ──► V2 eventos ──► V3 DOM ──► V5 responsivo ──► V7 tema ──► PROJETO
 (cara)         (funciona)     (histórico)  (celular)        (modo noturno) (GitHub)
```

Formato de sempre: 15-20 min, gancho → conceito → demo ao vivo → mini-desafio → recap + gancho.
Cada vídeo = deck HTML com notas escondidas (tecla N) + `roteiros/xx-fala.md` gerado das notas.

---

## Ordem nova (decidida em 2026-10-16)
**Manipulação do DOM vem antes de Eventos.** A aula de DOM usa o site `calculadora-cachorro/`
(Idade de Bicho) como exemplo: gancho no console (`document.title`, contar botões, trocar o `h1`, F5),
depois os métodos, e no fim "como o site foi feito" (o `onclick` fica de gancho pra aula de eventos).
Deck: `calc-03-dom.html`. A seção V3 abaixo ficou como registro do plano antigo.

## Ponto de atenção na ordem (plano antigo)
"Eventos de formulário" vem **antes** de "Manipulação do DOM", mas pra capturar um evento já
precisa de `querySelector`. Solução: no V2 usar só o **mínimo** de DOM (`querySelector`,
`.value`, `.textContent`) como "receita" e prometer: "na próxima aula a gente entende isso a fundo".

---

## V1 — Montando uma calculadora com HTML e CSS (Vídeo)
**Objetivo:** construir a "cara" da calculadora, sem JS ainda.

- **Gancho:** "Toda calculadora do celular é só uma caixinha com botões. Vamos fazer a nossa."
- **HTML base** (entregue pronto como starter, pra não gastar o vídeo digitando):
  - `<form id="calc">` com `<input type="number">` ×2, `<select>` (+ − × ÷), `<button type="submit">=</button>`
  - `<output id="resultado">` para o resultado
  - `<ul id="historico">` vazia (vai ser usada no V3 — deixar plantada)
- **CSS (revisão aplicada de css-01..04):**
  - card centralizado com Flexbox (`justify-content` / `align-items` — "lembram dos cubos?")
  - inputs e botões grandes, `border-radius`, `padding`, `box-sizing`
  - `:hover` e `:focus` nos botões/inputs
- **Mini-desafio:** mudar as cores e a fonte pra deixar com a cara deles.
- **Gancho final:** "tá linda… mas não faz conta nenhuma. Próxima aula ela ganha cérebro."

## V2 — Capturando eventos de um formulário com JS (Vídeo)
**Objetivo:** a calculadora funcionar.

- **Gancho:** "O botão é a campainha; o JS é quem atende a porta." (evento = algo que acontece)
- **Conceitos:**
  - ligar o JS: `<script src="script.js" defer>`
  - `document.querySelector('#calc')` (receita mínima, explica no V3)
  - `addEventListener('submit', ...)`
  - **`event.preventDefault()`** — mostrar o erro primeiro: a página pisca e o resultado some
  - `input.value` é **texto** → `"2" + "3" = "23"` (mostrar o bug ao vivo!) → `Number()`
  - `if/else` ou `switch` para a operação (revisão de lógica)
  - mostrar no `<output>` com `.textContent`
- **Erro comum:** esquecer o `preventDefault`; somar strings; divisão por zero.
- **Mini-desafio:** tratar divisão por zero com uma mensagem.
- **Bônus (se sobrar tempo):** evento `input` → calcula ao vivo enquanto digita.

## V3 — Manipulação do DOM com JS (Vídeo)
**Objetivo:** entender o que é o DOM e mexer na página além de "escrever um texto".

- **Gancho:** abrir o DevTools → aba Elements: "isso é a árvore da página; o JS pode podar e plantar galhos."
- **Conceitos:**
  - DOM como árvore (desenho pai/filho)
  - `querySelector` vs `querySelectorAll`
  - `textContent` vs `innerHTML` (quando usar cada)
  - **`classList.add / remove / toggle`** → classe `.erro` no input vazio (deixa a borda vermelha)
    *(isso prepara o modo noturno do V7 — falar explicitamente)*
  - `createElement` + `append` → **histórico de contas** na `<ul>` plantada no V1
  - bônus: botão "limpar histórico" (`ul.innerHTML = ''`)
- **Mini-desafio:** limitar o histórico às últimas 5 contas (ou destacar resultados negativos com uma classe).

## V4 — Quiz: Manipulação do DOM (Questionário)
~8-10 questões, gabarito no fim do .md (mesmo padrão de `questionarios/`).
Temas: o que é DOM, `querySelector` vs `All`, `textContent` vs `innerHTML`, `classList.toggle`,
`createElement`/`append`, `preventDefault`, `value` ser string (questão "qual o resultado de…").

## V5 — O que é responsividade e mobile-first (Vídeo) — *media queries na prática*
**Objetivo:** calculadora boa no celular e no PC.

- **Gancho:** abrir um site antigo/não responsivo no celular (zoom de pinça) vs um responsivo.
- **Conceitos:**
  - `<meta name="viewport">` (mostrar o antes/depois — sem ela nada funciona)
  - DevTools → modo dispositivo (Ctrl+Shift+M)
  - unidades relativas: `%`, `rem`, `max-width` no lugar de `width` fixo
  - **mobile-first:** CSS base = celular; `@media (min-width: 600px) { ... }` = telas maiores
  - na prática: celular → calculadora ocupa a tela, botões gordos, histórico embaixo
    (`flex-direction: column`); desktop → card centralizado com histórico **ao lado** (`row`)
- **Erro comum:** esquecer a viewport; usar `max-width` e `min-width` misturados sem saber por quê.
- **Mini-desafio:** criar um 2º breakpoint (ex. 1024px) mudando algo visível.

## V6 — Quiz: Responsividade (Questionário)
Viewport, mobile-first vs desktop-first, ler uma media query e dizer quando ela ativa,
unidades relativas, `flex-direction` em breakpoint.

## V7 — CSS: variáveis para tema claro/escuro (Vídeo) — *JS alternando os estados*
**Objetivo:** variáveis CSS + botão que troca o tema.

- **Gancho:** "modo escuro do WhatsApp/Discord: o site inteiro troca de cor com UM clique. Como?"
- **Conceitos:**
  - problema: a mesma cor repetida em 10 lugares → trocar dá trabalho
  - `:root { --cor-fundo: ...; --cor-texto: ...; }` e `var(--cor-fundo)`
  - redefinir as variáveis numa classe: `body.escuro { --cor-fundo: ...; }`
  - JS: botão → `document.body.classList.toggle('escuro')` *(callback pro V3!)*
  - bônus: `transition` pra troca suave; trocar o texto/ícone do botão (☀️/🌙)
  - teaser: `prefers-color-scheme` e "lembrar a escolha" (localStorage vem num módulo futuro)
- **Recomendação:** fazer a demo numa **página pequena separada** (ex. um cartão de perfil),
  **não na calculadora** — senão o projeto final vira copiar o vídeo.
- **Mini-desafio:** criar um terceiro tema (ex. "tema +ROBOTIC" com teal/laranja).

## V8 — Guia de referências: variáveis CSS (PDF)
Mesmo estilo de `pdfs/04-propriedades-css` (HTML → PDF via Edge headless).
Conteúdo: sintaxe `--nome` / `var()`, valor reserva `var(--x, red)`, escopo (`:root` vs classe),
receita completa do tema claro/escuro (CSS + 3 linhas de JS), `classList` cheat-sheet,
`prefers-color-scheme`, erros comuns (esquecer `--`, esquecer `var()`).

## V9 — Calculadora com Modo Noturno e JS (Projeto proposto)
Pasta `projetos/calculadora-modo-noturno/` (enunciado, starter, gabarito), igual ao Organizando Cubos.

- **Obrigatório:**
  1. calculadora funcionando (4 operações + divisão por zero tratada)
  2. histórico de contas
  3. responsiva, mobile-first, com pelo menos 1 media query
  4. tema claro/escuro com variáveis CSS + botão em JS
  5. **subir pro GitHub** + publicar no GitHub Pages; entregar os 2 links
- **Bônus:** botão limpar histórico, cálculo ao vivo, 3º tema, ícone que muda.
- **Atenção:** o módulo de Git já foi dado, mas ainda não houve vídeo de GitHub Pages
  ("Publicando seu site" é do módulo de responsividade e não está nesta lista) →
  colocar no enunciado um passo-a-passo com prints de como ativar o Pages.

---

## Ordem de produção sugerida
1. Construir a **calculadora gabarito completa** primeiro (todas as camadas) — e depois "voltar no tempo"
   criando um snapshot por vídeo (`v1/`, `v2/`, `v3/`, `v5/`). Garante que tudo encaixa.
2. Decks V1 → V2 → V3 → V5 → V7 (+ falas).
3. Quizzes V4 e V6.
4. PDF V8.
5. Enunciado/starter do projeto V9.

## Pendências para decidir
- "HTML BASE" no V1 = entregar o HTML pronto como starter (sugestão acima) ou ensinar o HTML do zero no vídeo?
- Demo do tema (V7) em página separada (recomendado) ou na própria calculadora?
