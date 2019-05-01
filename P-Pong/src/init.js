var config = {
    width: 1000,
    height: 400,
    parent: "contenedor",
    physics: {
        default: "arcade",
    },

    scene: [
        Bootloader,
        Scene_play,
    ]
}

new Phaser.Game(config);