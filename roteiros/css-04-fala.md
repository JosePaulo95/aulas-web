# CSS 4 — Flexbox: organizando elementos: roteiro de fala

Gerado das anotações escondidas do deck [css-04-flexbox.html](../css-04-flexbox.html) (tecla **N** no deck mostra as mesmas notas). Nada disto aparece pro aluno.

Referência: [transcrição do vídeo](css-referencia-transcricao.md).

---

## Slide 1 — Flexbox: organizando elementos

**FALAR**
- Última aula ficou uma dúvida: como colocar os cards lado a lado? Hoje a resposta.
- Flexbox é a ferramenta de layout mais usada hoje. Quem domina isso monta qualquer tela.

**DICA DO VIDEO**
- No vídeo: “display flex is amazing and it’s my go-to”. Grid fica pra outro dia.

**PAUSA E PRATICA**
- Ter à mão o site da aula passada. No final eles voltam nele.

---

## Slide 2 — Como cada elemento se comporta

**FALAR**
- Todo elemento tem um `display`. Ele decide se ocupa a linha inteira ou só o espaço do conteúdo.
- **block**: ocupa a linha toda, cada um numa linha. Aceita largura e altura. É o padrão de `div`, `p`, `h1`.
- **inline**: fica na linha do texto e ignora largura e altura. É o padrão de `span` e `a`.
- **inline-block**: fica na linha, mas aceita largura e altura. Os dois benefícios.

**DICA DO VIDEO**
- “use inline for a continuous line and block to space things out, or inline-block if you still want the benefits of both”.

**ILUSTRAR NO NAVEGADOR**
- Clicar em cada botão. Notar que `inline` ignora o tamanho dos cubos e `block` joga cada um para uma linha.
- Clicar em `flex`: o display deixa de ser dos cubos e passa ao pai. Gancho pro resto da aula.

---

## Slide 3 — Um comando, tudo em linha

**FALAR**
- Os cubos estão empilhados porque são blocos. Um `display: flex` no pai e eles se organizam em linha.
- Reparem que a regra não vai nos cubos, vai na **caixa de fora**.

**ILUSTRAR NO NAVEGADOR**
- Alternar entre `block` e `flex` e ver os cubos se movendo suavemente.

**ERRO COMUM**
- Colocar `display: flex` nos filhos em vez do pai. Não acontece nada.

**PAUSA E PRATICA**
- Pausem: criem uma `div` com três filhos e dêem `display: flex` a ela.

---

## Slide 4 — Quem manda em quem

**FALAR**
- Flexbox tem dois papéis: o **container** (a caixa de fora) e os **itens** (quem está dentro).
- Quase tudo se escreve no container. Os itens só recebem o que o pai decidir.
- Adicionar cubos: o flex arruma o novo sem eu fazer nada.

**ILUSTRAR NO NAVEGADOR**
- Clicar em “+ cubo” algumas vezes e em “− cubo”. Notar que o código não muda: o pai cuida de tudo.

**PERGUNTA**
- Se eu quero que as três `div` de dentro fiquem em linha, em qual elemento escrevo `display: flex`? (no pai)

---

## Slide 5 — `flex-direction` — para onde flui

**FALAR**
- Todo flex tem um **eixo principal**: a direção em que os itens se enfileiram.
- `row` (padrão): em linha, da esquerda pra direita. `column`: em coluna, de cima pra baixo.
- O `reverse` inverte a ordem visual, sem mexer no HTML.
- Anotar: o outro eixo é o **transversal**. Isso vai importar já.

**ILUSTRAR NO NAVEGADOR**
- Clicar nos quatro valores e olhar o texto embaixo dizendo qual é o eixo principal.

**PERGUNTA**
- Qual valor eu uso pra fazer um menu vertical? (`column`)

---

## Slide 6 — `justify-content` — distribui

**FALAR**
- `justify-content` distribui os itens ao longo do **eixo principal** (em linha, é a horizontal).
- Os valores principais: `flex-start` (início), `center`, `flex-end` (fim), `space-between` (espaço entre eles), `space-around` e `space-evenly`.
- Menus de site usam `space-between` o tempo todo: logo de um lado, links do outro.

**DICA DO VIDEO**
- Com `align-items` e `justify-content` é fácil centralizar na horizontal e na vertical.

**ILUSTRAR NO NAVEGADOR**
- Passar por todos os valores devagar. Comparar `space-around` e `space-evenly`: o espaço das pontas muda.

**PAUSA E PRATICA**
- Pausem: façam o menu de vocês com `justify-content: space-between`.

---

## Slide 7 — `align-items` — alinha

**FALAR**
- `align-items` trabalha no **outro eixo** (o transversal). Em linha, é o vertical.
- Truque pra não confundir: **justify** = eixo principal, **align** = o outro.
- `stretch` (padrão): os itens esticam para preencher a altura. Os outros valores respeitam o tamanho de cada item.

**ILUSTRAR NO NAVEGADOR**
- Os cubos têm alturas diferentes de propósito. Passar por `stretch` (todos esticam), `flex-start` (topo), `center` e `flex-end` (base).

**ERRO COMUM**
- Usar `align-items` esperando mexer na horizontal. Em `column` os eixos **trocam**: justify vira vertical.

---

## Slide 8 — Centralizar de verdade

**FALAR**
- Centralizar na vertical foi um pesadelo no CSS por anos. Com flex são duas linhas.
- `justify-content: center` + `align-items: center` = no meio exato.
- Uso pra sempre: centralizar título numa capa, ícone num botão, personagem na tela de um jogo.

**DICA DO VIDEO**
- “it’s easy to center horizontally and vertically with the align items and justify content properties”.

**ILUSTRAR NO NAVEGADOR**
- Deixar a turma sugerir os valores antes de clicar. Errar um dos dois e ver o cubo parar na lateral.

**PERGUNTA**
- Se eu escolher só `justify-content: center`, o cubo fica onde? (no meio da horizontal, mas no topo)

---

## Slide 9 — `gap` — respiro entre eles

**FALAR**
- `gap` é o espaço **entre** os itens. Não mexe nas bordas da caixa.
- Antes do `gap` se usava `margin` em cada item. Dava mais trabalho e sobrava espaço nas pontas.

**ILUSTRAR NO NAVEGADOR**
- Mexer no slider de 0 até 40 e comparar com o `space-between` do slide 6: lá o espaço é distribuído, aqui é fixo.

**PERGUNTA**
- Qual a diferença entre `gap` e `justify-content: space-between`? (o gap é um valor fixo, o space-between divide o que sobra)

---

## Slide 10 — `flex-wrap` — quando não cabe

**FALAR**
- Por padrão (`nowrap`) o flex tenta manter tudo numa linha só. Se não cabe, os itens estouram pra fora.
- `flex-wrap: wrap` deixa os itens quebrarem para a linha seguinte.
- Isso é o que faz uma galeria de cards se adaptar a telas pequenas.

**ILUSTRAR NO NAVEGADOR**
- Arrastar o slider da largura com `nowrap`: cubos saindo da caixa. Depois com `wrap`: eles descem para a linha de baixo.

**ERRO COMUM**
- Esquecer o `wrap` e achar que o layout “quebrou” no celular.

---

## Slide 11 — `flex-grow` — ocupar o que sobra

**FALAR**
- Esse é o primeiro comando que vai **no item**, não no pai.
- `flex-grow: 1` = “cresça e ocupe o espaço livre”. Com valores diferentes, divide-se proporcionalmente: 2 ocupa o dobro de 1.
- Atalho: `flex: 1`. Três cards com `flex: 1` viram três colunas iguais.

**ILUSTRAR NO NAVEGADOR**
- Clicar num cubo: alterna 0, 1, 2. Dar 1 a um só e ver ele tomar o espaço. Depois 2 num e 1 nos outros.

**PERGUNTA**
- Três cubos, todos com `flex-grow: 1`. O que acontece? (os três dividem o espaço e ficam do mesmo tamanho)

---

## Slide 12 — `align-self` — exceção à regra

**FALAR**
- Slide bônus: pode pular.
- O pai manda alinhar todos no topo, mas um cubo quer ficar no meio. `align-self` é a exceção só pra ele.
- Útil para o projeto da face do dado (cubos na diagonal).

**ILUSTRAR NO NAVEGADOR**
- Clicar nos cubos para alternar `flex-start`, `center` e `flex-end`. O pai segue em `flex-start`.

---

## Slide 13 — Menu e cards em linha

**FALAR**
- É o site da última aula. Menu e cards empilhados. Duas regras em dois lugares e o site muda de cara.
- No `nav`: `display: flex` + `gap`. No `main`: `display: flex` + `flex-wrap` + cards com `flex: 1`.

**ILUSTRAR NO NAVEGADOR**
- Apertar o botão e comparar antes e depois. Se der tempo, abrir a página deles e fazer o mesmo ao vivo.

**PAUSA E PRATICA**
- Pausem: coloquem o menu do site de vocês em linha com flexbox.

---

## Slide 14 — O que levar pra casa

**FALAR**
- Seis comandos no pai e dois nos filhos. É o suficiente para a maior parte dos layouts.
- Macete: **justify** = eixo principal, **align** = eixo transversal.

**PERGUNTA**
- Em `flex-direction: column`, qual propriedade controla a horizontal? (`align-items`)

---

## Slide 15 — Seis missões com cubos

**FALAR**
- O projeto: cada fase tem uma caixa com cubos e um alvo. É só descobrir quais propriedades do flexbox reproduzem o alvo.
- A fase 6 é o desafio: montar as faces de um dado.
- Não existe um único jeito certo: o importante é o resultado ficar igual.

**ILUSTRAR NO NAVEGADOR**
- Mostrar o arquivo do projeto aberto no VS Code e uma das fases resolvida ao vivo.

**PAUSA E PRATICA**
- Pausar e fazer a primeira fase junto com eles. As outras, no ritmo de cada um.

**DICA DO VIDEO**
- Lembrar o quiz de Flexbox, que vem logo depois deste vídeo.

---
