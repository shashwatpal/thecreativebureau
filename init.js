var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//super-class
var c = canvas.getContext('2d');
//drawing-rectangle
// c.fillStyle = "rgba(255,0,0,0.5)";
// c.fillRect(100,100,100,100);
//
// c.fillStyle = "rgba(0,0,255,0.5)";
// c.fillRect(400,100,100,100);
//
// c.fillStyle = "rgba(0,255,0,0.5)";
// c.fillRect(300,300,100,100);
//line-arcs-circles
//line

// c.beginPath();
// c.moveTo(35,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle = "#fa34a3";
// c.stroke();

//arcs
// c.beginPath();
// c.arc(300,300,30,0,Math.PI * 2,false);
// c.strokeStyle = "blue";
// c.stroke();
//
// for (var i = 1; i < 400; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x,y,30,0,Math.PI * 2,false);
//   c.strokeStyle = "blue";
//   c.stroke();
// }

var mouse = {
  x: undefined,
  y: undefined
}


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

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius,0,Math.PI * 2,false);
    c.strokeStyle = "aqua";
    c.stroke();
    c.fillStyle = "aqua";
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


function circle2(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius,0,Math.PI * 2,false);
    c.strokeStyle = "red";
    c.stroke();
    c.fillStyle="red";
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


function circle3(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius,0,Math.PI * 2,false);
    c.strokeStyle = "purple";
    c.stroke();
    c.fillStyle="purple";
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

for (var i = 0; i < 35; i++) {
  var radius = Math.random() *10;
  var x = Math.random() * (innerWidth - radius*2) +radius;
  var dx = Math.random() * 2;
  var y = Math.random() * (innerHeight- radius*2) +radius;
  var dy = Math.random() * 2;

  circleArray.push(new circle(x, y, dx, dy, radius));
}


for (var i = 0; i < 35; i++) {
  var radius = Math.random() *10 + 5;
  var x = Math.random() * (innerWidth - radius*2) +radius;
  var dx = Math.random() * 2;
  var y = Math.random() * (innerHeight- radius*2) +radius;
  var dy = Math.random() * 2;

  circleArray.push(new circle2(x, y, dx, dy, radius));
}

for (var i = 0; i < 35; i++) {
  var radius = Math.random() *10 + 2;
  var x = Math.random() * (innerWidth - radius*2) +radius;
  var dx = Math.random() * 2;
  var y = Math.random() * (innerHeight- radius*2) +radius;
  var dy = Math.random() * 2;

  circleArray.push(new circle3(x, y, dx, dy, radius));
}


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0, innerWidth,innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
animate();
