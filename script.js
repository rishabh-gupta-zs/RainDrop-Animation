const canvas = document.getElementById("canvas");
let vh = window.innerHeight;
let vw = window.innerWidth;
canvas.width = vw;
canvas.height = vh;
const c = canvas.getContext("2d");
let filledScreen=0
c.font = "20px Monospace";
c.fillStyle = "#fff";
c.fillText("_rishabh@412", 0, vh);
canvas.width = vw;
canvas.height = vh;
let isFullScreen=false
let run=true
let layerThickness=8
function createDrop() {
  moveDrop(
    Math.floor(Math.random() * 360),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * vw),
    0
  );
}
createDrop();

function moveDrop(r, g, b, x, y) {
  c.fillStyle = `hsl(${r},100%,50%)`;
  c.fillRect(x, y, 10, 10);
  c.fill();
  c.fillStyle = "#0001";
  c.fillRect(0, 0, vw, vh-filledScreen);
  c.font = "20px Monospace";
  c.fillStyle = "#ffffff06";
  c.fillText("rishabh.gupta", vw - 160, 20);
  if (y > vh-filledScreen) {
    createDrop();
    splitDrop(r, g, b, x);
    filledScreen+=layerThickness
    colorFilledScreen()
  } else {
    if(run)
    requestAnimationFrame(() => moveDrop(r, g, b, x, y + 10));
  }
}

function splitDrop(r, g, b, x) {
  for (i = 0; i < 20; i++){
    moveSplittedDrop(r, g, b, x, vh-filledScreen - 10, 0.5 - Math.random() * 1.5, -Math.random() * 3);
  }
}

function moveSplittedDrop(r, g, b, x, y, vx, vy) {
  c.fillStyle = `hsl(${r},100%,50%)`;``
  c.fillRect(x, y, 5, 5);
  c.fill();
  x += vx + vx;
  y += vy;

  if ((x < 0 || x >= vw || y < 0 || y >= vh-filledScreen-10)&& vy>0) return
  if (vh-filledScreen < 0) vy += 0.01;
  else  vy += 0.06;

  if(filledScreen>vh-50)  filledScreen=0

  
  if(run)
  requestAnimationFrame(() => moveSplittedDrop(r, g, b, x, y, vx, vy));
}
function colorFilledScreen(){
  c.fillStyle = "rgb(0,181,181)";
  c.fillRect(0, vh-filledScreen, vw, filledScreen);
}

function fullScreen() {
  isFullScreen=true
  document.documentElement.requestFullscreen()
}
function exitFullScreen() {
  if(isFullScreen)
  document.exitFullscreen();
}

window.addEventListener("resize",()=>{
  if(run){
    vh = window.innerHeight;
    vw = window.innerWidth;
    canvas.width = vw;
    canvas.height = vh;
    colorFilledScreen()
  }
})

// console.log("ctx.arc(x,y 5,0,2*Math.PI);rishabh");
