var game = new Phaser.Game(800, 600, Phaser.AUTO, "", {preload: preload, create: create, update: update, render: render});	

//var sky;	
var player;
var cursors;

function preload (){
    game.load.image('sky', 'images/sky4.png');

    game.load.image('background','images/debug-grid-1920x1920.png');
    game.load.image('player','images/phaser-dude.png');

}

function create (){
    /*game.add.image(0, 0, 'sky');
    sky = game.add.tileSprite(0, 0, 800, 600, 'sky');

    cursors = game.input.keyboard.createCursorKeys();*/

    game.add.tileSprite(0, 0, 1920, 1920, 'background');

    game.world.setBounds(0, 0, 1920, 1920);

    game.physics.startSystem(Phaser.Physics.P2JS);

    player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');

    game.physics.p2.enable(player);

    cursors = game.input.keyboard.createCursorKeys();

    game.camera.follow(player);
}

function update (){

    player.body.setZeroVelocity();

    if (cursors.up.isDown)
    {
        player.body.moveUp(300)
    }
    else if (cursors.down.isDown)
    {
        player.body.moveDown(300);
    }

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -300;
    }
    else if (cursors.right.isDown)
    {
        player.body.moveRight(300);
    }

    //  Scroll the background
    //sky.tilePosition.y += 2;

    /*if (cursors.left.isDown)
    {
        game.camera.x -= 8;
    }
    else if (cursors.right.isDown)
    {
        game.camera.x += 8;
    }

    if (cursors.up.isDown)
    {
        game.camera.y -= 8;
    }
    else if (cursors.down.isDown)
    {
        game.camera.y += 8;
    }*/

}


function render() {

    //game.debug.cameraInfo(game.camera, 32, 32);
    //game.debug.spriteCoords(player, 32, 500);

}