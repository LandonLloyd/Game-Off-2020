//  am here stand for abdelilah majid so that oure vars don't collide
let am_start = performance.now();
let am_bulAnDone = false;
let am_bullet_left = 480;
function bullet_animation_done() {
  if (!am_game_over) {
    let am_end = performance.now();
    // console.log(`time:`, am_end - am_start);
    am_bullet_left = 480;
    bullet.style.cssText = "left: " + am_bullet_left + "px";
    am_bulAnDone = true;
    // console.log("done");
  }
}

// bullet.addEventListener("webkitAnimationEnd", bullet_animation_done, false);

let am_animate_bullet = function () {
  bullet.style.left = am_bullet_left + "px";

  if (am_bullet_left > -20) {
    am_bullet_left -= 1;
  } else {
    bullet_animation_done();
  }
  if (am_checkDead_timer > 15) {
    am_checkDead_timer -= 0.01;
    // console.log(am_checkDead_timer);
  }
  if (am_bullet_left === 0) {
    score += 100;
  }
  if (!am_game_over) {
    setTimeout(am_animate_bullet, am_checkDead_timer / 5);
  }
};
setTimeout(am_animate_bullet, am_checkDead_timer / 5);
