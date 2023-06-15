// HELPER FUNCTIONS

// DRAW START SCREEN
function startScreen() {
  ctx.fillStyle = "#333";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.font = "48px Calibri";
  ctx.fillStyle = "white";
  ctx.fillText("Press SPACE to Begin!", 100, 300);
  seconds = 0;
}

// GAME LOGIC
function gameLogic() {
  movePlayer();
  moveRects();
  checkGameOver();
}

// MOVE PLAYER
function movePlayer() {
  if (keyPressed["ArrowLeft"]) {
    player.x += -player.speed;
  } else if (keyPressed["ArrowRight"]) {
    player.x += player.speed;
  }

  if (keyPressed["ArrowUp"]) {
    player.y += -player.speed;
  } else if (keyPressed["ArrowDown"]) {
    player.y += player.speed;
  }
}

// Move Objects
function moveRects() {
  for (let i = 0; i < evilRects.length; i++) {
    evilRects[i].x += evilRects[i].dx;
    if (evilRects[i].x + evilRects[i].w > cnv.width) {
      evilRects[i].x = cnv.width - evilRects[i].w;
      evilRects[i].dx = -evilRects[i].dx;
    } else if (evilRects[i].x < 0) {
      evilRects[i].x = 0;
      evilRects[i].dx = -evilRects[i].dx;
    }
  }
  for (let i = 0; i < evilRects.length; i++) {
    evilRects[i].y += evilRects[i].dy;
    if (evilRects[i].y + evilRects[i].h > cnv.height) {
      evilRects[i].y = cnv.height - evilRects[i].h;
      evilRects[i].dy = -evilRects[i].dy;
    } else if (evilRects[i].y < 0) {
      evilRects[i].y = 0;
      evilRects[i].dy = -evilRects[i].dy;
    }
  }
}

// CHECK GAME OVER
function checkGameOver() {
  // Game over if player leaves canvas
  if (
    player.x < 0 ||
    player.x + player.w > cnv.width ||
    player.y < 0 ||
    player.y + player.h > cnv.height
  ) {
    state = "gameover";
  }
  // Game over if player colects all squares
  if (goodRects.length === 0) {
    state = "gameover";
  }
}

// DRAW GAME SCREEN
function gameScreen() {
  // Background
  ctx.fillStyle = "#333";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);

  // Draw Rectangles

  //Obstacle Rects
  for (let i = 0; i < evilRects.length; i++) {
    ctx.fillStyle = evilRects[i].color;
    ctx.fillRect(
      evilRects[i].x,
      evilRects[i].y,
      evilRects[i].w,
      evilRects[i].h
    );
    if (rectCollide(player, evilRects[i])) {
      state = "gameover";
    }
  }
  //Collect Rects
  for (let i = 0; i < goodRects.length; i++) {
    ctx.fillStyle = goodRects[i].color;
    ctx.fillRect(
      goodRects[i].x,
      goodRects[i].y,
      goodRects[i].w,
      goodRects[i].h
    );
    if (rectCollide(player, goodRects[i])) {
      goodRects.splice(i, 1);
      count++;
      totalCollected.innerHTML = count;
    }
  }
}

// GAME OVER SCREEN
function gameOver() {
  // Background
  ctx.fillStyle = "#333";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Game Over Text
  ctx.font = "48px Calibri";
  ctx.fillStyle = "white";
  ctx.fillText("GAME OVER", 100, 300);

  ctx.font = "24px Calibri";
  ctx.fillText("Press SPACE to return to Start Screen.", 100, 350);
}

// RESET VARIABLES
function reset() {
  state = "start";
  player = {
    x: 388,
    y: 288,
    w: 25,
    h: 25,
    color: "blue",
    speed: 5,
  };

  count = 0;
  totalCollected.innerHTML = count;

  seconds = 0;
  timerOutput.innerHTML = seconds;

  evilRects = [];
  for (let n = 1; n <= 5; n++) {
    evilRects.push({
      x: Math.random() * cnv.width,
      y: Math.random() * cnv.height,
      w: 25,
      h: 25,
      dx: 5,
      dy: 5,
      color: "red",
    });
  }
  if (goodRects.length <= 12) {
    goodRects = [];
    for (let n = 1; n <= 12; n++) {
      goodRects.push({
        x: Math.random() * cnv.width,
        y: Math.random() * cnv.height,
        w: 25,
        h: 25,
        dx: 5,
        dy: 5,
        color: "white",
      });
    }
  }
}
