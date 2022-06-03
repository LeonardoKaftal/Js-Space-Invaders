const playerBullet = [];

export default class Bullet {
    constructor() {
        this.x;
        this.y;
    }

    playerBullet(playerPositionX,playerPositionY) {
        playerBullet.push(new Bullet(playerPositionX + 600 / 2, playerPositionY))
    }
}