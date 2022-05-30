const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext('2d');
const playerImmage = document.querySelector(".player");

 
const gameController = (()=> {
    let gameVelocity = 10;

    class Player {
        constructor(x,y,) {
            this.x = 0;
            this.y = 0;
        }
    }

    const player = new Player();

    function draw() {
        setInterval(draw,1000 / gameVelocity);
        drawPlayerAndEnemies();
    }

    function drawPlayerAndEnemies() {
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(playerImmage, 0,canvas.height- 5 -15,40,20);
        ctx.fillStyle = "green";
        ctx.fillRect(5,0, 10,10)
    }



    draw()

})();