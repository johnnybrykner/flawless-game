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

var cursors;
var player;
var scoreG = 0;
var scoreB = 0;
var scoreTextGood;
var scoreTextBad;
var style;
var itemSprites;
var greenStuff
var NUMBER_OF_ITEMS_PLANT=10;
var NUMBER_OF_ITEMS_GOOD_ITEM_A=10;
var NUMBER_OF_ITEMS_GOOD_ITEM_B=10;
var NUMBER_OF_ITEMS_GOOD_ITEM_C=10;
var NUMBER_OF_ITEMS_BAD_ITEM_A=15;
var NUMBER_OF_ITEMS_BAD_ITEM_B=15;
var NUMBER_OF_ITEMS_BAD_ITEM_C=15;
var NUMBER_OF_ITEMS_BAD_ITEM_D=15;

function preload (){
    game.load.image('sky', 'images/sky4.png');
    game.load.image('background','images/bkg-02.png');
    game.load.image('player','images/trump_B.png');
    game.load.image('sun', 'images/sun-01.png');
    game.load.image('green', 'images/plant_A.png');
    game.load.image('goodA', 'images/good_item_A.png');
    game.load.image('goodB', 'images/good_item_B.png');
    game.load.image('goodC', 'images/good_item_C.png');
    game.load.image('badA', 'images/bad_item_A.png');
    game.load.image('badB', 'images/bad_item_B.png');
    game.load.image('badC', 'images/bad_item_C.png');
    game.load.image('badD', 'images/bad_item_D.png');
}

function create (){
       
    game.add.tileSprite(0, 0, 10000, 600, 'background');

    sun = game.add.image(1000, 60, 'sun');
    sun.scale.setTo(0.5,0.5);

    game.world.setBounds(0, 0, 10000, 600);

    game.physics.startSystem(Phaser.Physics.P2JS);

    cursors = game.input.keyboard.createCursorKeys();

    var itemSprites = [];
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

    itemSprites3 = [];
    for (var i = 0; i < NUMBER_OF_ITEMS_GOOD_ITEM_B; i++) {
        itemSprites3[i] = game.add.sprite(0,0, 'goodB');
        itemSprites3[i].scale.setTo(0.2,0.2);
        itemSprites3[i].position = new Phaser.Point(game.rnd.frac() * 10000, game.rnd.frac() * 600);
    }
    game.physics.enable(itemSprites3, Phaser.Physics.ARCADE);

    itemSprites4 = [];
    for (var i = 0; i < NUMBER_OF_ITEMS_GOOD_ITEM_C; i++) {
        itemSprites4[i] = game.add.sprite(0,0, 'goodC');
        itemSprites4[i].scale.setTo(0.2,0.2);
        itemSprites4[i].position = new Phaser.Point(game.rnd.frac() * 10000, game.rnd.frac() * 600);
    }
    game.physics.enable(itemSprites4, Phaser.Physics.ARCADE);

    itemSprites5 = [];
    for (var i = 0; i < NUMBER_OF_ITEMS_BAD_ITEM_A; i++) {
        itemSprites5[i] = game.add.sprite(0,0, 'badA');
        itemSprites5[i].scale.setTo(0.2,0.2);
        itemSprites5[i].position = new Phaser.Point(game.rnd.frac() * 10000, game.rnd.frac() * 600);
    }
    game.physics.enable(itemSprites2, Phaser.Physics.ARCADE);
    
    itemSprites6 = [];
    for (var i = 0; i < NUMBER_OF_ITEMS_BAD_ITEM_B; i++) {
        itemSprites6[i] = game.add.sprite(0,0, 'badB');
        itemSprites6[i].scale.setTo(0.2,0.2);
        itemSprites6[i].position = new Phaser.Point(game.rnd.frac() * 10000, game.rnd.frac() * 600);
    }
    game.physics.enable(itemSprites6, Phaser.Physics.ARCADE);

    itemSprites7 = [];
    for (var i = 0; i < NUMBER_OF_ITEMS_BAD_ITEM_C; i++) {
        itemSprites7[i] = game.add.sprite(0,0, 'badC');
        itemSprites7[i].scale.setTo(0.2,0.2);
        itemSprites7[i].position = new Phaser.Point(game.rnd.frac() * 10000, game.rnd.frac() * 600);
    }
    game.physics.enable(itemSprites7, Phaser.Physics.ARCADE);

    itemSprites8 = [];
    for (var i = 0; i < NUMBER_OF_ITEMS_BAD_ITEM_D; i++) {
        itemSprites8[i] = game.add.sprite(0,0, 'badD');
        itemSprites8[i].scale.setTo(0.2,0.2);
        itemSprites8[i].position = new Phaser.Point(game.rnd.frac() * 10000, game.rnd.frac() * 600);
    }
    game.physics.enable(itemSprites8, Phaser.Physics.ARCADE);

    var style = { font: "150px", fill: "#000" }

    scoreTextGood = game.add.text(500, 20, "Good stuff: " + scoreG, style);
    scoreTextGood = game.add.text(1000, 20, "Good stuff: " + scoreG, style);
    scoreTextGood = game.add.text(2000, 20, "Good stuff: " + scoreG, style);
    scoreTextGood = game.add.text(3000, 20, "Good stuff: " + scoreG, style);
    scoreTextGood = game.add.text(4000, 20, "Good stuff: " + scoreG, style);
    scoreTextGood = game.add.text(5000, 20, "Good stuff: " + scoreG, style);
    scoreTextGood = game.add.text(6000, 20, "Good stuff: " + scoreG, style);
    scoreTextGood = game.add.text(7000, 20, "Good stuff: " + scoreG, style);
    scoreTextGood = game.add.text(8000, 20, "Good stuff: " + scoreG, style);
    scoreTextGood = game.add.text(9000, 20, "Good stuff: " + scoreG, style);
    scoreTextGood = game.add.text(10000, 20, "Good stuff: " + scoreG, style);

    scoreTextBad = game.add.text(500, 40, "Bad stuff: " + scoreB, style);
    scoreTextBad = game.add.text(1000, 40, "Bad stuff: " + scoreB, style);
    scoreTextBad = game.add.text(2000, 40, "Bad stuff: " + scoreB, style);
    scoreTextBad = game.add.text(3000, 40, "Bad stuff: " + scoreB, style);
    scoreTextBad = game.add.text(4000, 40, "Bad stuff: " + scoreB, style);
    scoreTextBad = game.add.text(5000, 40, "Bad stuff: " + scoreB, style);
    scoreTextBad = game.add.text(6000, 40, "Bad stuff: " + scoreB, style);
    scoreTextBad = game.add.text(7000, 40, "Bad stuff: " + scoreB, style);
    scoreTextBad = game.add.text(8000, 40, "Bad stuff: " + scoreB, style);
    scoreTextBad = game.add.text(9000, 40, "Bad stuff: " + scoreB, style);
    scoreTextBad = game.add.text(10000, 40, "Bad stuff: " + scoreB, style);

    
    //var greenStuff = [];
    //for (var i=0;i<10;i++){
        //greenStuff[i] = new greenStuff(random(10,390), random(10,390), random(0,4), random(0,4));
    //}

    var checkForCollisions = function(player, greenStuff) {
        for (var i=0; i=greenStuff.length; i++) {
            var distance = dist(player.x, player.y, greenStuff[i].x, greenStuff[i].y);
            if (distance <= (player.size / 2 + green[i].size / 2)) {
                // collision has occured. remove stuff
                greenStuff.splice(i,1);
            }
        }
    }
    var draw = function() {
        player.update();
        for (var i=0; i<greenStuff.length;i++) {
            greenStuff[i].update();
        }
        checkForCollisions(player, greenStuff);
    }

    player = game.add.sprite(200, 300, 'player'); 
    player.scale.setTo(0.4,0.4);
    game.physics.arcade.enable(player);
    player.body.gravity.y = 400;
    player.body.collideWorldBounds = true;
}

function update (){
    game.camera.x += 2;

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

    game.physics.arcade.overlap(player, itemSprites);
}

/*function onBulletHit() {
    if(green.body.touching.up==true) {
        green.kill();
    }
    else {
        player.kill();
    }
}*/



function render() {

    //game.debug.cameraInfo(game.camera, 32, 32);
    //game.debug.spriteCoords(player, 32, 500);

}
}