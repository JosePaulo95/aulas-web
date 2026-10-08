# Questionário — CSS: estilizando e selecionando

**1. Qual seletor aplica um estilo a todos os parágrafos da página?**
- a) `.p`
- b) `p`
- c) `#p`
- d) `<p>`

**2. Como dar a classe `aviso` a um parágrafo no HTML?**
- a) `<p id="aviso">`
- b) `<p class=".aviso">`
- c) `<p name="aviso">`
- d) `<p class="aviso">`

**3. Como se escreve, no CSS, o seletor que pega todos os elementos com a classe `aviso`?**
- a) `.aviso`
- b) `#aviso`
- c) `aviso`
- d) `*aviso`

**4. Qual é a principal diferença entre classe e id?**
- a) A classe só funciona em parágrafos e o id só em títulos
- b) O id é escrito com ponto e a classe com cerquilha
- c) Vários elementos podem ter a mesma classe, mas um id deve ser único na página
- d) Não existe diferença, são apenas nomes diferentes

**5. O que a regra `h1, h2 { color: teal; }` faz?**
- a) Pinta só os `h2` que estão dentro de um `h1`
- b) Pinta de verde-azulado os títulos `h1` e também os `h2`
- c) Pinta só o primeiro `h1` da página
- d) Não funciona, porque não pode haver vírgula em seletores

**6. O que o seletor `nav a` pega?**
- a) Os elementos `nav` que contêm links
- b) Todos os links da página
- c) Só o primeiro link da página
- d) Só os links que estão dentro de um `nav`

**7. Em um menu com submenu, qual a diferença entre `.menu li` e `.menu > li`?**
- a) `.menu > li` pega só os itens que são filhos diretos do menu; `.menu li` pega todos, inclusive os do submenu
- b) `.menu li` pega só os filhos diretos e `.menu > li` pega todos
- c) Os dois pegam exatamente os mesmos elementos
- d) `.menu > li` pega só os itens do submenu

**8. O CSS tem duas regras seguidas: `p { color: red; }` e depois `p { color: blue; }`. De que cor ficam os parágrafos?**
- a) Vermelho, porque a primeira regra vence
- b) Roxo, porque as cores se misturam
- c) Azul, porque com a mesma força vence a última regra
- d) Fica sem cor, porque as regras se anulam

**9. Um parágrafo tem `class="destaque"` e `id="aviso"`. Existem as regras `p { color: blue; }`, `.destaque { color: orange; }` e `#aviso { color: green; }`. De que cor ele fica?**
- a) Azul
- b) Verde
- c) Laranja
- d) Depende da ordem em que as regras foram escritas

**10. Para que serve o `:hover` em uma regra como `.botao:hover { background-color: orange; }`?**
- a) Faz o botão piscar o tempo todo
- b) Aplica o estilo só depois que o botão for clicado
- c) Esconde o botão quando a página carrega
- d) Aplica o estilo enquanto o mouse estiver em cima do botão

---

## Gabarito (uso do professor — não publicar para os alunos)

| Questão | Resposta | Por quê |
|---|---|---|
| 1 | b | O seletor de tag é só o nome da tag e pega todas as daquele tipo. |
| 2 | d | No HTML a classe vai em `class="..."`, sem ponto. |
| 3 | a | No CSS o ponto indica classe. |
| 4 | c | Classe é reaproveitável; id é único, como um CPF. |
| 5 | b | A vírgula significa "este e aquele": a mesma regra para os dois. |
| 6 | d | O espaço significa "dentro de". |
| 7 | a | O `>` pega só um nível abaixo; o espaço pega qualquer nível. |
| 8 | c | Com a mesma força, a última regra do arquivo vence. |
| 9 | b | Placar da especificidade: tag 1, classe 10, id 100. O id vence, independente da ordem. |
| 10 | d | O `:hover` vale só enquanto o mouse está em cima do elemento. |
