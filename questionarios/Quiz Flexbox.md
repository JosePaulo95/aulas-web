# Questionário — Flexbox

**1. Para organizar três `div` lado a lado com Flexbox, onde você escreve `display: flex`?**
- a) Na `div` que contém as três (o elemento pai)
- b) Em cada uma das três `div`
- c) No `body`, sempre
- d) Na primeira `div` apenas

**2. Qual é o valor padrão de `flex-direction`?**
- a) `column`
- b) `row-reverse`
- c) `row`
- d) `column-reverse`

**3. Em um container com `flex-direction: row`, o que o `justify-content` controla?**
- a) A cor dos itens
- b) O alinhamento vertical dos itens
- c) O tamanho de cada item
- d) A distribuição dos itens ao longo do eixo principal, na horizontal

**4. Em um container com `flex-direction: row`, o que o `align-items` controla?**
- a) O alinhamento horizontal dos itens
- b) O alinhamento vertical dos itens
- c) A ordem em que os itens aparecem
- d) A quebra de linha dos itens

**5. Quais propriedades centralizam um item no meio exato do container, na horizontal e na vertical?**
- a) `flex-direction: center` e `flex-wrap: center`
- b) `align-self: center` apenas
- c) `justify-content: center` e `align-items: center`
- d) `text-align: center` e `vertical-align: center`

**6. Em um container com `flex-direction: column`, qual propriedade controla a distribuição na vertical?**
- a) `align-items`
- b) `justify-content`
- c) `flex-wrap`
- d) `gap`

**7. O que o valor `space-between` do `justify-content` faz?**
- a) Junta todos os itens no centro
- b) Dá o mesmo espaço em volta de cada item, inclusive nas pontas
- c) Empurra todos os itens para o fim da linha
- d) Coloca o primeiro item na ponta do início, o último na ponta do fim, e divide o espaço restante entre eles

**8. Para que serve a propriedade `gap`?**
- a) Define o espaço entre os itens do flex, sem afetar as bordas da caixa
- b) Define o espaço entre a caixa e a borda da página
- c) Define o tamanho de cada item
- d) Define a cor de fundo do container

**9. Em qual situação você precisa usar `flex-wrap: wrap`?**
- a) Quando quer inverter a ordem dos itens
- b) Quando quer centralizar os itens
- c) Quando os itens não cabem em uma linha e devem quebrar para a de baixo
- d) Quando quer que os itens fiquem sempre em coluna

**10. Três cards dentro de um container flex receberam `flex: 1`. O que acontece?**
- a) Os três ficam com 1 pixel de largura
- b) Os três dividem o espaço disponível igualmente
- c) Só o primeiro card ocupa o espaço, e os outros somem
- d) Nada muda, porque o `flex: 1` só funciona no container

---

## Gabarito (uso do professor — não publicar para os alunos)

| Questão | Resposta | Por quê |
|---|---|---|
| 1 | a | O `display: flex` vai no pai; os filhos viram itens. |
| 2 | c | O padrão é `row`: itens em linha, da esquerda para a direita. |
| 3 | d | `justify-content` trabalha no eixo principal; em `row` é a horizontal. |
| 4 | b | `align-items` trabalha no eixo transversal; em `row` é a vertical. |
| 5 | c | As duas juntas centralizam nos dois eixos. |
| 6 | b | Em `column` os eixos trocam: o principal vira vertical, então é o `justify-content`. |
| 7 | d | Os itens das pontas encostam nas bordas e o espaço restante é dividido entre os itens. |
| 8 | a | `gap` é um espaço fixo entre os itens. |
| 9 | c | Sem `wrap`, os itens estouram para fora quando não cabem. |
| 10 | b | `flex: 1` nos itens faz cada um crescer e dividir o espaço livre igualmente. |
