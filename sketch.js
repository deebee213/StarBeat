// resize the canvas, but keep the 9:16 aspect ratio
var canvasMultiplier = 60;

//switch for buttons
var buttonOn = false;
var buttonOn2 = false;
var buttonOn3 = false;

var sprite_animation;
var sprite_animation2;
var sprite_animation3;
var sprite_animation4;
var sprite_animation5;
var sprite_animation6;

//make an enemy every so many frames
var enemyRate = 100;
var enemyAngle = 0;
var enemyDrunkness = 0;

//backgrounds 

var bg_title, bg_win, bg_lose, bg_background, bg_background2, bg_background3,test_page;

var buttonHit;


//declare music into the game 
var Level1_music, level2_music,level3_music,level4_music,level5_music;
var title_music;
var win_music;
var lose_music;
var help_music;
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

  var battery1_frames = [
  {'name':'enemy1_battery01', 'frame':{'x':0, 'y': 0, 'width': 100, 'height': 100}},
  {'name':'enemy1_battery02', 'frame':{'x':100, 'y': 0, 'width': 100, 'height': 100}},
  {'name':'enemy1_battery03', 'frame':{'x':200, 'y': 0, 'width': 100, 'height': 100}},
  {'name':'enemy1_battery04', 'frame':{'x':300, 'y': 0, 'width': 100, 'height': 100}},
  {'name':'enemy1_battery05', 'frame':{'x':400, 'y': 0, 'width': 100, 'height': 100}}
  ];
  
  var battery2_frames = [
  {'name':'enemy2_battery01', 'frame':{'x':500, 'y': 0, 'width': 100, 'height': 100}},
  {'name':'enemy2_battery02', 'frame':{'x':000, 'y': 100, 'width': 100, 'height': 100}},
  {'name':'enemy2_battery03', 'frame':{'x':100, 'y': 100, 'width': 100, 'height': 100}},
  {'name':'enemy2_battery04', 'frame':{'x':200, 'y': 100, 'width': 100, 'height': 100}},
  {'name':'enemy2_battery05', 'frame':{'x':300, 'y': 100, 'width': 100, 'height': 100}}
  ];
  
  var battery3_frames = [
  {'name':'enemy3_battery01', 'frame':{'x':400, 'y': 100, 'width': 100, 'height': 100}},
  {'name':'enemy3_battery02', 'frame':{'x':500, 'y': 100, 'width': 100, 'height': 100}},
  {'name':'enemy3_battery03', 'frame':{'x':0, 'y': 200, 'width': 100, 'height': 100}},
  {'name':'enemy3_battery04', 'frame':{'x':100, 'y': 200, 'width': 100, 'height': 100}},
  {'name':'enemy3_battery05', 'frame':{'x':200, 'y': 200, 'width': 100, 'height': 100}}
  ];

  var button1_frames = [
  {'name':'hero_button01', 'frame':{'x':300, 'y': 200, 'width': 100, 'height': 100}},
  {'name':'hero_button02', 'frame':{'x':400, 'y': 200, 'width': 100, 'height': 100}},
  {'name':'hero_button03', 'frame':{'x':500, 'y': 200, 'width': 100, 'height': 100}},
  {'name':'hero_button04', 'frame':{'x':0, 'y': 300, 'width': 100, 'height': 100}},
  {'name':'hero_button05', 'frame':{'x':100, 'y': 300, 'width': 100, 'height': 100}},
  {'name':'hero_button06', 'frame':{'x':200, 'y': 300, 'width': 100, 'height': 100}},
  {'name':'hero_button07', 'frame':{'x':300, 'y': 300, 'width': 100, 'height': 100}}
  
  ];
  
   var button2_frames = [
  {'name':'hero_button01', 'frame':{'x':400, 'y': 300, 'width': 100, 'height': 100}},
  {'name':'hero_button02', 'frame':{'x':500, 'y': 300, 'width': 100, 'height': 100}},
  {'name':'hero_button03', 'frame':{'x':0, 'y': 400, 'width': 100, 'height': 100}},
  {'name':'hero_button04', 'frame':{'x':100, 'y': 400, 'width': 100, 'height': 100}},
  {'name':'hero_button05', 'frame':{'x':200, 'y': 400, 'width': 100, 'height': 100}},
  {'name':'hero_button06', 'frame':{'x':300, 'y': 400, 'width': 100, 'height': 100}}
  ];
  
   var button3_frames = [
  {'name':'hero_button01', 'frame':{'x':400, 'y': 400, 'width': 100, 'height': 100}},
  {'name':'hero_button02', 'frame':{'x':500, 'y': 400, 'width': 100, 'height': 100}},
  {'name':'hero_button03', 'frame':{'x':0, 'y': 500, 'width': 100, 'height': 100}},
  {'name':'hero_button04', 'frame':{'x':100, 'y': 500, 'width': 100, 'height': 100}},
  {'name':'hero_button05', 'frame':{'x':200, 'y': 500, 'width': 100, 'height': 100}},
  {'name':'hero_button06', 'frame':{'x':300, 'y': 500, 'width': 100, 'height': 100}}
  ];
  
function preload (){
  
    Final_Sprites = loadSpriteSheet("assets/Final_Sprites.png", button1_frames);
    sprite_animation = loadAnimation(Final_Sprites);
    
    Final_Sprites = loadSpriteSheet("assets/Final_Sprites.png", button2_frames);
    sprite_animation2 = loadAnimation(Final_Sprites);
    
    Final_Sprites = loadSpriteSheet("assets/Final_Sprites.png", button3_frames);
    sprite_animation3 = loadAnimation(Final_Sprites);
    
    Final_Sprites = loadSpriteSheet("assets/Final_Sprites.png", battery1_frames);
    sprite_animation4 = loadAnimation(Final_Sprites);
    
    Final_Sprites = loadSpriteSheet("assets/Final_Sprites.png", battery2_frames);
    sprite_animation5 = loadAnimation(Final_Sprites);
    
    Final_Sprites = loadSpriteSheet("assets/Final_Sprites.png", battery3_frames);
    sprite_animation6 = loadAnimation(Final_Sprites);
  
  //use this function to preload any media ie: picture, animations, sound
  //shootSound =loadSound("assets/woosh.mp3");
  title_screen =loadSound("assets/Title_Screen.mp3");
  level1_music = loadSound("assets/Stage_1.mp3")
  level2_music = loadSound("assets/Stage_2.mp3")
  level3_music = loadSound("assets/Stage_3.mp3")
  level4_music = loadSound("assets/Stage_4.mp3")
  level5_music = loadSound("assets/Stage_5.mp3")
  help_music = loadSound("assets/Help_Screen.mp3")
  
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
  test_page = loadImage ("assets/Test_Page.png");
  
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
  var button2Img = loadImage ("assets/button1.png");
  var button3Img = loadImage ("assets/Enemy_02.png");
  
  //define the hero sprite in the middle towards the bottom 
  button1 = createSprite(width*.2, height*.8, 10, 10);
  
  button1.addAnimation('button_one',sprite_animation);
  button1.changeAnimation('button_one');
  
  button2 = createSprite(width/2,height*.8, 10, 10);
  
  button2.addAnimation('button_two',sprite_animation2);
  button2.changeAnimation('button_two');
  
  button3 = createSprite(width*.8,height*.8, 10, 10);
  
  button3.addAnimation('button_three',sprite_animation3);
  button3.changeAnimation('button_three');
  // give the hero sprite some friction
  //decrease number to increase friction, increase number to decrease friction
  //button1.friction = 0.85;
  
  button1.addImage(button1Img);
  button2.addImage(button2Img);
  button3.addImage(button3Img);
  
  //button1.shapeColor = 'white';
  
      title_screen.amp(0.6);
      title_screen.loop();

}

function draw() {
  background(255,255,0);
  
   switch(gameState){
    case 'startUp':
      //draw image to background
      //background (bg_title);
      text('Press SPACE to START',width/3,height/2);
      text(' Click "H" for help on how to play ',width/3.5,height/1.1);
      break;
    
    case 'helpMenu':
      background (test_page)
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
   
    button1.changeAnimation('hero_battery');
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
    button1.setSpeed(heroSpeed,180);
  } else if(key == ' '){
    //create bullet at the location of the hero and set the size
    var bullet = createSprite(button1.position.x, button1.position.y,5,5);
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
     help_music.stop();
      level1_music.amp(0.6);
      level1_music.loop();
  }
  if(key === 'h'){
     gameState = 'helpMenu';
     title_screen.stop();
      help_music.amp(0.9);
      help_music.loop();

  }
  
}



//only runs when contact is made

