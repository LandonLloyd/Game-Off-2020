let player = document.getElementById('player');
let bullet = document.getElementById('bullet');
let score = document.getElementById('number');

document.addEventListener('click', function jump(){
  if(player.classList != "animation"){
    player.classList.add("animation");
  }
  player.classList.add("animation");
  setTimeout(function(){
    player.classList.remove("animation");
  }, 500);
});

let checkDead = setInterval(function(){
   let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
   let bulletLeft = parseInt(window.getComputedStyle(bullet).getPropertyValue("left"));
   if(bulletLeft < 20 && bulletLeft > 0 && playerTop >= 130){
     bullet.style.animation = "none";
     bullet.style.display = "none";
     alert('you lose');
   }
}, 10);

