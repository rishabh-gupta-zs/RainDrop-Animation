const canvas = document.getElementById("canvas");
const vh = window.innerHeight;
const vw = window.innerWidth;
canvas.width = vw;
canvas.height = vh;
const c = canvas.getContext("2d");
c.font = "20px Monospace";
c.fillStyle = "#fff";
c.fillText("_rishabh@412", 0, vh);

function createDrop() {
  moveDrop(
    Math.floor(Math.random() * 360),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 600),
    0
  );
}
createDrop();
function moveDrop(r, g, b, x, y) {
  c.fillStyle = `hsl(${r},100%,50%)`;
  c.fillRect(x, y, 10, 10);
  c.fill();
  c.fillStyle = "#0001";
  c.fillRect(0, 0, vw, vh);
  c.font = "20px Monospace";
  c.fillStyle = "#ffffff06";
  c.fillText("rishabh.gupta", vw - 160, 20);
  if (y > vh) {
    createDrop();
    splitDrop(r, g, b, x);
  } else {
    requestAnimationFrame(() => moveDrop(r, g, b, x, y + 10));
  }
}

function splitDrop(r, g, b, x) {
  for (i = 0; i < 20; i++)
    arcPathMove(r, g, b, x, vh-10, 0.5-Math.random()*1.5, -Math.random()*3);
}

function arcPathMove(r, g, b, x, y, vx, vy) {
  c.fillStyle = `hsl(${r},100%,50%)`;
  c.fillRect(x, y, 5, 5);
  c.fill();
  x += vx + vx;
  y += vy;
  if (vh < 0) vy += 0.01;
  else {
    vy += 0.06;
  }
  if ((x > 0 && x < 600) || (y > 0 && y < 400))
    requestAnimationFrame(() => arcPathMove(r, g, b, x, y, vx, vy));
}
console.log("ctx.arc(x,y 5,0,2*Math.PI);rishabh");