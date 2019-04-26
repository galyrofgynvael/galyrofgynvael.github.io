class Bootloader extends phaser.Scene {

    constructor() {
        super({key: "Bootloader"});
    }
    preload() {
        this.load.on("complete", () => {
            this.scene.start("Scene_play");
        })

        this.load.image("separator", "./assets/separator.png");
        this.load.image("ball", "./assets/ball.png");
        this.load.image("left_p", "./assets/left_pallete.png");
        this.load.image("right_p", "./assets/right_pallete.png");
    }
}