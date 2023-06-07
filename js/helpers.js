// HELPER FUNCTIONS

// DRAW START SCREEN
function startScreen() {
  ctx.fillStyle = "#333";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.font = "48px Calibri";
  ctx.fillStyle = "white";
  ctx.fillText("Press SPACE to Begin!", 100, 300);
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

function moveRects() {
  for (let i = 0; i < rects.length; i++) {
    rects[i].x += rects[i].dx;
    if (rects[i].x + rects[i].w > cnv.width) {
      rects[i].x = cnv.width - rects[i].w;
      rects[i].dx = -rects[i].dx;
    } else if (rects[i].x < 0) {
      rects[i].x = 0;
      rects[i].dx = -rects[i].dx;
    }
  }
  for (let i = 0; i < rects.length; i++) {
    rects[i].y += rects[i].dy;
    if (rects[i].y + rects[i].h > cnv.height) {
      rects[i].y = cnv.height - rects[i].h;
      rects[i].dy = -rects[i].dy;
    } else if (rects[i].y < 0) {
      rects[i].y = 0;
      rects[i].dy = -rects[i].dy;
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
  for (let i = 0; i < rects.length; i++) {
    ctx.fillStyle = rects[i].color;
    ctx.fillRect(rects[i].x, rects[i].y, rects[i].w, rects[i].h);
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
}
