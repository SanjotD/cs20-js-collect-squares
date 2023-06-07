// GAME LIBRARY for HTML CANVAS

// GLOBAL VARIABLES
let mouseX;
let mouseY;

let keyPressed = {};

// EVENT STUFF

// Update position of mouse, (mouseX, mouseY), when mouse moved
document.addEventListener("mousemove", mousemoveHandlerGameLib);

function mousemoveHandlerGameLib(e) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(e.clientX - cnvRect.left);
  mouseY = Math.round(e.clientY - cnvRect.top);
}

// Update keyPressed object on keydown (e.code: true)
document.addEventListener("keydown", keydownHandlerGameLib);

function keydownHandlerGameLib(e) {
  keyPressed[e.code] = true;
}

// Update keyPressed object on keyup (e.code: false)
document.addEventListener("keyup", keyupHandlerGameLib);

function keyupHandlerGameLib(e) {
  keyPressed[e.code] = false;
}

// USEFUL GAME FUNCTIONS

// Determine the distance between (x1, y1) and (x2, y2)
function dist(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// Determine if point (x, y) is in rect object (x, y, w, h)
function ptInRect(x, y, rect) {
  return (
    x >= rect.x && x <= rect.x + rect.w && y >= rect.y && y <= rect.y + rect.h
  );
}

// Determine if point (x, y) is in circle object (x, y, r)
function ptInCirc(x, y, circle) {
  return dist(x, y, circle.x, circle.y) < circle.r;
}

// Determine if two rect objects (x, y, w, h) collide
function rectCollide(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.h + rect1.y > rect2.y
  );
}

// Determine if two circle objects (x, y, r) collide
function circleCollide(circle1, circle2) {
  return (
    dist(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.r + circle2.r
  );
}

// Constrain value so that it must be between low and high
function constrain(val, low, high) {}
