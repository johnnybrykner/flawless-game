var game = new Phaser.Game(800, 600, Phaser.CANVAS, "", {preload: preload, create: create, update: update, render: render});	

//var sky;	
var player;
var cursors;
var score = 0,
scoreText;
var collectItems;
var NUMBER_OF_ITEMS=10;

function preload (){
    game.load.image('sky', 'images/sky4.png');
    game.load.image('background','images/bkg-02.png');
    game.load.image('player','images/trump_B.png');
    game.load.image('sun', 'images/sun-01.png');
    game.load.image('green', 'images/plant_A.png');

}

function create (){
    /*game.add.image(0, 0, 'sky');
    sky = game.add.tileSprite(0, 0, 800, 600, 'sky');

    cursors = game.input.keyboard.createCursorKeys();*/

    game.add.tileSprite(0, 0, 10000, 600, 'background');

    sun = game.add.image(60, 60, 'sun');
    sun.scale.setTo(0.5,0.5);

    game.world.setBounds(0, 0, 10000, 600);

    game.physics.startSystem(Phaser.Physics.P2JS);

    player = game.add.sprite(200, 300, 'player'); 
    player.scale.setTo(0.4,0.4);

    game.physics.arcade.enable(player);

    cursors = game.input.keyboard.createCursorKeys();

    game.camera.follow(player);

    /*scoreText = this.add.image(16, 16, 'green');
    scoreText.scale.setTo(0.2, 0.2);*/

    game.physics.arcade.enable(player);
    player.body.gravity.y = 400;
    player.body.collideWorldBounds = true;

    itemSprites = [];
    for (var i = 0; i < NUMBER_OF_ITEMS; i++) {
        itemSprites[i] = game.add.sprite(0,0, 'green');
        itemSprites[i].scale.setTo(0.2,0.2);
        itemSprites[i].position = new Phaser.Point(game.rnd.frac() * 800, game.rnd.frac() * 600);
    }
    game.physics.enable(itemSprites, Phaser.Physics.ARCADE);
}

var screenCenter = new Phaser.Point(game.world.centerX, game.world.centerY);

/*function collectItems (player, green){
     
}*/

function update (){

    /*player.body.setZeroVelocity();

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
    }*/

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