var keyW;
var keyS;
var keyDwn;
var keyUp;
var left_p;
var right_p;

class Scene_play extends Phaser.Scene {
    
    constructor() {
        super({key: "Scene_play"});
    }
    create() {
        var center_width = this.sys.game.config.width/2;
        var center_height = this.sys.game.config.height/2;

        // separator
        this.add.image(center_width, center_height, "separator");

        // left pallete
        this.left_p = this.physics.add.image(30, center_height, "left_p").setImmovable(true);

        // right pallete
        this.right_p = this.physics.add.image(this.sys.game.config.width-30, center_height, "right_p").setImmovable(true);

        // ball
        this.physics.world.setBoundsCollision(false, false, true, true);
        this.ball = this.physics.add.image(center_width, center_height, "ball");
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setVelocityX(-600);

        // physics

        this.physics.add.collider(this.ball, this.left_p, this.strikePallete, null, this);
        this.physics.add.collider(this.ball, this.right_p, this.strikePallete, null, this);

        // controls

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        keyDwn = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    }
    update() {
        if(this.ball.x < 0 || this.ball.x > this.sys.game.config.width) {
            this.ball.setPosition(this.sys.game.config.width/2, this.sys.game.config.height/2);
        }

        this.left_p.setVelocityY(0);
        this.right_p.setVelocityY(0);

        if (keyW.isDown) {
            this.left_p.setVelocityY(-100);
            console.log('W');
        }
    
        if (keyS.isDown) {
            this.left_p.setVelocityY(100);
            console.log('S');
        }
    
        if (keyDwn.isDown) {
            this.right_p.setVelocityY(-100);
            console.log('Dwn');
        }
        
        if (keyUp.isDown) {
            this.right_p.setVelocityY(100);
            console.log("Up")
        }
    }

    strikePallete() {
        this.ball.setVelocityY(Phaser.Math.Between(-120, 120));
    }
}