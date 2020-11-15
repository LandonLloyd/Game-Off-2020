let gameOver = document.getElementById("gameOver");

let player = document.getElementById("player");

let bullet = document.getElementById("bullet");

let eyes = document.getElementById("eyes");

let start = document.getElementById("startGame");

let board = document.getElementById("leaderboard");

let session = document.getElementById("sessionBoard");

let mobileJump = document.getElementById("jump");

let mobileCrouch = document.getElementById("crouch");

let colors = [
    "green",
    "blue",
    "red",
    "orange",
    "pink",
    "cyan",
    "gray",
    "lime",
    "olive",
    "coral",
    "slategray",
    "aqua",
    "aquamarine",
    "chocolate",
    "coral",
    "crimson",
    "DarkMagenta",
    "indigo",
    "HotPink",
    "magenta",
    "maroon",
    "navy",
    "salmon",
    "DodgerBlue",
    "FireBrick",
];

let i = Math.floor(Math.random() * colors.length);

let number = document.getElementById("number");

let score = 0;

let random = Math.floor(Math.random() * 140);

if (
    sessionStorage.getItem("Name") === null ||
    sessionStorage.getItem("Score") === null
) {
    sessionStorage.setItem("Name", "Anonymous");
    sessionStorage.setItem("Score", 0);
}
if (
    localStorage.getItem("Name") === null ||
    localStorage.getItem("Score") === null
) {
    localStorage.setItem("Name", "Anonymous");
    localStorage.setItem("Score", 0);
}

function startGame() {
    document.location.reload();
}

mobileJump.addEventListener("click", function () {
    player.style.height = 50 + "px";
    player.style.top = 150 + "px";
    if (player.classList != "animation") {
        player.classList.add("animation");
    }
    player.classList.add("animation");
    setTimeout(function () {
        player.classList.remove("animation");
    }, 500);
});

mobileCrouch.addEventListener("click", function () {
    player.classList != "animation";
    player.style.height = 25 + "px";
    player.style.top = 175 + "px";
});

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" || event.keyCode === 32) {
        player.style.height = 50 + "px";
        player.style.top = 150 + "px";

        if (player.classList != "animation") {
            player.classList.add("animation");
        }
        player.classList.add("animation");
        setTimeout(function () {
            player.classList.remove("animation");
        }, 500);
    }

    if (event.key === "ArrowDown") {
        player.classList != "animation";
        player.style.height = 25 + "px";
        player.style.top = 175 + "px";
    }
});

let checkDead = setInterval(function () {
    let playerTop = parseInt(
        window.getComputedStyle(player).getPropertyValue("top")
    );

    let bulletLeft = parseInt(
        window.getComputedStyle(bullet).getPropertyValue("left")
    );

    if (bulletLeft < 20 && bulletLeft > 0 && playerTop >= 130) {
        clearInterval(bulletInterval);
        bullet.style.animation = "none";
        bullet.style.display = "none";
        player.style.animation = "none";
        gameOver.innerText =
            "You lose! :( You dodged " + Math.floor(score / 100) + " bullets!";
        if (Math.floor(score / 100) > Number(localStorage.getItem("Score"))) {
            localStorage.setItem(
                "Name",
                prompt(
                    "You have the highscore on this machine with a score of " +
                        Math.floor(score / 100) +
                        ". Please enter your name so you can be named the All Time Best!"
                )
            );
            localStorage.setItem("Score", Math.floor(score / 100));
        }
        if (Math.floor(score / 100) > sessionStorage.getItem("Score")) {
            sessionStorage.setItem(
                "Name",
                prompt(
                    "You have the highscore for THIS SESSION of play with a score of " +
                        Math.floor(score / 100) +
                        ". Please Enter your name to be given the title - Best This Session!"
                )
            );
            sessionStorage.setItem("Score", Math.floor(score / 100));
        }
    } else if (bullet.style.display != "none") {
        score++;
        number.innerText = Math.floor(score / 100);
    }
}, 10);

board.innerText =
    "All Time Best: " +
    localStorage.getItem("Name") +
    " with a score of " +
    localStorage.getItem("Score");

sessionBoard.innerText =
    "Best This Session: " +
    sessionStorage.getItem("Name") +
    " with a score of " +
    sessionStorage.getItem("Score");

function moveBullet() {
    let randomHeight =
        Math.floor(
            Math.random() * Number(player.style.height.replace(/px/g, ""))
        ) *
            -1 +
        140;
    bullet.style.top = randomHeight + "px";
}

moveBullet();
const bulletInterval = setInterval(() => moveBullet(), 1000);

bullet.style.backgroundColor = colors[i];
player.style.backgroundColor = colors[i + 1 || 0];
gameOver.style.color = colors[i];
