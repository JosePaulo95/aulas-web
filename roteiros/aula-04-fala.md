# Aula 4 — Roteiro de fala

Texto completo, organizado por tópico — pra bater o olho e lembrar sem precisar ler tudo, mas sem perder o conteúdo. Slides visuais em [aula-04-slides.md](aula-04-slides.md).

**Duração alvo:** ~18-20 min | **Sem Live Server** — refresh manual (F5). Bloco de Notas → VS Code ainda na aula.

---

## Slide 1 — Título

**CONTEXTO DO CURSO** — Gente, esse curso aqui a gente vai falar sobre desenvolvimento web, e nessa aula a gente vai falar sobre HTML.

**COMBINADO** — Mas antes de começar, preciso fazer um combinado com vocês: esse curso só funciona se vocês estiverem dispostos a participar de verdade. Se ficarem só assistindo, não vai dar certo.

**PAUSA E PRATICA** — Às vezes eu vou pedir pra vocês pausarem o vídeo e experimentarem aí no computador — se não tiverem no computador agora, terminem de assistir depois, na frente de um, porque vai ser bem melhor fazendo junto do que só vendo. Pelo celular pode não dar o mesmo resultado; tentem arrumar um computador ou algo em que dê pra editar código.

**CURIOSIDADE** — E mais: eu preciso que vocês sejam curiosos. Bastante curiosos. Só eu falando aqui não bota conhecimento em ninguém — vocês têm que querer fuçar, testar, quebrar coisa. Combinado?

---

## Slide 2 — Arquitetura web

**CONTEXTO** — Esse módulo de hoje é sobre HTML — um dos componentes da maioria dos sites que a gente vê na internet. A maioria dos sites é formada por três tipos de arquivo: HTML, CSS e JavaScript. Hoje a gente foca no HTML.

**SITE REAL + CLIENTE-SERVIDOR** — Olha só, vamos aqui nesse site [ex: site do governo]. Como será que esse site chega até a minha tela agora? A web funciona num esquema de cliente e servidor. Eu, na minha máquina, sou o cliente. Existe um servidor que manda os arquivos HTML, CSS e JavaScript pra todo cliente que pede. O navegador sabe receber esse texto e transformar isso na página que a gente vê.

**AÇÃO-SURPRESA** — Vamos fazer uma coisa aqui: clica com o botão direito, "Inspecionar elemento". Olha esse código — isso é o HTML por trás da página. Vou editar um texto aqui, ó... viu? Mudou na tela! Agora aperto F5 pra atualizar... e olha o que aconteceu: voltou tudo ao normal! Por quê? Porque eu só editei a minha cópia local. O servidor nunca soube dessa edição — quando recarreguei, ele mandou o arquivo original de novo.

**FUÇA VOCÊ** — Agora pausa o vídeo. Vai numa página sua e faz a mesma coisa: F12 ou botão direito, "Inspecionar elemento", e bagunça. Não vale só repetir exatamente o que eu fiz — testem coisas que eu nem pedi, apaguem, dupliquem, mexam em imagem. É assim que se aprende.

**TRANSIÇÃO** — Beleza, essa página que a gente mexeu vem de um servidor de verdade, lá longe. Agora a gente vai criar o nosso próprio site — só que o nosso, por enquanto, vai rodar só na nossa máquina, com o que a gente já tem instalado: o Bloco de Notas.

---

## Slide 3 — Tags HTML iniciais

**OS QUATRO ESSENCIAIS** — Pra começar, vocês só precisam de quatro coisas: `h1`, `h2` e `h3`, que são títulos de tamanhos diferentes; `br`, que quebra uma linha dentro do texto; e o `a`, que cria um link — dentro do `href` vocês colocam o arquivo pra onde esse link deve levar.

**JÁ DÁ PRA CONSTRUIR** — Com só isso aqui, já dá pra construir muita coisa.

---

## Slide 4 — VS Code

**BLOCO DE NOTAS TEM LIMITE** — Repara que a gente conseguiu fazer tudo isso só com Bloco de Notas — mostra que não existe mágica, é tudo texto puro. Mas sendo sincero: ninguém programa de verdade usando Bloco de Notas.

**VS CODE** — Bora conhecer a ferramenta que todo mundo usa: o VS Code, um editor de código gratuito. Vou baixar no site oficial, instalar — é só avançar, avançar, concluir. Se seu computador não deixar instalar programas agora, dá pra fazer isso em casa depois.

**A DIFERENÇA** — Olha a diferença: aqui as tags aparecem coloridas, fica muito mais fácil enxergar onde uma começa e termina. Se eu começo a digitar, ele sugere e completa sozinho. E do lado esquerdo, dá pra ver todos os arquivos e pastas do projeto de uma vez.

---

## Slide 5 — Exercício HTML: A Casa em Chamas

**O DESAFIO** — Agora o desafio: vocês vão criar um joguinho chamado "A Casa em Chamas". Cada cômodo da casa é uma página HTML diferente, todas na mesma pasta.

**COMO FUNCIONA** — Vocês descrevem a cena com um título, usam quebra de linha, e colocam links pra outros cômodos — "ir pra cozinha" leva pra um arquivo, "ir pro corredor" leva pra outro.

**OS FINAIS** — Pode ter cômodos que levam à saída (vitória) e cômodos sem saída (fogo pegou, tenta de novo). Pausa o vídeo e cria o seu.

---

## Slide 6 — Mais tags

**MAIS TAGS EXISTEM** — Existem várias outras tags além dessas quatro — parágrafo, imagem, listas, divisões, tags semânticas como cabeçalho e rodapé.

**REFERÊNCIA, NÃO AULA** — Não vou explicar uma por uma agora; deixo essa lista aqui como referência, e a gente vai usando aos poucos.

---

## Slide 7 — CSS

**POR QUE CSS AGORA** — Já que esse módulo também envolve CSS, vamos dar uma provada. O CSS controla a aparência da página.

**COMO USAR** — Um jeito simples de usar é colocar um bloco `style` dentro do HTML, escolher uma tag, tipo `h1`, e definir uma propriedade, tipo `color`.

**TESTA AO VIVO** — Salva, atualiza o navegador, e olha a cor mudando.

---

## Slide 8 — Propriedades CSS

**PROPRIEDADES ÚTEIS** — Essas são as propriedades de CSS mais úteis pra começar: cor do texto, cor de fundo, tamanho e tipo de fonte, e alinhamento.

**GUARDEM** — Guardem essa lista como referência.

---

## Slide 9 — Exercício CSS: estilize sua casa

**ÚLTIMA TAREFA** — Última tarefa de hoje: voltem na Casa em Chamas que vocês criaram e adicionem estilo. Troquem a cor de fundo, a cor dos títulos, a fonte.

**NÃO PRECISA PERFEITO** — Não precisa ficar perfeito — o objetivo é perder o medo de mexer no CSS.

**PRÓXIMA AULA** — Na próxima aula, a gente se aprofunda nisso.
