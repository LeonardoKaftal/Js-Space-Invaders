import EnemyController from "./EnemyController.js";

const enemy = new EnemyController();
const playerBulletArray = [];
const enemyArray = enemy.getEnemyArray();

const playerImage = new Image();
playerImage.src = "images/player.png";

let playerPositionCopy;
class PlayerBullet {
    constructor(playerPositionX, playerPositionY) {
        this.x = playerPositionX + 23;
        this.y = playerPositionY; 
        this.yVelocity = 5;
    }
}

export default class Player {

rightPressed = false;
leftPressed = false;

    constructor() {
        this.x = 300;
        this.y = 450;
        document.addEventListener("keydown",this.keydown);
        document.addEventListener("keyup",this.keyup);
    }

    drawPlayer(ctx) {
        ctx.drawImage(playerImage,this.x,this.y);
    }

    move() {
        if (this.rightPressed) {
            if (this.x < 540) {
                this.x += 5;
            }
        }
        if (this.leftPressed) {
            if (this.x > 10) {
                this.x -= 5;
            }
        }
        playerPositionCopy = this.x;
    }

    getPlayerPosition() {
        return playerPositionCopy;
    }
    
    keydown = e => {
        switch(e.key) {
             case "ArrowRight":
                this.rightPressed = true;
                break;
            case "ArrowLeft":
                this.leftPressed = true;
                break;  
        }
    }
    
    keyup = e => {
        switch(e.key) {
             case "ArrowRight":
                this.rightPressed = false;
                break;
            case "ArrowLeft":
                this.leftPressed = false;
                break;  
        }
    }

    hasPlayerShoot(ctx) {
        let canPlayerShoot = true;
        document.addEventListener("keyup", e => {
            if (e.key === "ArrowUp" && canPlayerShoot) {
                canPlayerShoot = false;
                playerBulletArray.push(new PlayerBullet(this.x,this.y));
                playerBulletArray.forEach(element => {
                    ctx.fillStyle = "white";
                    ctx.fillRect(element.x,element.y,10,15);
                })
            }
        })
        
        setInterval(()=> {
            canPlayerShoot = true;
        },500);
    }

    movePlayerBullet(ctx) {
        playerBulletArray.forEach(element => {
            element.y -= element.yVelocity;
            ctx.fillStyle = "white";
            ctx.fillRect(element.x,element.y,5,15);
        })
    }

    
  
    // 2d collision algorithm 
    playerBulletCollide() {
        let isGameOver = false;

        playerBulletArray.forEach(playerBullet => {
            enemyArray.forEach(enemyToCollide => {
                if (playerBullet.x < enemyToCollide.x + 20 &&
                    playerBullet.x + 5 > enemyToCollide.x && 
                    playerBullet.y < enemyToCollide.y + 20 && 
                    playerBullet.y + 15 > enemyToCollide.y) 
                {
                    isGameOver = enemy.enemyShooted(enemyToCollide);  
                    playerBulletArray.splice(playerBulletArray.indexOf(playerBullet),1);
                }
            })
        })
        return isGameOver;
    }

    playerCollideWithEnemies() {
        let isGameOver = false;
        enemyArray.forEach(enemy => {
            if (enemy.x < this.x + 50 &&
                enemy.x + 20 < this.x &&
                enemy.y < this.y + 50 &&
                enemy.y + 20 > this.y) 
            {
                isGameOver = true;
            }
        })
        return isGameOver;
    }

     // garbage collection
     clearPlayerBullet() {
        playerBulletArray.forEach(element => {
            if (element.y < 0) {
                playerBulletArray.splice(playerBulletArray.indexOf(element),1);
            }
        })
    }
}