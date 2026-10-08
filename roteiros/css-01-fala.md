# CSS 1 — Estilos e posicionamento: roteiro de fala

Gerado das anotações escondidas do deck [css-01-estilos-posicionamento.html](../css-01-estilos-posicionamento.html) (tecla **N** no deck mostra as mesmas notas). Nada disto aparece pro aluno.

Referência: [transcrição do vídeo](css-referencia-transcricao.md).

---

## Slide 1 — Estilos e posição

**FALAR**
- Última aula: HTML. A página já existe, mas está pelada.
- Hoje: CSS. É o que transforma isso em algo que dá orgulho de mostrar.
- Lembrar o combinado: pausar, testar, ser curioso, quebrar coisa.

**ILUSTRAR NO NAVEGADOR**
- Abrir um site famoso e desligar o CSS (extensão ou F12 → desmarcar os estilos). Mostrar o feio.

**PAUSA E PRATICA**
- Ter o VS Code aberto com o `index.html` da aula passada (a página do torneio).

---

## Slide 2 — Três blocos

**FALAR**
- HTML = esqueleto (o que existe). CSS = roupa e posição (como aparece).
- Três blocos, cada um com uma demo que eles podem mexer.
- Avisar do hover: palavra sublinhada pontilhada explica ao passar o mouse.

**DICA DO VIDEO**
- O vídeo resume CSS em duas peças: seletores e atributos. Hoje só atributos; seletores é a próxima aula.
- Hoje todo estilo vai em `h1 { }`, `p { }` (tag simples).

---

## Slide 3 — Mesmo HTML, outra cara

**FALAR**
- Nada no HTML mudou. Só ligamos um CSS por cima.
- O HTML diz o que é cada coisa. O CSS diz como aparece.

**ILUSTRAR NO NAVEGADOR**
- Apertar o botão ligando e desligando algumas vezes. Deixar eles verem a transição.
- Mostrar os 3 códigos que aparecem: “é só isso que muda tudo”.

**PERGUNTA**
- O que mudou: o texto ou a aparência? (aparência: o texto é igual)

---

## Slide 4 — Onde escrever o CSS?

**FALAR**
- Três jeitos. Passar pelos três rápido, clicando nas abas.
- Nos dois primeiros, o CSS se mistura com o HTML. Fica difícil de achar.
- Terceiro: arquivo próprio ligado com `<link>`. É o que a gente usa daqui pra frente.

**ILUSTRAR NO NAVEGADOR**
- No VS Code: criar `estilo.css` na mesma pasta do `index.html`, escrever o `<link>` no `<head>`.
- Mudar a cor do `h1`, salvar, F5. Mostrar que funciona.

**ERRO COMUM**
- Arquivo `.css` em outra pasta e `href` errado: nada muda e não aparece erro. Conferir o nome.

**PAUSA E PRATICA**
- Pausem: criem o `estilo.css`, liguem no HTML e mudem a cor de um `h1`.

---

## Slide 5 — Uma regra tem três peças

**FALAR**
- Toda regra: **seletor** (quem), **propriedade** (o quê), **valor** (como).
- Chaves abrem e fecham a regra. Cada linha termina com ponto e vírgula.
- Seletor hoje: só o nome da tag. Na próxima aula a gente escolhe “qual parágrafo”.

**ILUSTRAR NO NAVEGADOR**
- Passar o mouse em cada peça: o pedaço brilha na legenda.
- Apertar “Esquecer o ;”: o título perde cor E tamanho. Uma falha estraga as duas linhas.

**ERRO COMUM**
- Esquecer `;` ou `}`. O CSS não avisa, só para de funcionar. Procurar isso primeiro.
- Escrever `font_size` ou `fontsize`. É com hífen.

---

## Slide 6 — Cor do texto e do fundo

**FALAR**
- Duas propriedades: `color` = letra, `background-color` = fundo.
- Valor pode ser nome em inglês ou hex. Hex = mais opções.
- Hex: # + 6 caracteres. Não precisa decorar, é só copiar.

**DICA DO VIDEO**
- Extensão **ColorZilla** (ou o conta-gotas do Chrome) pega o hex de qualquer site.

**ILUSTRAR NO NAVEGADOR**
- Alternar entre texto e fundo, clicar nas cores. Depois usar o seletor de cor livre.
- Colocar texto claro em fundo claro de propósito: “não dá pra ler”. Contraste importa.

**PAUSA E PRATICA**
- Pausem e coloquem `body { background-color: ...; }` na cor que quiserem.

---

## Slide 7 — Mexendo no texto

**FALAR**
- Quatro propriedades de texto: família, tamanho, grossura e alinhamento.
- `font-size` em `px`: 16px é o normal.
- `text-align` alinha o texto dentro da caixa (não a caixa na tela).

**DICA DO VIDEO**
- Sempre mais de uma fonte no `font-family`, caso a primeira não carregue.

**ILUSTRAR NO NAVEGADOR**
- Passar o mouse nas palavras do código: o texto de exemplo brilha.
- Mostrar fontes do Google Fonts como curiosidade, sem ensinar o `<link>` hoje.

---

## Slide 8 — Tudo na web é uma caixa

**FALAR**
- Toda tag vira uma caixa. Caixas dentro de caixas (lembram das tabelas?).
- 4 camadas, de dentro pra fora: conteúdo, padding, border, margin.
- Analogia: foto na parede. Foto = conteúdo, passe-partout = padding, moldura = border, espaço até a outra foto = margin.

**ILUSTRAR NO NAVEGADOR**
- Abrir um site, F12, passar o mouse num elemento na aba **Elements**.
- Mostrar o diagrama colorido no painel **Computed** (ou na aba Layout).
- As cores do Chrome são parecidas com as daqui: azul = conteúdo, verde = padding, amarelo = border, laranja = margin.

**DICA DO VIDEO**
- O box model do Chrome serve pra depurar quando algo fica estranho.

**PAUSA E PRATICA**
- Pausem: abram um site e achem o box model de um botão.

---

## Slide 9 — Mexa nas camadas

**FALAR**
- Cada slider é uma propriedade. Mexer um de cada vez e ver qual camada cresce.
- `width` só mexe no conteúdo. O padding, a border e a margin crescem por fora.

**ILUSTRAR NO NAVEGADOR**
- Deixar os alunos sugerirem valores: “vou botar 40 de padding”.
- Mostrar que a caixa inteira fica maior que o `width`: 140 + padding + border.

**DICA DO VIDEO**
- Preferir tamanhos em % do elemento pai pra `width`, senão o conteúdo pode sair da tela. Hoje só px.

**PAUSA E PRATICA**
- Pausem: deem `padding: 20px` a um botão ou parágrafo e vejam a diferença.

---

## Slide 10 — 1, 2 ou 4 valores? Digite!

**FALAR**
- Padding aceita 1, 2, 3 ou 4 valores. Parece confuso, mas tem lógica.
- 1 valor: os 4 lados iguais.
- 2 valores: primeiro = cima e baixo; segundo = esquerda e direita.
- 4 valores: sentido do relógio, começando por cima. Cima, direita, baixo, esquerda.
- `margin` funciona exatamente igual.

**DICA DO VIDEO**
- Também dá pra mexer num lado só: `padding-left: 10px`, `margin-top` e assim por diante.

**ILUSTRAR NO NAVEGADOR**
- Digitar valores diferentes no campo. Apostar com a turma antes: “quanto vai ficar em cima?”.
- Digitar 5 valores de propósito: mostrar que dá erro.

**PERGUNTA**
- Se eu quero 10px em cima e embaixo, e 30px nos lados, quantos valores uso? (2: `10px 30px`)

---

## Slide 11 — A borda em três partes

**FALAR**
- `border` junta três coisas na mesma linha: tamanho, tipo, cor. Nessa ordem.
- 99% das vezes o tipo é `solid`. Os outros são pra ocasiões específicas.
- `border-radius` arredonda os cantos. Com 50% numa caixa quadrada vira círculo. Bom pra avatar de personagem.

**ILUSTRAR NO NAVEGADOR**
- Passar por `dashed`, `dotted`, `double`. Terminar no botão de círculo.

**ERRO COMUM**
- Escrever só `border: 2px red` sem o tipo: não aparece nada. O tipo é obrigatório.

---

## Slide 12 — Adivinhe: até onde a cor pinta?

**FALAR**
- Pedir pra turma votar antes de clicar. Mãos levantadas ou chat.
- Resposta: o fundo pinta conteúdo + padding. A margin é transparente: é espaço vazio entre vizinhos.

**DICA DO VIDEO**
- Sacada do vídeo: o `background-color` aparece no padding, mas não na margin.

**ILUSTRAR NO NAVEGADOR**
- Depois da resposta, mostrar o tracejado cinza: “essa área é a margin, e está sem cor”.
- Detalhe técnico se alguém perguntar: o fundo passa por baixo da borda (dá pra ver com `dashed`). Não precisa aprofundar.

**PERGUNTA**
- Pra afastar um elemento do vizinho, uso padding ou margin? (margin)

---

## Slide 13 — `position: relative` — ajustar o lugar

**FALAR**
- Normalmente cada elemento fica um embaixo do outro, na ordem do HTML. Isso é `static` (o padrão).
- `relative` deixa a caixa se mover a partir do lugar onde ela estaria.
- `top` e `left` só funcionam depois que a posição é `relative` (ou absolute).

**ILUSTRAR NO NAVEGADOR**
- Com `static`, mexer nos sliders: nada acontece. O código fica riscado (“ignorado”).
- Trocar pra `relative` e mexer de novo. A, C e o espaço de B não se mexem.

**ERRO COMUM**
- Colocar `top: 50px` e nada acontecer. Esqueceram o `position`.

**PAUSA E PRATICA**
- Pausem e movam um parágrafo com `position: relative; left: 30px;`.

---

## Slide 14 — `position: absolute` — em cima de tudo

**FALAR**
- `absolute` tira a caixa do fluxo e deixa colocar em qualquer lugar, inclusive em cima de outras.
- Mas ela mede a posição a partir de **quem?** Do pai mais próximo que tenha `position`.
- Receita do vídeo: `relative` no pai, `absolute` no filho.
- Pra jogos: personagem em cima do cenário, moeda no canto, barra de vida.

**ILUSTRAR NO NAVEGADOR**
- Com o pai `relative`, clicar nos 4 cantos: a estrela vai pro canto do pai.
- Trocar pra “pai sem position”: a estrela pula pro canto da **página**, longe do pai. É o erro que todo mundo comete.

**DICA DO VIDEO**
- top, left, bottom e right também aceitam porcentagem.

**PERGUNTA**
- Por que a estrela escapou do pai? (o pai não tinha `position`)

---

## Slide 15 — Um card de personagem

**FALAR**
- Tudo o que vimos, um passo de cada vez. Cada clique adiciona uma linha de CSS.
- Pedir pra turma adivinhar a próxima mudança antes de clicar.

**ILUSTRAR NO NAVEGADOR**
- Clicar uma vez por vez. Passar o mouse nas propriedades: o card brilha.
- Depois reproduzir o mesmo card ao vivo no VS Code (ver a versão pronta do aluno).

**ERRO COMUM**
- Texto escuro em fundo escuro: ao mudar o `background-color`, mudar o `color` também.

---

## Slide 16 — O que levar pra casa

**FALAR**
- Essa é a cola. O PDF “Guia de referências: propriedades CSS” tem a lista completa.
- Passar o mouse nas propriedades: cada uma tem a explicação em uma frase.
- Não é pra decorar. Com o tempo, o uso dá a memória.

**PERGUNTA**
- Qual a diferença entre padding e margin?
- O que acontece se eu usar `top` sem `position`?

---

## Slide 17 — Vista a página do seu jogo

**FALAR**
- Hoje todo estilo vale pra **todas** as tags do mesmo tipo. Isso vai incomodar eles: ótimo. Próxima aula resolve.

**PAUSA E PRATICA**
- Pausar o vídeo aqui. Dar tempo. Quem terminar, faz o desafio do `absolute`.

**DICA DO VIDEO**
- Não esquecer o quiz “estilos e posicionamento” depois deste vídeo.

---
