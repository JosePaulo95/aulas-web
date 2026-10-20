# Introdução a Deploy: roteiro de fala

Gerado das anotações do deck [deploy-01-intro.html](../deploy-01-intro.html) (tecla **N**). Nada disto aparece pro aluno. Setas **↓ / ↑** passam os estados dentro do slide; **→ / ←** mudam de slide. Tempo total: ~14 min.

Estrutura inspirada no vídeo "What is Deployment?": um desenho só, que vai se montando. Notebook à esquerda, servidor no topo e quem acessa à direita, deixando o canto inferior direito livre pra câmera.

**Antes de gravar**
- Conferir o preço atual do `.com.br` no registro.br.
- Tirar print de 2 páginas de planos de hospedagem (preço promocional e preço de renovação).
- Escolher 3 ou 4 sites pra mostrar o cabeçalho `server` (ex.: um site do governo, um blog WordPress, um `.github.io`, um `.vercel.app`) e testar antes.

---

## Slide 1 — Introdução a deploy (0:00 → 0:40)

**FALA**
- Vocês já sabem fazer site. Agora falta o último passo: colocar ele no ar.
- Hoje é o mapa. Nas próximas aulas, a gente publica de verdade.

---

## Slide 2 — O que é deploy? (0:40 → 3:00)

**COM ↓**
- Notebook sozinho → ↓ arquivo + servidor + seta → ↓ "hospedagem" + quem acessa → ↓ a palavra **deploy**.

**FALA**
- Esse é o **ambiente local**: o computador de vocês. Foi aqui que vocês fizeram tudo até agora. Só vocês veem.
- *(↓)* Pra outra pessoa ver, o projeto precisa ir pra outro computador: um **servidor**, que fica ligado o tempo todo.
- *(↓)* Esse servidor é a **hospedagem**. Agora qualquer um, de qualquer tela, acessa. (Lembrar da aula de responsividade.)
- *(↓)* Essa seta, levar o projeto do seu PC pro servidor, tem nome: **deploy**.

---

## Slide 3 — Deploy tem 3 peças (3:00 → 4:00)

**COM ↓**
- Mesmo desenho. Cada ↓ acende uma peça: o arquivo (versão) → o servidor (hospedagem) → aparece o nome em cima do servidor (domínio).

**FALA**
- Todo deploy, de qualquer site do mundo, tem essas 3 peças.
- Cada uma é uma escolha que vocês vão fazer. Vamos ver uma por uma.

---

## Slide 4 — Peça 1: versão (4:00 → 6:00)

**FALA**
- **Na mão**: você pega a pasta e manda. Funciona, mas se mandar a pasta errada, foi a errada pro ar.
- **Pelo Git**, que vocês já conhecem: o que estiver na `main` é o que está no ar. Deu `push`, atualizou.
- Palavra nova: **produção**. Quando alguém fala "subiu pra produção", quer dizer: está no ar, o público já vê.
- Gancho: na próxima aula a gente faz dos dois jeitos.

---

## Slide 5 — Peça 2: hospedagem (6:00 → 9:00)

**FALA**
- Não existe um servidor só. O **tipo do projeto** decide o tipo de hospedagem.
- **Estático** (HTML, CSS, JS): é tudo o que vocês fizeram até agora. O servidor só entrega os arquivos, por isso tem de graça.
- **Apache** (PHP, WordPress): se um dia alguém pedir um WordPress, ou vocês virem um "painel de hospedagem", é esse aqui. É pago por mês.
- **Node**: quando o site precisa rodar código no servidor, tipo login. Isso é mais pra frente.
- E o PC de vocês? Até dá, mas teria que ficar ligado 24h e exposto na internet. Não vale.
- Vocês não precisam disso agora. Só saibam que existe, pra não ficarem perdidos.

**ILUSTRAR NO NAVEGADOR**
- **F12** → **Network** → recarregar → clicar no primeiro item → **Headers** → procurar `server`.
- Passar pelos sites escolhidos: aparecem `Apache`, `nginx`, `GitHub.com`, `Vercel`.
- "Todo site que vocês abrem está em algum servidor desses."

---

## Slide 6 — Peça 3: domínio (9:00 → 11:00)

**FALA**
- Os três primeiros (`.github.io`, `.netlify.app`, `.vercel.app`) vêm de graça junto com a hospedagem. Funcionam igualzinho.
- O último (`.com.br`) é um domínio só seu. Fica mais profissional, mas é pago, e todo ano.
- Parou de pagar? Perde o nome. Alguém pode registrar depois.
- Domínio ≠ hospedagem: um é o endereço, o outro é a casa. Cada um se paga separado.

**ILUSTRAR NO NAVEGADOR**
- Abrir `registro.br` e pesquisar um nome (o da escola, o de um aluno, um bem engraçado). Mostrar "disponível" e o preço. **Não comprar.**
- Pesquisar um famoso (ex.: `google.com.br`): aparece como ocupado.

---

## Slide 7 — Taxas e pegadinhas (11:00 → 13:00)

**FALA**
- Pra tudo que vocês fizeram no curso: zero reais.
- Quando for pagar, leiam o preço da **renovação**, não o do primeiro mês.
- "Domínio grátis" costuma valer só no 1º ano. E a renovação é automática no cartão.
- O cadeado do navegador nos serviços grátis vem automático. Se alguém quiser cobrar por ele, desconfiem.
- Mostrar os prints de duas empresas lado a lado. **Não recomendar nenhuma.**

---

## Slide 8 — Recap (13:00 → 14:00)

**FALA**
- Rapidinho:
  - **Deploy**: levar o projeto do seu PC pro servidor.
  - **Versão**: na mão ou Git. Produção = `main`.
  - **Hospedagem**: estático (grátis), Apache, Node.
  - **Domínio**: grátis junto ou próprio, pago por ano.
- **Mini-desafio**: escolham qual projeto de vocês vai pro ar na próxima aula. Bônus: no registro.br, o nome que vocês querem está livre?
- Gancho: na próxima aula, o site de vocês vai pro ar. De três jeitos diferentes.
