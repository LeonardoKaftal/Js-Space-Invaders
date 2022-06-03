import EnemyController from "./EnemyController.js";
import PlayerController from "./PlayerController.js";

const enemy = new EnemyController();
const player = new PlayerController();
const enemyArray = enemy.spawnEnemy();

let isGoingRight = true;
let counter = 0;


export default class MovingAnimation {

   

    moveEnemy() {
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
        
        for (let i = 0; i < enemyArray.length; i++) {
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
        }
    }
}


