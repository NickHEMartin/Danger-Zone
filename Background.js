
var canvas;
let yoff = 0.0; // 2nd dimension of perlin noise


function setup(){
  console.log("HI")
  canvas = createCanvas(windowWidth,windowHeight + 600);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
}

function draw() {
  noStroke();
  background("#395273");

  fill("#CEE8F2");
  // We are going to draw a polygon out of the wave points
  beginShape();

  let xoff = 0; // Option #1: 2D Noise
  // let xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    let y = map(noise(xoff, yoff), 0, -1, 200, 300);


    // Set the vertex
    if(windowWidth < 600){
      vertex(x, y-25);
    }else{

    vertex(x, y + 100);
    }
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.005;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

}
