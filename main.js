let bike;
let bouteilles = [];
let voitures = [];
let voitureBleues = [];
let caps = [];

const ctx = document.querySelector('#game-board canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;


function draw(){

  ctx.clearRect(0,0,W,H);
  

 //
  // Step 1: road drawing
  //

ctx.beginPath();
ctx.moveTo(200,0);
ctx.lineTo(200,1600);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(400,0);
ctx.lineTo(400,1600);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();


ctx.beginPath();
  ctx.lineWidth = 13;
  ctx.strokeStyle = 'white';
  ctx.setLineDash([50, 40]);
  ctx.moveTo(300,0); ctx.lineTo(300,670);
  ctx.stroke();

  //
  // Step 2: bike drawing
  //

  bike.draw();

  if (frames % 150 ===0){
    var bouteille = new Bouteille();
    bouteilles.push(bouteille);
  }

  bouteilles.forEach(function (bouteille) {
    bouteille.y += 6;
    bouteille.draw();
  });

  if (frames % 120 ===0){
    var voiture = new Voiture();
    voitures.push(voiture);
  }
  console.log('voitures', voitures);
  voitures.forEach(function (voiture) {
    voiture.y -= 5;
    voiture.draw();
  });

  if (frames % 200 ===0){
    var voitureBleue = new VoitureBleue();
    voitureBleues.push(voitureBleue);
  }
  voitureBleues.forEach(function (voitureBleue) {
    voitureBleue.y -= 4;
    voitureBleue.draw();
  });


  if (frames % 500 ===0){
    var cap = new Cap();
    caps.push(cap);
  }
  caps.forEach(function (cap) {
    cap.y += 1;
    cap.draw();
  });





   //
  // Iteration #5: collisions
  //

  for (bouteille of bouteilles) {
    if (bouteille.hits(bike)) {
      console.log('crashed');
      gameover = true;
    }
  }


  for (voiture of voitures) {
    if (voiture.hits(bike)) {
      console.log('crashed');
      gameover = true;
    }
  }


  for (voitureBleue of voitureBleues) {
    if (voitureBleue.hits(bike)) {
      console.log('crashed');
      gameover = true;
    }
  }


  for (cap of caps) {
    if (cap.hits(bike)) {
      console.log('win');
      gameover = false;
    }
  }


  //
  // Iteration #6: points
  //

  ctx.font = "50px Arial";
  ctx.textAlign = "right";
  ctx.fillText(`${points} pts`, W-50, 100);
  ctx.fillStyle = "blue";
  points++;

}

  document.onkeydown = function (e) {
    if (!bike) return;
    
    console.log('keydown');
    switch (e.keyCode) {
      case 37:
        // left
        bike.moveLeft();
        break;
      case 39:
        //right
        bike.moveRight();
        break;
    }
  }


let raf;
let frames = 0;
function animLoop() {
  frames++;

  draw();
  
  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
}
if (gameover) {
let $btn = document.querySelector("#start-button");
$btn.innerHTML = "PERDU 😫 ";
$btn.disabled = true;
$btn.style.backgroundColor = "red";
$btn.style.color = "black";

$btn.addEventListener("click", function(){
  location = "https://cnn.com";
});

}
}


function startGame() {
  
  if (raf){
    cancelAnimationFrame(raf);
  }

    gameover = false;
    points = 0;
    bike = new Bike();
    bouteilles = [];
    voitures = [];
    voitureBleues = [];
    caps = [];
    raf = requestAnimationFrame(animLoop);
    
    
  }

  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  

