import EnemyController from "./EnemyController.js";
import MovingAnimation from "./MovingAnimation.js";
import PlayerController from "./PlayerController.js";

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext('2d');

canvas.width = "600";
canvas.height = "500";

 
const gameController = (()=> {

    const background = new Image();
    background.src = "images/space.png";

    const enemy = new EnemyController(ctx);
    const player = new PlayerController();
    const movingAnimation = new MovingAnimation();
    
    player.hasPlayerShoot(ctx)
    enemy.computerShoot();
    draw();

    function draw() {
        requestAnimationFrame(draw);
        // background
        ctx.drawImage(background,0,0);
        player.drawPlayer(ctx);      
        enemy.drawEnemy(ctx);
        player.movePlayerBullet(ctx);
        enemy.movePlayerBullet(ctx);
        player.clearPlayerBullet();
        enemy.clearEnemyBullet();
        movingAnimation.moveEnemy();
        player.move()
    }
    
})();