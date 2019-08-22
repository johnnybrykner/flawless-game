document.querySelector(".start-screen__button").addEventListener("click", doStuff);
let leafs = [];

window.setInterval(() => {
    let leaf = document.createElement("img");
    leaf.setAttribute("src", "images/leaf.gif");
    leaf.classList.add("leaf");
    leaf.style.top = "0px"
    leaf.style.left = (Math.floor(Math.random() * window.innerWidth - 60) + 1) + "px";
    leafs.push(leaf);
    document.querySelector(".start-screen").insertBefore(leafs[leafs.length - 1], null);
}, Math.random()*5000);

window.setInterval(() => {
    leafs.forEach(leaf => leaf.style.zIndex++);
    leafs.forEach(leaf => leaf.style.top = leaf.style.zIndex + "px");
    leafs = leafs.filter(leaf => leaf.style.zIndex < window.innerHeight - 60);
}, 1000/60);

function doStuff() {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, "", {preload: preload, create: create, update: update, render: render});
    document.querySelector(".start-screen").style.display = "none";	

//var sky;	
var cursors;
var score = 0;
var player;
var scoreText;
var collectItems;
var NUMBER_OF_ITEMS_PLANT=10;
var NUMBER_OF_ITEMS_GOOD_ITEM_A=10;
var NUMBER_OF_ITEMS_GOOD_ITEM_B=10;
var NUMBER_OF_ITEMS_GOOD_ITEM_C=10;
var NUMBER_OF_ITEMS_BAD_ITEM_A=10;
var NUMBER_OF_ITEMS_BAD_ITEM_B=10;
var NUMBER_OF_ITEMS_BAD_ITEM_C=10;
var NUMBER_OF_ITEMS_BAD_ITEM_D=10;

function preload (){
    game.load.image('sky', 'images/sky4.png');
    game.load.image('background','images/bkg-02.png');
    game.load.image('player','images/trump_B.png');
    game.load.image('sun', 'images/sun-01.png');
    game.load.image('green', 'images/plant_A.png');
    game.load.image('goodA', 'images/good_item_A.png');
    game.load.image('green', 'images/good_item_B.png');
    game.load.image('green', 'images/good_item_C.png');
    game.load.image('green', 'images/bad_item_A.png');
    game.load.image('green', 'images/bad_item_B.png');
    game.load.image('green', 'images/bad_item_C.png');
    game.load.image('green', 'images/bad_item_D.png');
}

    function create (){
       
    game.add.tileSprite(0, 0, 10000, 600, 'background');

    sun = game.add.image(60, 60, 'sun');
    sun.scale.setTo(0.5,0.5);

    game.world.setBounds(0, 0, 10000, 600);

    game.physics.startSystem(Phaser.Physics.P2JS);

    player = game.add.sprite(200, 300, 'player'); 
    player.scale.setTo(0.4,0.4);

    cursors = game.input.keyboard.createCursorKeys();

    game.physics.arcade.enable(player);
    player.body.gravity.y = 400;
    player.body.collideWorldBounds = true;

    itemSprites = [];
    for (var i = 0; i < NUMBER_OF_ITEMS_PLANT; i++) {
        itemSprites[i] = game.add.sprite(0,0, 'green');
        itemSprites[i].scale.setTo(0.2,0.2);
        itemSprites[i].position = new Phaser.Point(game.rnd.frac() * 10000, game.rnd.frac() * 600);
    }
    game.physics.enable(itemSprites, Phaser.Physics.ARCADE);

    itemSprites2 = [];
    for (var i = 0; i < NUMBER_OF_ITEMS_GOOD_ITEM_A; i++) {
        itemSprites2[i] = game.add.sprite(0,0, 'goodA');
        itemSprites2[i].scale.setTo(0.2,0.2);
        itemSprites2[i].position = new Phaser.Point(game.rnd.frac() * 10000, game.rnd.frac() * 600);
    }
    game.physics.enable(itemSprites2, Phaser.Physics.ARCADE);
}

// var screenCenter = new Phaser.Point(game.world.centerX, game.world.centerY);

/*function collectItems (player, green){
     
}*/

function update (){
    game.camera.x += 5;

    if (game.camera.x > player.x) {
        console.log("dead");
    }

    if(cursors.right.isDown) {
    player.position.x += 10;
    }
    if(cursors.left.isDown) {
    player.position.x -= 10;
    }
    if(cursors.up.isDown) {
    player.position.y -= 10;
    }
    if(cursors.down.isDown) {
    player.position.y += 10;
    }
}


    function render() {

        //game.debug.cameraInfo(game.camera, 32, 32);
        //game.debug.spriteCoords(player, 32, 500);

    }
}