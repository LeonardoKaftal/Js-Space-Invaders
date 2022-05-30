const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext('2d');

canvas.width = "600";
canvas.height = "600";

 
const gameController = (()=> {

    const background = new Image();
    background.src = "images/space.png"


    function draw() {
        setInterval(draw,1000 / 60);
        ctx.drawImage(background,0,0)
    }

     
   

    draw();
})();