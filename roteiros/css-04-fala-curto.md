# CSS 4 - Flexbox (versão curta): roteiro de fala

Gerado das anotações do deck [css-04-flexbox-curto.html](../css-04-flexbox-curto.html) (tecla **N**). Nada disto aparece pro aluno. Setas **↓ / ↑** passam os estados dentro do slide; **→ / ←** mudam de slide.

---

## Slide 1 — Flexbox: organizando elementos

**FALA**
- Fala, pessoal! Nesta aula a gente vai falar sobre uma das ferramentas de layout: como organizar os nossos elementos na tela.
- A mais usada hoje em dia. Ela se chama **Flexbox**.
- É muito difícil fazer um site hoje sem usar, porque é o padrão do mercado.
- Bora ver.

**DICA DO VIDEO**
- No vídeo: “display flex is amazing and it’s my go-to”. Grid fica pra outro dia.

**PAUSA E PRATICA**
- Ter à mão uma página simples com menu e cards, pra aplicar no final.

---

## Slide 2 — Como cada elemento se comporta

**COM ↓ (SÓ VOCÊ)**
- ↓ percorre block → inline → inline-block → flex. ↑ volta.
- N também mostra os botões, a mensagem de acerto e o texto dos eixos. Feche o N antes de gravar.

**FALA**
- Antes do flex, uma coisa rápida: todo elemento tem um jeito de ocupar espaço. Isso é o `display`.
- *(↓)* `block`: ocupa a linha inteira, cada um na sua linha. É o padrão de `div`, `p` e `h1`.
- *(↓)* `inline`: fica na linha do texto, como uma palavra. Repara: ele **ignora** largura e altura.
- *(↓)* `inline-block`: fica na linha, mas aceita largura e altura. Os dois benefícios.
- *(↓)* E o `flex`: aqui o display vai no **pai**, e os filhos se arrumam sozinhos. É o que a gente vai ver agora.

**DICA DO VIDEO**
- “use inline for a continuous line and block to space things out, or inline-block if you still want the benefits of both”.

**ILUSTRAR NO NAVEGADOR**
- Clicar em cada botão. Notar que `inline` ignora o tamanho dos cubos e `block` joga cada um para uma linha.
- Clicar em `flex`: o display deixa de ser dos cubos e passa ao pai. Gancho pro resto da aula.

---

## Slide 3 — Um comando, tudo em linha

**COM ↓ (SÓ VOCÊ)**
- ↓ 1º: display: flex no pai (cubos vão pra linha). ↓ 2º: gap, o espaço entre eles. ↑ volta.
- N também mostra os botões, a mensagem de acerto e o texto dos eixos. Feche o N antes de gravar.

**FALA**
- Olha os cubos: empilhados, porque são blocos.
- *(↓)* Um `display: flex` na caixa de fora... e todos vão pra linha.
- Repara: a regra vai no **pai**, não nos cubos. Esse é o erro mais comum: colocar nos filhos e nada acontece.
- *(↓)* E pra dar respiro entre eles, o `gap`: o espaço **entre** os itens.

**ILUSTRAR NO NAVEGADOR**
- Alternar entre `block` e `flex` e ver os cubos se movendo suavemente.

**ERRO COMUM**
- Colocar `display: flex` nos filhos em vez do pai. Não acontece nada.

**PAUSA E PRATICA**
- Pausem: criem uma `div` com três filhos e dêem `display: flex` a ela.

---

## Slide 4 — Quem manda em quem

**COM ↓ (SÓ VOCÊ)**
- ↓ adiciona um cubo por vez (3 → 6); o código não muda. O container e os itens aparecem nomeados na tela; a explicação completa é a sua fala.
- N também mostra os botões, a mensagem de acerto e o texto dos eixos. Feche o N antes de gravar.

**FALA**
- O flexbox tem dois papéis: o **container**, a caixa de fora, e os **itens**, os que estão dentro.
- Quase tudo se escreve no container. Os itens só recebem o que o pai decidir.
- *(↓ ↓)* Se eu adiciono cubos, o flex arruma sozinho. O código não muda.
- Pergunta: se eu quero as três `div` em linha, onde escrevo o `display: flex`? *(no pai)*

**ILUSTRAR NO NAVEGADOR**
- Clicar em “+ cubo” algumas vezes e em “− cubo”. Notar que o código não muda: o pai cuida de tudo.

**PERGUNTA**
- Se eu quero que as três `div` de dentro fiquem em linha, em qual elemento escrevo `display: flex`? (no pai)

---

## Slide 5 — `flex-direction` — para onde flui

**COM ↓ (SÓ VOCÊ)**
- ↓ row → row-reverse → column → column-reverse. Com N aparece o texto dos eixos.
- N também mostra os botões, a mensagem de acerto e o texto dos eixos. Feche o N antes de gravar.

**FALA**
- Todo flex tem um **eixo principal**: a direção em que os itens se enfileiram.
- `row` é o padrão: em linha. *(↓)* `row-reverse` inverte a ordem.
- *(↓)* `column`: vira coluna. *(↓)* `column-reverse`: coluna invertida.
- Guarda isso: o outro eixo se chama **transversal**. Vai importar já.

**ILUSTRAR NO NAVEGADOR**
- Clicar nos quatro valores e olhar o texto embaixo dizendo qual é o eixo principal.

**PERGUNTA**
- Qual valor eu uso pra fazer um menu vertical? (`column`)

---

## Slide 6 — `justify-content` — distribui

**COM ↓ (SÓ VOCÊ)**
- ↓ flex-start → center → flex-end → space-between → space-around → space-evenly.
- N também mostra os botões, a mensagem de acerto e o texto dos eixos. Feche o N antes de gravar.

**FALA**
- `justify-content` distribui os itens ao longo do eixo principal. Em linha, é a horizontal.
- *(↓ ↓)* Início, meio, fim: `flex-start`, `center`, `flex-end`.
- *(↓)* `space-between`: o espaço que sobra vai pro meio. Um na ponta de cada lado. Menu de site usa muito isso.
- *(↓ ↓)* `space-around` e `space-evenly`: olha a diferença nas pontas. Não precisa decorar, tem na cola.

**DICA DO VIDEO**
- Com `align-items` e `justify-content` é fácil centralizar na horizontal e na vertical.

**ILUSTRAR NO NAVEGADOR**
- Passar por todos os valores devagar. Comparar `space-around` e `space-evenly`: o espaço das pontas muda.

**PAUSA E PRATICA**
- Pausem: façam o menu de vocês com `justify-content: space-between`.

---

## Slide 7 — `align-items` — alinha

**COM ↓ (SÓ VOCÊ)**
- ↓ stretch → flex-start → center → flex-end (cubos de alturas diferentes de propósito).
- N também mostra os botões, a mensagem de acerto e o texto dos eixos. Feche o N antes de gravar.

**FALA**
- `align-items` trabalha no **outro** eixo. Em linha, é a vertical.
- Macete: **justify** é o eixo principal, **align** é o outro.
- *(↓)* `stretch`: todos esticam. *(↓)* `flex-start`: no topo. *(↓)* `center`: no meio. *(↓)* `flex-end`: na base.
- Cuidado: em `column` os eixos **trocam**.

**ILUSTRAR NO NAVEGADOR**
- Os cubos têm alturas diferentes de propósito. Passar por `stretch` (todos esticam), `flex-start` (topo), `center` e `flex-end` (base).

**ERRO COMUM**
- Usar `align-items` esperando mexer na horizontal. Em `column` os eixos **trocam**: justify vira vertical.

---

## Slide 8 — Centralizar de verdade

**COM ↓ (SÓ VOCÊ)**
- ↓ 1º aperto: só justify-content: center (cubo no meio, mas no topo). 2º: align-items: center também (centro exato).
- N também mostra os botões, a mensagem de acerto e o texto dos eixos. Feche o N antes de gravar.

**FALA**
- Centralizar na vertical era um pesadelo. Com flex são duas linhas.
- *(↓)* `justify-content: center`: no meio, mas lá no topo.
- *(↓)* `align-items: center`: agora sim, no meio de verdade.
- Uso pra sempre: título numa capa, personagem na tela de um jogo.

**DICA DO VIDEO**
- “it’s easy to center horizontally and vertically with the align items and justify content properties”.

**ILUSTRAR NO NAVEGADOR**
- Deixar a turma sugerir os valores antes de clicar. Errar um dos dois e ver o cubo parar na lateral.

**PERGUNTA**
- Se eu escolher só `justify-content: center`, o cubo fica onde? (no meio da horizontal, mas no topo)

---

## Slide 9 — `flex-wrap` — quando não cabe

**COM ↓ (SÓ VOCÊ)**
- ↓ liga o flex-wrap: wrap (a caixa é estreita: os cubos descem pra linha de baixo). ↑ volta pro nowrap.
- N também mostra os botões, a mensagem de acerto e o texto dos eixos. Feche o N antes de gravar.

**FALA**
- Por padrão, o flex tenta manter tudo numa linha só. Se não cabe, estoura pra fora.
- *(↓)* `flex-wrap: wrap`: o que não cabe desce pra linha de baixo.
- É isso que faz uma galeria de cards se adaptar à tela.

**ILUSTRAR NO NAVEGADOR**
- Arrastar o slider da largura com `nowrap`: cubos saindo da caixa. Depois com `wrap`: eles descem para a linha de baixo.

**ERRO COMUM**
- Esquecer o `wrap` e achar que o layout “quebrou” no celular.

---

## Slide 10 — `flex-grow` — ocupar o que sobra

**COM ↓ (SÓ VOCÊ)**
- ↓ flex-grow: 1 no cubo 1 → 1 nos três → 2 no primeiro e 1 nos outros.
- N também mostra os botões, a mensagem de acerto e o texto dos eixos. Feche o N antes de gravar.

**FALA**
- Esse é o primeiro comando que vai no **item**, não no pai.
- `flex-grow`: ocupa o espaço que sobra.
- *(↓)* Um cubo com 1: toma o espaço. *(↓)* Todos com 1: dividem igual. *(↓)* Um com 2: ocupa o dobro.
- O atalho é `flex: 1`. Três cards com `flex: 1` viram três colunas iguais.

**ILUSTRAR NO NAVEGADOR**
- Clicar num cubo: alterna 0, 1, 2. Dar 1 a um só e ver ele tomar o espaço. Depois 2 num e 1 nos outros.

**PERGUNTA**
- Três cubos, todos com `flex-grow: 1`. O que acontece? (os três dividem o espaço e ficam do mesmo tamanho)

---

## Slide 11 — Menu e cards em linha

**COM ↓ (SÓ VOCÊ)**
- ↓ aplica o flexbox no site (menu em linha e cards lado a lado). ↑ desfaz.
- N também mostra os botões, a mensagem de acerto e o texto dos eixos. Feche o N antes de gravar.

**FALA**
- Olha um site simples: menu e cards empilhados.
- *(↓)* Três regras e o site muda de cara.
- No `nav` (o pai dos links): `display: flex` e `gap`. No `main` (o pai dos cards): `display: flex` e `gap`. E cada card ganha `flex: 1` pra dividir o espaço igual.

**ILUSTRAR NO NAVEGADOR**
- Apertar o botão e comparar antes e depois. Se der tempo, abrir a página deles e fazer o mesmo ao vivo.

**PAUSA E PRATICA**
- Pausem: peguem uma página com menu e coloquem os links em linha com flexbox.

---

## Slide 12 — O que levar pra casa

**FALA**
- Resumo: seis comandos no pai e dois nos filhos. Dá pra montar a maior parte dos layouts.
- Lembra do macete: **justify** é o eixo principal, **align** é o outro.
- Pergunta: em `column`, qual propriedade controla a horizontal? *(align-items)*

**PERGUNTA**
- Em `flex-direction: column`, qual propriedade controla a horizontal? (`align-items`)

---

## Slide 13 — Seis missões com cubos

**FALA**
- Agora é com vocês: projeto **Organizando Cubos**, seis fases.
- Cada fase tem uma caixa de cubos e um alvo. É só descobrir quais propriedades reproduzem o alvo.
- A fase 6 é o desafio: montar a face de um dado. Pra ela, procurem o `align-self` na cola.
- Não existe um jeito único: o importante é ficar igual ao alvo.
- E é isso, pessoal! Valeu, e bora pro projeto.

**ILUSTRAR NO NAVEGADOR**
- Mostrar o arquivo do projeto aberto no VS Code e uma das fases resolvida ao vivo.

**PAUSA E PRATICA**
- Pausar e fazer a primeira fase junto com eles. As outras, no ritmo de cada um.

---
