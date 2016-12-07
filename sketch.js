// resize the canvas, but keep the 9:16 aspect ratio
var canvasMultiplier = 60;

//switch for buttons
var buttonOn = false;
var buttonOn2 = false;
var buttonOn3 = false;

//make an enemy every so many frames
var enemyRate = 100;
var enemyAngle = 0;
var enemyDrunkness = 0;

//backgrounds 

var bg_title, bg_win, bg_lose, bg_background, bg_background2, bg_background3;

var buttonHit;


//declare music into the game 
var Level1_music, level2_music,level3_music,level4_music,level5_music;
var title_music;
var win_music;
var lose_music;

var score = 0;
var gameState = 'startUp';

var countdown1Downtimer = 0;
var countdown2Downtimer = 0;
var countdown3Downtimer = 0;
var countdown4Downtimer = 0;






var noteGrid1 =  [
  [0,1,0],
  [0,0,1],
  [1,0,0],
  [0,0,0],
  [0,1,1],
  [1,1,1]
  ];
  
  var noteGrid2 =  [
  [1,1,1],
  [1,1,1],
  [1,1,1],
  [0,0,0],
  [0,1,1],
  [1,1,1]
  ];
  
  var noteGrid3 =  [
  [0,1,0],
  [0,1,0],
  [0,1,0],
  [0,1,0],
  [0,1,],
  [1,1,1]
  ];
  
  var noteGrid4 =  [
  [0,1,0],
  [0,0,1],
  [1,0,0],
  [1,1,1],
  [1,1,1],
  [1,1,1]
  ];
  
  var noteGrid5 =  [
  [1,1,0],
  [1,1,1],
  [1,1,1],
  [1,1,1],
  [1,1,1],
  [1,1,1]
  ];
  
  var gridPosition = 0;


//declare the buttons
var button1;
var button2;
var button3;
//declare sprite GROUP
var bullets;
var enemies; 

//declare enemy sprite images
var enemyOneImg,enemyTwoImg,enemyThreeImg;

function preload (){
  
  //use this function to preload any media ie: picture, animations, sound
  //shootSound =loadSound("assets/woosh.mp3");
  title_screen =loadSound("assets/Title_Screen.mp3");
  level1_music = loadSound("assets/Stage_1.mp3")
  level2_music = loadSound("assets/Stage_2.mp3")
  level3_music = loadSound("assets/Stage_3.mp3")
  level4_music = loadSound("assets/Stage_4.mp3")
  level5_music = loadSound("assets/Stage_5.mp3")
  
  Countdown_Song = loadSound("assets/Countdown_Song.mp3")
  
  win_song = loadSound("assets/Win_Song.mp3")
  lose_song = loadSound("assets/Gameover_Song.mp3")
  //enemy_munch = loadSound("assets/Crunch.mp3")
  
  
  enemyOneImg = loadImage("assets/Enemy_01.png")
  //enemyTwoImg = loadImage("assets/Enemy_02.png")
  //enemyThreeImg = loadImage("assets/Enemy_03.png")
  
  //heroDefault = loadAnimation()
  //heroLeft = loadAnimation ()
  
  
  //bg_title = loadImage ("assets/bg_title.png");
  //bg_win = loadImage ("assets/bg_win.png");
  //bg_lose = loadImage ("assets/bg_lose.png");
  //bg_background = loadImage ("assets/bg_background.png");
  //bg_background2 = loadImage ("assets/bg_background2.png");
  //bg_background3 = loadImage ("assets/bg_background3.png");
  
  //make sure animation doesnt loop
  //heroLeft.frameDelay =4
  //heroRight.looping =false;
  //heroLeft.frameDelay =4;
  
  
}

function setup() {
  
  var tempWidth = canvasMultiplier * 9;
  var tempHeight = canvasMultiplier * 16;
  createCanvas(tempWidth,tempHeight);
  
  //initialize bullets as a group of sprites
  bullets = new Group();
  enemies = new Group();
  
  //load the button image 
  var button1Img = loadImage ("assets/Enemy_03.png");
  var button2Img = loadImage ("assets/Hero.png");
  var button3Img = loadImage ("assets/Enemy_02.png");
  
  //define the hero sprite in the middle towards the bottom 
  button1 = createSprite(width*.2, height*.8, 10, 10);
  button2 = createSprite(width/2,height*.8, 10, 10);
  button3 = createSprite(width*.8,height*.8, 10, 10);
  
  // give the hero sprite some friction
  //decrease number to increase friction, increase number to decrease friction
  //button1.friction = 0.85;
  button1.addImage(button1Img);
  button2.addImage(button2Img);
  button3.addImage(button3Img);
  
  //hero.shapeColor = 'white';
  
      title_screen.amp(0.6);
      title_screen.loop();

}

function draw() {
  background(255);
  
   switch(gameState){
    case 'startUp':
      //draw image to background
      //background (bg_title);
      text('Press SPACE to START',width/3,height/2);
      break;
      
    case 'lose':
      //background (bg_lose)
      text(' Game Over!! ',width/2.1,height/1.8);
      break;
      
    case 'win':
      //background (bg_win)
      text(' Congratulations! You made it home safely. ',width/3,height/6);
      break;
      
    case 'levelOne':
    levelOne();
    break;
    
    case 'levelTwo':
    levelTwo();
    break;
      
    case 'levelThree':
    levelThree();
    break;
      
    case 'levelFour':
    levelFour();
    break;
    
    case 'levelFive':
    levelFive();
    break;
    
    
    
    case 'countDown1':
    background (12,23,210);
    textSize (32);
    //only runs the first time through the countdown
    if (countdown1Downtimer=== 0){
      countdown1Downtimer = frameCount;
    }
    var flooredCount = floor((frameCount - countdown1Downtimer)/50); 
    //This runs every time
    textAlign(CENTER);
    textSize(14)
    text("Continue to Level 2",width/2,100);
    textSize(200);
    if((3 - flooredCount) == 0){
    }else{
    text(3 - flooredCount,width/2,400);
    
    }
    
    //advances to next level
    if(flooredCount > 3){
      gameState = "levelTwo";
      Countdown_Song.stop();
      level2_music.amp(2);
      level2_music.loop();
    }
    break;
    
    case 'countDown2':
    background (12,23,210);
    textSize (32);
    //only runs the first time through the countdown
    if (countdown2Downtimer=== 0){
      countdown2Downtimer = frameCount;
    }
    var flooredCount = floor((frameCount - countdown2Downtimer)/50); 
    //This runs every time
    textAlign(CENTER);
    textSize(14)
    text("Continue to Level 3",width/2,100);
    textSize(200);
    if((3 - flooredCount) == 0){
    }else{
    text(3 - flooredCount,width/2,400);
    
    }
    
    //advances to next level
    if(flooredCount > 3){
      gameState = "levelThree";
      Countdown_Song.stop();
      level3_music.amp(0.4);
      level3_music.loop();
    
    }
    break;
    
    case 'countDown3':
    background (12,23,210);
    textSize (32);
    //only runs the first time through the countdown
    if (countdown3Downtimer=== 0){
      countdown3Downtimer = frameCount;
    }
    var flooredCount = floor((frameCount - countdown3Downtimer)/50); 
    //This runs every time
    textAlign(CENTER);
    textSize(14)
    text("Continue to Level 4",width/2,100);
    textSize(200);
    if((3 - flooredCount) == 0){
    }else{
    text(3 - flooredCount,width/2,400);
    
    }
    
    //advances to next level
    if(flooredCount > 3){
      gameState = "levelFour";
      Countdown_Song.stop();
      level4_music.amp(0.6);
      level4_music.loop();
    }
    
    break;
    
    case 'countDown4':
    background (12,23,210);
    textSize (32);
    //only runs the first time through the countdown
    if (countdown4Downtimer=== 0){
      countdown4Downtimer = frameCount;
    }
    var flooredCount = floor((frameCount - countdown4Downtimer)/50); 
    //This runs every time
    textAlign(CENTER);
    textSize(14)
    text("Continue to Level 5",width/2,100);
    textSize(200);
    if((3 - flooredCount) == 0){
    }else{
    text(3 - flooredCount,width/2,400);
    
    }
    
    //advances to next level
    if(flooredCount > 3){
      gameState = "levelFive";
      Countdown_Song.stop();
      level5_music.amp(0.9);
      level5_music.loop();
    
    }
    break;
   
    hero.changeAnimation('hero_smiley');
  } 

}

/*
 if(gameState == 'startUp'){
   text('Press X to START',width/2,height/2);
 }else if(gameState == 'lose'){
   text('Game Over Man',width/2,height/2);
 }else if(gameState == 'win'){
   text("You're Awesome",width/2,height/2);
 }else if(gameState == 'levelOne'){
  levelOne();
 }
*/




function keyPressed(){
 
 /*
 if (keyCode == RIGHT_ARROW) {
    //provide a burst of speed to the right (zero degrees)
   buttonOn = true;
  } 
  
  else if (keyCode == LEFT_ARROW) {
   //provide a burst of speed to the left (180 degress)
    hero.setSpeed(heroSpeed,180);
  } else if(key == ' '){
    //create bullet at the location of the hero and set the size
    var bullet = createSprite(hero.position.x, hero.position.y,5,5);
    //set the speed and direction of the bullet
    bullet.setSpeed(20,270);
    //make the bullet dissappear after a certain number of frames
    bullet.life = 20;
    bullet.shapeColor = 'white';
    //add the singular bullet to the GROUP bullets
    bullets.add(bullet);
    
  }
 */ 
}

function keyTyped(){
  if(key === ' '){
     gameState = 'levelOne';
     title_screen.stop();
      level1_music.amp(0.6);
      level1_music.loop();
  }
}



//only runs when contact is made

