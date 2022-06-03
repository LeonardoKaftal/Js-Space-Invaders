import BulletController from "./BulletController.js";

const bulletController = new BulletController();

export default class Player {
    constructor() {
        this.x = 300;
        this.y = 440;
    }
    
    movePlayer() {
        document.body.addEventListener("keydown", e => {
            switch(e.key) {
                case "ArrowRight":
                    if (this.x < 540) {
                        this.x += 10;
                        break;
                    }
                    else {
                        break;
                    }
                case "ArrowLeft":
                    if (this.x > 10) {
                       this.x -= 10;
                        break; 
                    }
                    else {
                        break;
                }      
            }
        })
    }

    hasPlayerShoot(ctx) {
        document.addEventListener("keydown", e => {
            if (e.key === "ArrowUp") {
                bulletController.playerBullet(ctx,this.x,this.y);
            }
        })
    }

    movePlayerBullet() {
        
    }

    drawPlayer(ctx) {
        const playerImage = new Image();
        playerImage.src = "images/player.png";  
        ctx.drawImage(playerImage,this.x,this.y);
    }
}