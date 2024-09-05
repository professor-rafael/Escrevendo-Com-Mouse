function setup() {
  createCanvas(1550, 800);
  background("green");
}

function draw() {
  stroke("green");
  fill("purple");

  // console.log(mouseIsPressed)

  if (mouseIsPressed) {
    circle(mouseX, mouseY, 50, 50, 25);
  }
}
