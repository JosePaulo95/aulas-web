# CSS 2 — Seletores e classes: roteiro de fala

Gerado das anotações escondidas do deck [css-02-seletores-classes.html](../css-02-seletores-classes.html) (tecla **N** no deck mostra as mesmas notas). Nada disto aparece pro aluno.

Referência: [transcrição do vídeo](css-referencia-transcricao.md).

---

## Slide 1 — Seletores e classes

**FALAR**
- Última aula: cor, texto, caixa e posição.
- Ficou uma dor no ar: `p { }` muda **todos** os parágrafos. Hoje a gente resolve isso.
- Reforçar o combinado: pausar e testar no computador.

**PAUSA E PRATICA**
- Ter à mão o `index.html` e o `estilo.css` da aula passada.

---

## Slide 2 — Todos ficaram iguais

**FALAR**
- Pedir pra turma adivinhar antes de clicar: o que vai acontecer?
- Seletor `p` = “todo parágrafo da página”. Sem exceção.
- Hoje a pergunta é: como eu aponto **um** parágrafo específico?

**ILUSTRAR NO NAVEGADOR**
- Apertar o botão e deixar o silêncio: os três ficaram vermelhos.
- Depois: “e se eu quisesse só o primeiro?” Deixar a dúvida pairar.

---

## Slide 3 — O radar de seletores

**FALAR**
- Essa ferramenta vai aparecer várias vezes. À esquerda o HTML, à direita a página. O seletor escolhido acende quem é atingido.
- Cada slide tem uma missão: achar o seletor que pega exatamente o que a missão pede.
- Seletor de tag = o nome da tag. Pega **todos** os elementos daquele tipo. Já conhecem do css-01.

**ILUSTRAR NO NAVEGADOR**
- Clicar em `h1`: pega o título. Clicar em `p`: missão cumprida.
- Digitar um seletor qualquer no campo (`ul`, `li`). Notar que `li` pega os dois itens da lista.

**PAUSA E PRATICA**
- Pausem e testem seletores de tag no campo. Qual não acende nada? Por quê?

---

## Slide 4 — Dê um nome com a classe

**FALAR**
- Problema: são quatro `<p>`, mas só dois são avisos importantes. O seletor `p` pega os quatro.
- Solução em dois passos: 1) no HTML, dar um nome com `class="aviso"`; 2) no CSS, usar `.aviso`.
- O ponto é só do CSS. No HTML não leva ponto.
- Classe é um crachá: quem tem o crachá recebe o estilo, mesmo que seja do mesmo tipo de tag.

**ILUSTRAR NO NAVEGADOR**
- Começar com `p`: acende os quatro. Trocar para `.aviso`: só dois.
- **Clicar num parágrafo da página** dá ou tira a classe. O HTML ao lado muda e o seletor reage.

**DICA DO VIDEO**
- Seletor mais simples possível: uma classe só é o cenário ideal.

**ERRO COMUM**
- Escrever `class=".aviso"` no HTML, com ponto. Não funciona.
- Esquecer o ponto no CSS: `aviso { }` procura uma tag chamada aviso.

**PAUSA E PRATICA**
- Pausem: criem a classe `.aviso` e apliquem em um parágrafo só.

---

## Slide 5 — Um elemento, várias classes

**FALAR**
- Um elemento pode ter várias classes, separadas por espaço.
- Cada classe é um pedaço do visual. Juntando, monta o resultado. É a ideia de peças de Lego.
- Vantagem: `.card` reaproveito em todo lugar.

**ILUSTRAR NO NAVEGADOR**
- Marcar e desmarcar os checkboxes e olhar o `class="..."` mudando.

**ERRO COMUM**
- Achar que a ordem em `class="a b"` decide quem ganha. Não decide.
- Escrever duas vezes o atributo: `class="a" class="b"`. Só o primeiro vale.

**PERGUNTA**
- O que acontece com `class="card destaque"`? (recebe os dois estilos)

---

## Slide 6 — O id: um nome só

**FALAR**
- Três cartões iguais, todos com `class="card"`. Se eu uso `.card`, os três mudam. Quero só o VIP.
- O id é parecido com classe, mas usa `#` e é **único** na página.
- Analogia: classe = turma (vários alunos), id = CPF (um só).
- Regra prática pra eles: **use classe** pra estilizar. Id fica pra ocasiões específicas, como o JavaScript de módulos futuros.

**ILUSTRAR NO NAVEGADOR**
- Clicar em `.card` (pega 3, “pegou demais”) e depois em `#vip` (missão cumprida).

**ERRO COMUM**
- Usar o mesmo id em dois elementos. O navegador até aceita, mas está errado.

**PERGUNTA**
- Se eu tenho 5 botões iguais, uso classe ou id? (classe)

---

## Slide 7 — A vírgula diz “e”

**FALAR**
- Vírgula entre seletores = “este E aquele”. Dá o mesmo estilo a vários grupos de uma vez.
- Sem a vírgula eu teria que escrever duas regras iguais: `h1 { }` e `h2 { }`.

**DICA DO VIDEO**
- No vídeo: “chaining with a comma just means select this and this”.

**ILUSTRAR NO NAVEGADOR**
- `h1` sozinho: “faltou pegar 2”. `h1, h2`: missão cumprida. `h1, h2, p`: “pegou demais”.

**ERRO COMUM**
- Esquecer a vírgula: `h1 h2` vira outra coisa (próximo slide).

---

## Slide 8 — O espaço diz “dentro de”

**FALAR**
- A página tem links em três lugares: menu, texto e rodapé. Só `a` pega todos.
- Espaço entre seletores = “este DENTRO daquele”. `nav a`: só os links que estão dentro do menu.
- Útil quando a mesma tag aparece em lugares diferentes e cada lugar precisa de um visual.

**ILUSTRAR NO NAVEGADOR**
- `a`: “pegou demais”. `nav a`: missão cumprida. Depois testar `main a` e `footer a` e ver cada região acender.

**PERGUNTA**
- Qual seletor pega só o link do rodapé? (`footer a`)

---

## Slide 9 — O `>` diz “filho direto”

**FALAR**
- Slide bônus: pode pular se estiver apertado de tempo.
- Exemplo clássico: menu com submenu. O submenu também é feito de `li`, então `.menu li` pega tudo.
- Espaço pega netos, bisnetos... `>` pega só os filhos diretos.
- Analogia: “qualquer parente” versus “só os filhos”.

**ILUSTRAR NO NAVEGADOR**
- `.menu li`: pegou 5, “pegou demais” (inclui Ação e Corrida). `.menu > li`: pegou 3, missão cumprida.
- Olhar o HTML: os subitens estão numa `ul` dentro do `li` Jogos.

**DICA DO VIDEO**
- No vídeo, o `>` é apresentado como “one level deep”. Usar só quando precisar.

---

## Slide 10 — Duas regras, um vencedor

**FALAR**
- O CSS lê de cima pra baixo. Se duas regras brigam pelo mesmo elemento e têm a mesma força, **a última vence**.

**DICA DO VIDEO**
- “these styles get applied from the top to the bottom of your css file”.

**ILUSTRAR NO NAVEGADOR**
- Apertar “Inverter a ordem” algumas vezes: a cor troca.
- No VS Code: mudar a ordem de duas regras e F5.

**ERRO COMUM**
- “Escrevi a regra e nada muda!” Procurar outra regra mais embaixo mexendo na mesma coisa.

---

## Slide 11 — O ringue dos seletores

**FALAR**
- Antes da ordem, vem a **força** do seletor: quanto mais específico, mais força.
- Placar simples: tag = 1 ponto, classe = 10, id = 100. Maior pontuação vence, não importa a ordem.
- Pensem num jogo de cartas: id ganha de classe, que ganha de tag.

**DICA DO VIDEO**
- “more specific selectors get priority, from id down to class down to broad elements”.
- Juntando seletores o cálculo complica. Com o tempo se pega o jeito. Não entrar nisso hoje.

**ILUSTRAR NO NAVEGADOR**
- Ligar só `p`, depois adicionar `.destaque`, depois `#aviso`. Ver o vencedor mudando.
- Abrir F12 → aba Styles de um site. As regras perdedoras aparecem **riscadas**.

**PERGUNTA**
- Se `.destaque` está no começo do arquivo e `p` no fim, quem vence? (`.destaque`)

---

## Slide 12 — Quanto mais simples, melhor

**FALAR**
- Seletor comprido funciona, mas vira armadilha: ganha de tudo e é difícil de desfazer.
- Regra do dedão: uma classe, um nome claro.

**DICA DO VIDEO**
- “keeping your selectors as simple as possible, like a single class name, is the best case scenario”.

**PERGUNTA**
- Por que `.link` é um nome melhor que `.vermelho`? (e se amanhã o link ficar azul?)

---

## Slide 13 — `:hover` — quando o mouse passa

**FALAR**
- Pseudo-classe = um estado do elemento. Escreve com dois-pontos depois do seletor.
- `:hover` é o mais usado: estilo diferente enquanto o mouse está em cima.
- `cursor: pointer` transforma a seta em mãozinha. Passa a ideia de “clicável”.

**DICA DO VIDEO**
- “a different set of styles for when your mouse is over the element”.

**ILUSTRAR NO NAVEGADOR**
- Passar o mouse no botão e notar que a troca é seca, instantânea. Gancho pro próximo slide.

**ERRO COMUM**
- Espaço antes dos dois-pontos: `.botao :hover` é outra coisa. Tudo junto: `.botao:hover`.

**PAUSA E PRATICA**
- Pausem: façam um botão que muda de cor ao passar o mouse.

---

## Slide 14 — Suavize com transition

**FALAR**
- `transition`: diz quanto tempo a mudança leva, em vez de pular de uma vez.
- `transform`: move, gira ou aumenta sem bagunçar o resto da página.
- Combinando os dois, qualquer botão fica com cara de jogo.

**DICA DO VIDEO**
- No vídeo: o transition recebe o tempo e uma curva (“bezier”). Hoje só o tempo.
- “make this button move on hover with the extremely cool transform property”.

**ILUSTRAR NO NAVEGADOR**
- Passar o mouse com 0ms, depois com 300ms, depois com 1000ms. Sentir a diferença.
- Trocar o transform e passar o mouse de novo.

**ERRO COMUM**
- Pôr o `transition` só no `:hover`: a animação de ida funciona, mas a volta fica seca.

---

## Slide 15 — `:first-child` e `:last-child`

**FALAR**
- Slide bônus. Mais pseudo-classes: escolhem pela **posição** dentro do pai.
- O ranking muda toda semana, mas o campeão sempre é o primeiro da lista. Não preciso lembrar de mover uma classe.

**DICA DO VIDEO**
- O vídeo cita `first-child` e o seguinte, mas lembra: “keep it simpler than this whenever you can”.

**ILUSTRAR NO NAVEGADOR**
- `li`: pegou demais (4). `li:first-child`: Ana, missão cumprida. `li:last-child`: Davi.

---

## Slide 16 — O que levar pra casa

**FALAR**
- Cola da aula. O PDF “Guia de referências: propriedades CSS” tem o resto.
- Passar o mouse nos itens: cada um tem a explicação em uma frase.

**PERGUNTA**
- Qual a diferença entre `.a .b` e `.a, .b`? (dentro de versus este e aquele)

---

## Slide 17 — Escolha quem você quer estilizar

**FALAR**
- Agora o `p { }` não é mais um problema: eu escolho quem recebe.

**PAUSA E PRATICA**
- Pausar o vídeo aqui e dar tempo.

**DICA DO VIDEO**
- Lembrar o quiz “estilizando e selecionando” (depois do próximo vídeo, conforme a ordem do módulo).

---
