kaplay({
  width: 480,
  height: 640,
  letterbox: true,
  background: [253, 240, 245], // rosa pastel
});

const GRAVIDADE = 1400;
const PULO = 480;
const RAIO = 28;

scene("jogo", () => {
  let vy = 0;
  let comecou = false;

  const bola = add([
    circle(RAIO),
    pos(width() / 2, height() / 2),
    anchor("center"),
    color(168, 216, 234), // azul pastel
    outline(4, rgb(255, 209, 220)), // rosa pastel
  ]);

  const dica = add([
    text("clique ou barra de espaço\npra pular", { size: 22, align: "center" }),
    pos(width() / 2, 120),
    anchor("center"),
    color(150, 130, 160),
  ]);

  function pular() {
    comecou = true;
    vy = -PULO;
    destroy(dica);
  }

  onClick(pular);
  onKeyPress("space", pular);

  onUpdate(() => {
    if (!comecou) return;

    vy += GRAVIDADE * dt();
    bola.pos.y += vy * dt();

    // teto: não passa
    if (bola.pos.y < RAIO) {
      bola.pos.y = RAIO;
      vy = 0;
    }

    // chão: perdeu
    if (bola.pos.y > height() - RAIO) {
      go("fim");
    }
  });
});

scene("fim", () => {
  add([
    text("Você perdeu!", { size: 40 }),
    pos(width() / 2, height() / 2 - 30),
    anchor("center"),
    color(240, 150, 170),
  ]);
  add([
    text("clique ou espaço pra tentar de novo", { size: 18 }),
    pos(width() / 2, height() / 2 + 20),
    anchor("center"),
    color(150, 130, 160),
  ]);

  onClick(() => go("jogo"));
  onKeyPress("space", () => go("jogo"));
});

go("jogo");
