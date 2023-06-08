// JS GAME SKELETON

// CANVAS SETUP
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// GLOBAL VARIABLES
let state = "start";
let player = {
  x: 388,
  y: 288,
  w: 25,
  h: 25,
  color: "blue",
  speed: 5,
};
// Objects
//Obstacle Rects
let evilRects = [];
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

//Collect Rects
let goodRects = [];
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

// START DRAW FUNCTION ON PAGE LOAD
window.addEventListener("load", draw);

function draw() {
  // GAME STATE
  if (state === "start") {
    startScreen();
  } else if (state === "running") {
    gameLogic();
    gameScreen();
  } else if (state === "gameover") {
    gameOver();
  }

  // REDRAW
  requestAnimationFrame(draw);
}

// EVENT STUFF

// KEYDOWN EVENT
document.addEventListener("keydown", keydownHandler);

function keydownHandler(e) {
  if (state === "start" && e.code === "Space") {
    state = "running";
  } else if (state === "gameover" && e.code === "Space") {
    reset();
  }
}
