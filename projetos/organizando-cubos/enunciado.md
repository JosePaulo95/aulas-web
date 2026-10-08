# Projeto proposto — Organizando Cubos

**Módulo 3 · CSS: classes, posicionamento e Flexbox**

## O desafio

Você recebeu uma página com seis caixas cheias de cubos coloridos, todos empilhados na bagunça. Sua missão é **organizar os cubos** usando só **Flexbox**, escrevendo regras no arquivo `estilo.css`. O HTML já está pronto e **não precisa ser alterado**.

Cada fase mostra, em texto, como a caixa deve ficar. Para ver o resultado esperado de todas as fases, abra o arquivo `alvos.html`.

## O que vem pronto

| Arquivo | Para que serve |
|---|---|
| `index.html` | A página com as 6 fases. **Não mexa.** |
| `estilo.css` | O visual básico já pronto e espaços vazios para você escrever as 6 fases. |
| `alvos.html` | Mostra como cada fase deve ficar (gabarito visual). |

## As fases

Escreva as regras na caixa de cada fase (`#fase1 .caixa`, `#fase2 .caixa`...).

| Fase | Como deve ficar | Para pensar |
|---|---|---|
| 1. Lado a lado | 4 cubos em uma linha, com um espacinho entre eles | Qual comando liga o Flexbox? E o espaço entre os itens? |
| 2. No centro | 1 cubo exatamente no meio da caixa | Quais duas propriedades centralizam nos dois eixos? |
| 3. Nas pontas | Um cubo em cada ponta, o do meio no centro, tudo alinhado ao meio na vertical | O espaço que sobra deve ser dividido *entre* os cubos |
| 4. Coluna à direita | Cubos um embaixo do outro, encostados na direita, com espaço entre eles | Ao mudar a direção, os eixos trocam de lugar! |
| 5. Quebra de linha | Numa caixa de **230px**, os 8 cubos quebram de linha e ficam centralizados | O que acontece quando os itens não cabem em uma linha? |
| 6. O dado (desafio) | Caixa de **200px** de largura: os 3 cubos formam a diagonal da face 3 de um dado | Cada cubo precisa de um alinhamento diferente: `align-self` |

## Dicas

- Lembre-se: o `display: flex` vai no **pai** (`.caixa`), não nos cubos.
- Teste o resultado a cada mudança: salve e atualize a página (F5).
- Use o **Guia de referências: propriedades CSS** para consultar os valores.
- Não precisa ficar idêntico pixel a pixel: o importante é a organização dos cubos ser a mesma do alvo.

## Para quem terminar antes (bônus)

1. Monte a **face 5** de um dado: 5 cubos, com dois em cima, um no centro e dois embaixo.
2. Troque as cores dos cubos pelas suas cores favoritas usando `background-color`.
3. Faça os cubos crescerem um pouco quando o mouse passar por cima (`:hover` + `transform` + `transition`).

## Como saber se você acertou

- [ ] As fases 1 a 5 ficam iguais às de `alvos.html`.
- [ ] Você escreveu apenas CSS, sem mudar o HTML.
- [ ] As propriedades foram colocadas na caixa (pai), exceto o alinhamento individual da fase 6.
- [ ] (Desafio) A fase 6 forma uma diagonal.

## Entrega

Envie os arquivos do projeto conforme a orientação da plataforma do curso (por exemplo, a pasta compactada ou o link do repositório no GitHub).
