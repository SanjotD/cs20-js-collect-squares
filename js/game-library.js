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
function dist(x1, y1, x2, y2) {}

// Determine if point (x, y) is in rect object (x, y, w, h)
function ptInRect(x, y, rect) {}

// Determine if point (x, y) is in circle object (x, y, r)
function ptInCircle(x, y, circle) {}

// Determine if two rect objects (x, y, w, h) collide
function rectCollide(rect1, rect2) {}

// Determine if two circle objects (x, y, r) collide
function circleCollide(circle1, circle2) {}

// Constrain val so that it must be between low and high
function constrain(val, low, high) {}
