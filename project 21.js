var canvas;
var music;
var green 
var blue
var red
var yellow
var box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
     green = createSprite(450,550,100,20)
     green.shapeColor='green'

     blue = createSprite(350,550,100,20)
     blue.shapeColor='blue'

     red = createSprite(250,550,100,20)
     red.shapeColor='red'

     yellow = createSprite(150,550,100,20)
     yellow.shapeColor='yellow'

     box = createSprite(random(20,750),20,20)
     box.velocityX=1
     box.velocityY=1
     box.shapeColor='white'


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
       var edge = createEdgeSprites()

     drawSprites()
    //add condition to check if box touching surface and make it box
}
