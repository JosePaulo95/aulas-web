# Questionário — CSS: estilos e posicionamento

**1. Qual é a forma correta de escrever uma borda de 2 pixels, contínua e azul-marinho?**
- a) `border: solid 2px;`
- b) `border: navy 2px;`
- c) `border: 2px solid navy;`
- d) `border: 2px navy;`

**2. Qual é o jeito recomendado de ligar um arquivo CSS a uma página HTML?**
- a) Com `<link rel="stylesheet" href="estilo.css">` dentro do `<head>`
- b) Escrevendo `style="..."` dentro de cada tag
- c) Com `<css src="estilo.css">` no fim do `<body>`
- d) Renomeando o arquivo para ter o mesmo nome do HTML

**3. Qual regra CSS está escrita corretamente?**
- a) `h1 ( color: teal; )`
- b) `h1 { color = teal }`
- c) `h1 { color teal; }`
- d) `h1 { color: teal; }`

**4. Em uma regra CSS, o que acontece se você esquecer o ponto e vírgula entre duas linhas?**
- a) O navegador corrige sozinho e aplica as duas linhas normalmente
- b) O navegador se perde e ignora as linhas afetadas, sem mostrar erro
- c) A página inteira deixa de carregar
- d) Só a última linha da regra deixa de funcionar

**5. Qual propriedade muda a cor da letra de um texto?**
- a) `background-color`
- b) `font-color`
- c) `color`
- d) `text-style`

**6. Na caixa de um elemento, da parte de dentro para a de fora, qual é a ordem correta?**
- a) Conteúdo, padding, border, margin
- b) Conteúdo, margin, border, padding
- c) Padding, conteúdo, margin, border
- d) Border, padding, conteúdo, margin

**7. Qual é a diferença entre `padding` e `margin`?**
- a) O `padding` muda a cor e a `margin` muda o tamanho da letra
- b) Os dois fazem a mesma coisa, mudando só o nome
- c) O `padding` é espaço por fora da caixa e a `margin` é espaço por dentro
- d) O `padding` é espaço por dentro da caixa e a `margin` é espaço por fora

**8. O que significa `padding: 10px 20px;`?**
- a) 10px nos lados e 20px em cima e embaixo
- b) 10px em cima e embaixo, e 20px na esquerda e na direita
- c) 10px só em cima e 20px só embaixo
- d) 10px na esquerda e 20px na direita, sem espaço em cima e embaixo

**9. Um elemento tem `background-color: orange`, `padding: 20px` e `margin: 20px`. Até onde a cor laranja aparece?**
- a) Apenas no conteúdo
- b) Apenas na margin
- c) No conteúdo e no padding, mas não na margin
- d) No conteúdo e na margin, mas não no padding

**10. Você quer posicionar um elemento no canto superior direito do seu elemento pai com `position: absolute`. O que precisa fazer com o pai?**
- a) Dar `position: relative` ao pai, para ele ser a referência
- b) Nada, o `absolute` sempre usa o pai como referência
- c) Dar `position: absolute` ao pai também
- d) Dar `display: block` ao pai

---

## Gabarito (uso do professor — não publicar para os alunos)

| Questão | Resposta | Por quê |
|---|---|---|
| 1 | c | A borda tem 3 partes, nesta ordem: tamanho, tipo e cor. |
| 2 | a | O `<link>` no `<head>` mantém o CSS num arquivo só dele. O `style=""` funciona, mas mistura tudo. |
| 3 | d | Chaves, dois-pontos entre propriedade e valor, ponto e vírgula no fim. |
| 4 | b | Sem o `;` o navegador não entende onde a linha termina e ignora as linhas afetadas, sem aviso de erro. |
| 5 | c | `color` é a letra; `background-color` é o fundo. |
| 6 | a | Conteúdo, padding, border e margin, de dentro para fora. |
| 7 | d | Padding é o respiro por dentro; margin é a distância dos vizinhos. |
| 8 | b | Com dois valores: o primeiro é cima e baixo, o segundo é esquerda e direita. |
| 9 | c | O fundo pinta o conteúdo e o padding. A margin fica transparente. |
| 10 | a | O `absolute` mede a posição a partir do pai mais próximo que tenha `position`. Sem isso, usa a página. |
