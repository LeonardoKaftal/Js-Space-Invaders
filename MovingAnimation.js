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
     


