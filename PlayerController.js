
class PlayerBullet {
    constructor(playerPositionX, playerPositionY) {
        this.x = playerPositionX + 23;
        this.y = playerPositionY; 
        this.yVelocity = 5;
    }
}

const playerBulletArray = [];
export default class Player {

rightPressed = false;
leftPressed = false;

    constructor() {
        this.x = 300;
        this.y = 440;
        document.addEventListener("keydown",this.keydown);
        document.addEventListener("keyup",this.keyup)
    }

    drawPlayer(ctx) {
        const playerImage = new Image();
        playerImage.src = "images/player.png";  
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
        },1000);
    }

    movePlayerBullet(ctx) {
        playerBulletArray.forEach(element => {
            element.y -= element.yVelocity;
            ctx.fillStyle = "white";
            ctx.fillRect(element.x,element.y,5,15);
        })
    }

    // garbage collection
    clearPlayerBullet() {
        playerBulletArray.forEach(element => {
            if (element.y > 600) {
                playerBulletArray.splice(playerBulletArray.indexOf(element));
            }
        })
    }    
}