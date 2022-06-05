
const enemyImageOne = new Image();
const enemyImageTwo = new Image();
const enemyImageThree = new Image();

enemyImageOne.src = "images/enemy.png";
enemyImageTwo.src = "images/enemy2.png";
enemyImageThree.src="images/enemy3.png";


const enemyMap = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];

const columnRowArray = [
    30,60,90,120,150,180,210,240,270,300
];

const enemyArray = [];
const enemyBUlletArray = [];




class EnemyBullet {
    constructor(enemyPositionX, enemyPositionY) {
        this.x = enemyPositionX + 8;
        this.y = enemyPositionY; 
        this.yVelocity = 3;
    }
}


class Enemy {
    constructor(id,x,y) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.xVelocity = 0;
        this.yVelocity = 0; 
    }
}

export default class EnemyController {

    spawnEnemy() {
        for (let i = 0; i < 5;) {
            for (let j = 0; j <  10; j++) {
                switch(enemyMap[i][j]) {
                    case 1:
                        enemyArray.push(new Enemy(enemyMap[i][j], columnRowArray[j], columnRowArray[i]));
                        break;
                    case 2: 
                        enemyArray.push(new Enemy(enemyMap[i][j], columnRowArray[j], columnRowArray[i]));
                        break;
                    case 3: 
                        enemyArray.push(new Enemy(enemyMap[i][j], columnRowArray[j], columnRowArray[i]));
                        break;
                }
                if (j === 9) {
                    i++;
                }
            }
        }
        return enemyArray
    }


    drawEnemy(ctx) {
        enemyArray.forEach(element => {
            if (element.id === 1) {
                ctx.drawImage(enemyImageOne,element.x,element.y,20,20);
            }
            else if (element.id === 2) {
                ctx.drawImage(enemyImageTwo,element.x,element.y,20,20);
            }
            else {
                ctx.drawImage(enemyImageThree,element.x,element.y,20,20);        
            }
        }) 
    }

    computerShoot() {
        setInterval(()=> {
            let randomIndex = Math.floor(Math.random() * 50);
            enemyBUlletArray.push(new EnemyBullet(enemyArray[randomIndex].x,enemyArray[randomIndex].y));
        },500); 
    }

    movePlayerBullet(ctx) {
        enemyBUlletArray.forEach(element => {
            ctx.fillStyle = "red";
            ctx.fillRect(element.x,element.y,5,15);
            element.y += element.yVelocity;
        })
    }

    // garbage collection
    clearEnemyBullet() {
        enemyBUlletArray.forEach(element => {
            if (element.y > 600) {
                enemyBUlletArray.splice(enemyBUlletArray.indexOf(element),1);
            }
        })
    }
}

