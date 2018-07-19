var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth - 25;
canvas.height = 500;
//super-class
var c = canvas.getContext('2d');

var mouse = {
  x: undefined,
  y: undefined
};

var minRadius = 40;
var maxRadius = 4;

var colorArray = [
  '#ffaa33',
  '#99ffaa',
  '#00ff00',
  '#4411aa',
  '#ff1100',
];

window.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;

})

function circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];


  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius,0,Math.PI * 2,false);
    c.fillStyle = this.color;
    c.fill();
  }

  this.update = function() {
    if(this.x + this.radius >= innerWidth || this.x - this.radius < 0){
      this.dx = -this.dx;
    }

    if(this.y + this.radius >= innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    //interactivity
    if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      if (this.radius < 40) {
        this.radius +=1;
      }
    }
    else if (this.radius > 4) {
      this.radius -=1;
    }

    this.draw();
  }
}

var circleArray = [];

for (var i = 0; i < 800; i++) {
  var radius = Math.random() *6 + 1;
  var x = Math.random() * (innerWidth - radius*2) +radius;
  var dx = Math.random() ;
  var y = Math.random() * (innerHeight- radius*2) +radius;
  var dy = Math.random() ;

  circleArray.push(new circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0, innerWidth,innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
animate();
