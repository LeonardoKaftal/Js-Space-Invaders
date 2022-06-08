import EnemyController from "./EnemyController.js";



const enemy = new EnemyController();
const enemyArray = enemy.getEnemyArray();

let isGoingRight = true;
let isGoingLeft = false;
let isGoingDown = false;
let counter = 0;


function down() {
    enemyArray.forEach(element => {
        element.yVelocity = -5;
        element.y -= element.yVelocity;
    })
}

function left() {
    enemyArray.forEach(element => {
        element.xVelocity = -1;
        element.x += element.xVelocity;
    })
}

function right() {
    enemyArray.forEach(element => {
        element.xVelocity = 1;
        element.x += element.xVelocity;
    })
}


export default class MovingAnimation {
    moveEnemy() {
        enemyArray.forEach(element => {
            if (element.x > 570 || element.x < 10) {
                isGoingDown = true;
            }
        })
        if (isGoingDown && counter < 5) {
            counter++;
            down();
        }
        if (counter >= 5) {
            if (isGoingRight) {
                isGoingLeft = true;
                isGoingRight = false;
            }
            else {
                isGoingLeft = false;
                isGoingRight = true;
            }
            counter = 0;
            isGoingDown = false;
        }
        if (isGoingDown === false) {
            if (isGoingLeft) {
                left();
            }
            if (isGoingRight) {
                right();
            }
        } 
    }
}
     


/*for (let i = 0; i < enemyArray.length; i++) {
            let element = enemyArray[i];
            // right
            if (element.x < 300 && isGoingRight === true) {
                right();
                counter = 0;
                break;
            }
            // going down when going right
            if (element.x > 300) {
                counter++;
                if (counter < 5) {
                    down();
                    break;
                }
                if (counter >= 5) {
                    isGoingRight = false;
                }               
            }
            // left
            if (isGoingRight === false && element.x > 10) {
                counter = 0;
                left();
                break;
            }
            // going down when going left
            if (element.x < 10) {
                counter++;
                if (counter < 5) {
                    down();
                    break;
                }
                if (counter >= 5) {
                    isGoingRight = true;
                }
            }
        }*/