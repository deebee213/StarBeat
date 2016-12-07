 function levelTwo(){
   buttonOn =false
   buttonOn2=false 
   buttonOn3=false
  //setup the enemy to be created ever 30 frames
  if(frameCount%enemyRate === 0){
    
    var currentGrid = noteGrid2 [gridPosition]
  
    for(var i= 0; i < currentGrid.length; i++){
      var x = 0;
      if(i===0){
      x = width*.2;}
      
      if(i===1){
      x = width/2;}
      
      if(i===2){
      x = width*.8;}
      
    
    if(currentGrid[i] > 0){
    //make an enemy at the top, random X
    var enemy = createSprite(x, 0,40,40);
    //set the speed and direction of the bullet
    enemy.setSpeed(7,90);
    //make the bullet dissappear after a certain number of frames
    enemy.life = 200;
    //we are going to store the enemy health in the .type parameter
    enemy.type = 2;
    enemy.shapeColor = 'red';
    enemy.addImage(enemyOneImg);
    //add the singular bullet to the GROUP bullets
    enemies.add(enemy);
    }
    }
    gridPosition++;
    gridPosition = gridPosition%(noteGrid2.length);
    
  
 }
 
  
  //eneimes.length returns the current length of the enemies array
  /*
  for(var i = 0;i < enemies.length;i++ ){
    if(enemies[i].position.x > width){
      enemies[i].position.x = 0;
    }
    if(enemies[i].position.x < 0){
      enemies[i].position.x = width;
    }
  }*/
  
  /* THIS IS CODE FOR BOUNCING ENEMIES ON THE X
  for(var i = 0;i < enemies.length;i++){
    // || is the OR symbol && is the AND symbol
    if(enemies[i].position.x > width || enemies[i].position.x < 0){
      enemies[i].velocity.x *= -1;
    }
    
  }
  */
  
  /* THIS IS THE CODE FOR RANDOM ENEMY MOVEMENT
  for(var i = 0;i < enemies.length;i++){
    //a technique for timing something randomly
    if(random(100) < enemyDrunkness){
      enemies[i].velocity.x += random(-enemyDrunkDirection,enemyDrunkDirection);
    }
    
    // || is the OR symbol && is the AND symbol
    if(enemies[i].position.x > width || enemies[i].position.x < 0){
      enemies[i].velocity.x *= -1;
    }
  } 
  */
  
  
  //test any overlap
  //first group name.overlap(second group,callback function)
  enemies.overlap(bullets,enemyHit);
  //did the enemy hit the button1?
  enemies.overlap(button1,button1Hit);
  enemies.overlap(button2,button2Hit);
  enemies.overlap(button3,button3Hit);
  
  
  
 
  background(255,255,0);
  textSize(32);
  text("Score " + score, 10, 30);
  //text("health " + button1Health,10, 60);
  //use this in every p5play program
  // only call it once per frame, almost always at the end of the draw
  
if(button1.getAnimationLabel() == "button1Left" && button1.animation.getframe() === button1.animation.getLastFrame ()){
    button1.changeAnimation ("button1Default")
    
  //start at the beginning 
  //button1.animation.changeFrame (0);
  
}

for(var i= 0; i <enemies.length;i++){
  if(enemies[i].position.y >height){
    score--;
    enemies[i].remove();
  }
  
}
  drawSprites();
       
    }

