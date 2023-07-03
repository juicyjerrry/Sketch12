let video;
let ball;
let speedX = 5;
let speedY = 5;

function setup() {
  createCanvas(640, 480);
  
  video = createCapture(VIDEO);
  video.hide();
  
  ball = {
    x: width / 2,
    y: height / 2,
    diameter: 100
  };
}

function draw() {
  background(0);
  
  // Draw the video feed onto the canvas
  image(video, 0, 0);
  
  // Apply transformations to isolate the ball
  push();
  translate(ball.x, ball.y);
  
  // Draw the ball
  fill(255);
  ellipse(0, 0, ball.diameter);
  
  // Update the ball position
  ball.x += speedX;
  ball.y += speedY;
  
  // Check for collision with the canvas edges
  if (ball.x + ball.diameter / 2 >= width || ball.x - ball.diameter / 2 <= 0) {
    speedX *= -1;
  }
  if (ball.y + ball.diameter / 2 >= height || ball.y - ball.diameter / 2 <= 0) {
    speedY *= -1;
  }
  
  // Restore the transformation state
  pop();
}