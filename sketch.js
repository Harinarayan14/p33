const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, enemy1,enemy2;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var score = 0;
var tries = 0;

function preload() {
   // backgroundImg = loadImage("pictures/bg.png");
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,390,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(600,320,70,70);
    box2 = new Box(820,320,70,70);
    enemy1 = new Enemy(710, 350);

    box3 = new Box(600,240,70,70);
    box4 = new Box(820,240,70,70);
    enemy2 = new Enemy(910, 350);
    box5 = new Box(1000,240,70,70);
    box6 = new Box(1000,350,70,70);
    box7 = new Box(1000,130,70,70);
    box8 = new Box(820,130,70,70);
    box9 = new Box(600,130,70,70);


    player = new Player(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Slingshot(player.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    ground.display();
    enemy1.display();

    box3.display();
    box3.score();
    box4.display();
    box4.score();
    enemy2.display();

    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    player.display();
    platform.display();
    slingshot.display();    
    enemy1.score(); 
    enemy2.score();
    fill(255);
    
textSize(30);
    text("Score:"+ Math.round(score*50/tries),1000,100);
    if(Math.round(score*50/tries)>3000){
        textSize(30);
        text("You Win!!!",400,300); 
    }
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
    tries++;
}

function keyPressed(){
    if(keyCode === 32 && player.body.speed<2){
        slingshot.attach(player.body);
        player.trajectory=[];
        gameState = "onSling";
        Matter.Body.setPosition(player.body, {x: 200 , y:50 });
    }
}
async function getTime (){
var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJson = await response.json();
datetime1 = responseJson.datetime;
 hr = datetime1.slice(11,13);
if (hr >=6 && hr<= 18 ){
    backgroundImg = loadImage("pictures/background.png");
}
else {
   backgroundImg = loadImage("pictures/background2.jpg");
}
}
