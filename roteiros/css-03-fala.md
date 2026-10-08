# CSS 3 — Estilizando um site: roteiro de fala

Gerado das anotações escondidas do deck [css-03-estilizando-um-site.html](../css-03-estilizando-um-site.html) (tecla **N** no deck mostra as mesmas notas). Nada disto aparece pro aluno.

Referência: [transcrição do vídeo](css-referencia-transcricao.md).

---

## Slide 1 — Estilizando um site

**FALAR**
- Já sabemos cor, texto, caixa, posição, classe e seletor. Hoje é **juntar tudo** numa página de verdade.
- Vamos construir o site do torneio Arena Pixel, uma peça de cada vez.

**PAUSA E PRATICA**
- Pausar e abrir a página do torneio da aula de HTML. É nela que eles vão aplicar tudo.

---

## Slide 2 — Antes e depois

**FALAR**
- Esse é o resultado do vídeo. A mesma página, lado esquerdo sem CSS e lado direito com.
- Tudo o que aparece à direita a gente já viu. Hoje é questão de ordem e de método.

**ILUSTRAR NO NAVEGADOR**
- Arrastar devagar sobre o cabeçalho, depois o botão, depois os cards.
- Pedir pra turma apontar: “qual propriedade fez isso?”.

---

## Slide 3 — Uma pasta, três coisas

**FALAR**
- Antes de estilizar, arrumar a casa: o HTML, o CSS e as imagens ficam na mesma pasta do projeto, cada um no seu lugar.
- O `<link>` no `<head>` é a ponte entre o HTML e o CSS.

**ILUSTRAR NO NAVEGADOR**
- No VS Code: mostrar a pasta aberta na barra lateral, com os três itens.

**ERRO COMUM**
- Nome do arquivo diferente do `href` (`estilo.css` versus `style.css`). Nada muda e não há aviso.
- Arquivo salvo em outra pasta. Conferir sempre se o `.css` está ao lado do `.html`.

**PAUSA E PRATICA**
- Pausem: organizem a pasta do projeto do jeito que aparece aqui.

---

## Slide 4 — O reset e o box-sizing

**FALAR**
- O `*` seleciona **tudo**. Esse reset zera as margens que o navegador põe sozinho e muda como o tamanho é calculado.
- Padrão (`content-box`): o `width` é só do miolo. O padding e a borda somam por fora e a caixa fica maior que 200.
- `border-box`: o `width` vale a caixa inteira. Se eu digo 200, ocupa 200. Previsível.

**ILUSTRAR NO NAVEGADOR**
- Alternar os dois botões e comparar a caixa com a linha laranja de 200px.

**DICA DO VIDEO**
- No vídeo: width e height são melhores em porcentagem do pai, senão tudo bagunça e sai da tela. O `border-box` ajuda nisso.

**PERGUNTA**
- Com `content-box`, qual a largura real da caixa? (200 + 40 + 10 = 250px)

---

## Slide 5 — Herança: pai manda no filho

**FALAR**
- Algumas propriedades **passam de pai pra filho** sozinhas: cor do texto, fonte, tamanho da letra. Chama-se herança.
- Outras, como borda e padding, são só da caixa. Não passam.
- Na prática: ponho `font-family` e `color` no `body` uma vez e a página inteira ganha.

**ILUSTRAR NO NAVEGADOR**
- Marcar `color`: título e parágrafo mudam. Marcar `border`: só a caixa de fora ganha moldura.

**PERGUNTA**
- Se eu quero a mesma fonte em tudo, onde escrevo a regra? (no `body`)

---

## Slide 6 — Vestindo o cabeçalho

**FALAR**
- Uma propriedade por clique. Peça pra turma adivinhar a próxima antes de clicar.
- Seletor de tag (`header`) para a faixa e `nav a` para só os links do menu (css-02).
- `text-decoration: none` tira o sublinhado. O `:hover` traz de volta quando passa o mouse.

**ILUSTRAR NO NAVEGADOR**
- Passar o mouse nas propriedades do código: o cabeçalho acende.
- No fim, passar o mouse nos links para ver o sublinhado voltar.

**PAUSA E PRATICA**
- Pausem e estilizem o cabeçalho da página de vocês com as mesmas propriedades.

---

## Slide 7 — Texto que dá gosto de ler

**FALAR**
- `line-height`: altura da linha. 1.6 dá respiro entre as linhas e melhora muito a leitura.
- A fonte vai no `body`: toda a página herda (slide anterior).

**DICA DO VIDEO**
- Fontes sempre com reserva: `Arial, sans-serif`. Se a primeira falhar, vale a segunda.

**ILUSTRAR NO NAVEGADOR**
- Comparar o texto antes e depois do `line-height`. A diferença é grande.

**ERRO COMUM**
- Escrever `line-height: 1.6px`. Sem unidade (1.6) é um múltiplo do tamanho da letra. Com px, vira 1,6 pixel e o texto se atropela.

---

## Slide 8 — Sombra: box-shadow

**FALAR**
- `box-shadow` faz o elemento parecer descolado do fundo. Valores: deslocamento X, Y, desfoque e cor.
- Cor com `rgba(0,0,0,0.25)`: preto com 25% de força. Sombra boa é discreta.
- Junto com `border-radius`, é o que transforma um retângulo em um card.

**DICA DO VIDEO**
- “I usually use a box shadow generator and copy the CSS”. Ninguém decora esses números.

**ILUSTRAR NO NAVEGADOR**
- Mexer nos sliders um de cada vez. Depois abrir um gerador de sombra no navegador e copiar.

**PAUSA E PRATICA**
- Pausem: criem um card com sombra e cantos arredondados.

---

## Slide 9 — Imagem de fundo

**FALAR**
- `background-image` põe uma imagem no fundo da caixa, e o texto continua por cima.
- `cover`: a imagem cobre tudo, cortando o que sobrar. `contain`: aparece inteira, podem sobrar espaços.
- `no-repeat`: sem ladrilho. `position`: de onde a imagem parte.

**DICA DO VIDEO**
- Existe um atalho `background:` que junta tudo numa linha. No começo, prefira as propriedades separadas, que são mais claras.

**ILUSTRAR NO NAVEGADOR**
- Trocar `size` e `repeat` e ver o que acontece. Começar de `auto` + `repeat`: vira ladrilho.

**ERRO COMUM**
- Caminho da imagem errado em `url()`: aparece só o fundo vazio. O caminho vale a partir do arquivo `.css`.

---

## Slide 10 — Botão com personalidade

**FALAR**
- Revisão de tudo: cor, padding, border, radius, hover e transition.
- Uma classe, `.botao`, serve para todos os botões do site.
- Se eu mudar a cor lá, todos mudam. Esse é o ganho de usar classe.

**ILUSTRAR NO NAVEGADOR**
- No fim, passar o mouse no botão: cresce suavemente por causa do `transition`.

**ERRO COMUM**
- Esquecer o `border: none`: sobra a moldura cinza padrão do botão e parece amador.

---

## Slide 11 — Centralizando um bloco

**FALAR**
- Bloco com largura menor que a página fica colado à esquerda. Pra centralizar: `margin: 0 auto`.
- `auto` nas laterais = “divida o espaço que sobra igualmente”.
- `max-width` em vez de `width`: o bloco pode encolher em telas menores sem estourar.

**ILUSTRAR NO NAVEGADOR**
- Marcar e desmarcar `margin: 0 auto` com larguras diferentes.

**ERRO COMUM**
- Usar `margin: auto` sem definir largura: o bloco ocupa tudo e não há o que centralizar.

---

## Slide 12 — Um CSS que dá pra achar

**FALAR**
- Um arquivo de CSS cresce rápido. Se eu seguir a ordem da página e usar comentários, acho tudo.
- Ordem geral → específico: primeiro o que vale pra tudo (reset, body), depois cada pedaço.
- Lembrar: CSS lê de cima pra baixo (css-02), então a ordem também ajuda a não ter conflito.

**ILUSTRAR NO NAVEGADOR**
- No VS Code: escrever um comentário `/* ... */` e mostrar que ele não muda nada na página.

**PAUSA E PRATICA**
- Pausem: organizem o CSS de vocês em seções com comentários.

---

## Slide 13 — O site pronto

**FALAR**
- É o site que acabamos de montar. Cada bloco veio de um dos passos anteriores.
- Reparem nos cards: estão um embaixo do outro. Como colocar lado a lado? Esse é o gancho do próximo vídeo: Flexbox.

**ILUSTRAR NO NAVEGADOR**
- Passar o mouse no botão e nos links. Abrir o CSS completo e achar cada seção pelos comentários.

---

## Slide 14 — O que levar pra casa

**FALAR**
- As propriedades novas de hoje. O PDF “Guia de referências: propriedades CSS” reúne tudo, das três aulas.

**PERGUNTA**
- Por que colocar a fonte no `body` e não em cada parágrafo? (herança)

---

## Slide 15 — Estilize o seu site

**FALAR**
- Agora é a vez deles. Usar a página de torneio ou a página do jogo favorito que fizeram na aula de HTML.

**PAUSA E PRATICA**
- Pausar o vídeo aqui. Dar tempo longo: é a aula mais prática do módulo.

**DICA DO VIDEO**
- Depois: baixar o PDF “Guia de referências: propriedades CSS” e ir ao vídeo de Flexbox.

---
