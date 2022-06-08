import PlayerController from "./PlayerController.js";
import EnemyController from "./EnemyController.js";
import MovingAnimation from "./MovingAnimation.js";


const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext('2d');

canvas.width = "600";
canvas.height = "510";

 
const gameController = (()=> {

    const background = new Image();
    background.src = "images/space.png";

    const enemy = new EnemyController(ctx);
    const player = new PlayerController();
    const movingAnimation = new MovingAnimation();
    let isGameOver = false;


    enemy.spawnEnemy();
    player.hasPlayerShoot(ctx)
    enemy.computerShoot();
    draw();

    function draw() {
        requestAnimationFrame(draw);
        ctx.drawImage(background,0,0);
        if (isGameOver === false) {
            ctx.drawImage(background,0,0);
            player.drawPlayer(ctx);      
            enemy.drawEnemy(ctx);
            player.movePlayerBullet(ctx);
            enemy.movePlayerBullet(ctx);
            isGameOver = player.playerCollideWithEnemies();
            if (isGameOver === false) {
                isGameOver = player.playerBulletCollide();
            }
            if (isGameOver === false) {
                isGameOver = enemy.enemyBulletCollide();
            }
            player.clearPlayerBullet();
            enemy.clearEnemyBullet();
            movingAnimation.moveEnemy();
            player.move();
        }
        else {
            ctx.fillStyle = "white";
            ctx.font = "50px Arial";
            ctx.fillText("Game Over", 170,canvas.height / 2)
        }
    }
    
})();