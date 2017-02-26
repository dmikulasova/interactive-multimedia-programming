var score,ctx,c,s,t;
var point;
var x=0,y=0,mouseX=0,mouseY=0;
var end=0;
var times;
var handle;

s=document.getElementById("score");
t=document.getElementById("time");
c = document.getElementById("canvas");
ctx = c.getContext("2d");
//ctx.clearRect(0, 0, c.width, c.height);


function start(){
  //console.log("start");
  clearCanvas();
  time=10;
  score=0;
  c.addEventListener("mousedown", mouseDown);
  c.addEventListener("click", mouseClick);
  draw();

  //setTimeout("end()",10000);
  handle=setInterval("changeTime()",1000);

}

function endGame(){
  //end=1;
  clearCanvas();
  c.removeEventListener("mousedown", mouseDown);
  c.removeEventListener("click", mouseClick);
  ctx.font = "30px Arial";
  ctx.fillText("END",10,50);
  //t.innerHTML="Time: 0";
}

function changeTime(){
  time--;
  t.innerHTML="Time: "+time;
  if(time===0){
    endGame();
    clearInterval(handle);
  }
}

function mouseClick() {
    //start();
    if (mouseX > x && mouseY > y && mouseX < (x+50) && mouseY < (y+50)) {

      score++;
      s.innerHTML="Score: "+score;
      clearCanvas();
      draw();
    }
}

function mouseDown(e) {
  point= mouseXY(c, e);
  mouseX=point.x;
  mouseY=point.y;
  mouseIsDown = 1;
}

function draw(){
  //console.log("draw");
  x=getRndInteger(10,450);
  y=getRndInteger(10,450);
  ctx.fillStyle=getRandomColor(); //sets color
  ctx.fillRect(x, y, 50, 50); //draw rectangle
}

function clearCanvas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function mouseXY(can, e) {
    var rect = can.getBoundingClientRect();
    return{
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
        }
  }

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
